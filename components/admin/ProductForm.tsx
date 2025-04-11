"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Trash2,
  Plus,
  Loader2,
  X,
  FileText,
  ListChecks,
  Image,
  Tags,
  Building2,
  Shield,
  Save,
  CheckCircle,
  PlusCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { addProduct, updateProduct } from "@/lib/db"
import type { Product } from "@/types"

// Esquema de validación para el formulario
const productSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  description: z.array(z.string().min(1, "La descripción no puede estar vacía")),
  images: z.array(z.string().url("Debe ser una URL válida")),
  categories: z.array(z.string().min(1, "La categoría no puede estar vacía")),
  videoUrl: z.string().url("Debe ser una URL válida").optional().or(z.literal("")),
  pdfUrl: z.string().url("Debe ser una URL válida").optional().or(z.literal("")),
  price: z.number().min(0, "El precio debe ser mayor o igual a 0").nullable(), // Ahora es nullable
  brand: z.object({
    name: z.string().min(1, "El nombre de la marca es requerido"),
    logo: z.string().url("Debe ser una URL válida"),
  }),
  warranty: z
    .union([
      z.object({
        years: z.number().min(0, "Los años deben ser mayor o igual a 0"),
        description: z.string().min(1, "La descripción de la garantía es requerida"),
      }),
      z.string().optional(),
      z.null(),
    ])
    .optional(),
})

type ProductFormValues = z.infer<typeof productSchema>

interface ProductFormProps {
  product?: Product
  isEditing?: boolean
}

export default function ProductForm({ product, isEditing = false }: ProductFormProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Estado para controlar si se incluye garantía y su tipo
  const [includeWarranty, setIncludeWarranty] = useState(!!product?.warranty)
  const [warrantyAsText, setWarrantyAsText] = useState<string>("")

  // Estado para controlar si se incluye precio
  const [includePrice, setIncludePrice] = useState(product?.price !== null && product?.price !== undefined)

  // Estados para manejar los arrays
  const [descriptions, setDescriptions] = useState<string[]>(product?.description || [""])
  const [images, setImages] = useState<string[]>(product?.images || [""])
  const [categories, setCategories] = useState<string[]>(product?.categories || [""])

  // Inicializar el texto de garantía si existe
  useEffect(() => {
    if (product?.warranty && typeof product.warranty === "object") {
      const { years, description } = product.warranty
      setWarrantyAsText(`${years} ${years === 1 ? "año" : "años"} - ${description}`)
    } else if (product?.warranty && typeof product.warranty === "string") {
      setWarrantyAsText(product.warranty)
    }
  }, [product])

  // Inicializar el formulario con los valores del producto si está editando
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues:
      isEditing && product
        ? {
            ...product,
            price: product.price !== null && product.price !== undefined ? Number(product.price) : null,
            warranty: product.warranty
              ? typeof product.warranty === "object"
                ? {
                    ...product.warranty,
                    years: Number(product.warranty.years),
                  }
                : product.warranty.toString()
              : null,
          }
        : {
            name: "",
            description: descriptions,
            images: images,
            categories: categories,
            videoUrl: "",
            pdfUrl: "",
            price: null, // Precio nulo por defecto
            brand: {
              name: "",
              logo: "",
            },
            warranty: null,
          },
  })

  // Funciones para manejar los arrays
  const addDescription = () => {
    const newDescriptions = [...descriptions, ""]
    setDescriptions(newDescriptions)
    form.setValue("description", newDescriptions)
  }

  const removeDescription = (index: number) => {
    if (descriptions.length > 1) {
      const newDescriptions = descriptions.filter((_, i) => i !== index)
      setDescriptions(newDescriptions)
      form.setValue("description", newDescriptions)
    }
  }

  const updateDescription = (index: number, value: string) => {
    const newDescriptions = [...descriptions]
    newDescriptions[index] = value
    setDescriptions(newDescriptions)
    form.setValue("description", newDescriptions)
  }

  const addImage = () => {
    const newImages = [...images, ""]
    setImages(newImages)
    form.setValue("images", newImages)
  }

  const removeImage = (index: number) => {
    if (images.length > 1) {
      const newImages = images.filter((_, i) => i !== index)
      setImages(newImages)
      form.setValue("images", newImages)
    }
  }

  const updateImage = (index: number, value: string) => {
    const newImages = [...images]
    newImages[index] = value
    setImages(newImages)
    form.setValue("images", newImages)
  }

  const addCategory = () => {
    const newCategories = [...categories, ""]
    setCategories(newCategories)
    form.setValue("categories", newCategories)
  }

  const removeCategory = (index: number) => {
    if (categories.length > 1) {
      const newCategories = categories.filter((_, i) => i !== index)
      setCategories(newCategories)
      form.setValue("categories", newCategories)
    }
  }

  const updateCategory = (index: number, value: string) => {
    const newCategories = [...categories]
    newCategories[index] = value
    setCategories(newCategories)
    form.setValue("categories", newCategories)
  }

  // Efecto para manejar el cambio en el campo de garantía
  useEffect(() => {
    if (includeWarranty) {
      // Si incluimos garantía, usamos el texto
      form.setValue("warranty", warrantyAsText || "")
    } else {
      // Eliminamos warranty del formulario cuando no se incluye
      form.setValue("warranty", null)
    }
  }, [includeWarranty, form, warrantyAsText])

  // Efecto para manejar el cambio en el campo de precio
  useEffect(() => {
    if (!includePrice) {
      form.setValue("price", null)
    } else if (form.getValues("price") === null) {
      form.setValue("price", 0)
    }
  }, [includePrice, form])

  // Manejar el envío del formulario
  const onSubmit = async (data: ProductFormValues) => {
    // Asegurarse de que los arrays estén actualizados
    data.description = descriptions
    data.images = images
    data.categories = categories

    setIsSubmitting(true)
    try {
      const dataToSend = { ...data }

      // Si no incluye garantía, establecemos el campo warranty como null
      if (!includeWarranty) {
        dataToSend.warranty = null
      }

      // Si no incluye precio, establecemos el campo price como null
      if (!includePrice) {
        dataToSend.price = null
      }

      if (isEditing && product) {
        // Actualización normal con todos los campos (incluyendo los nulos)
        await updateProduct(product.id, dataToSend)

        toast({
          title: "Éxito",
          description: "Producto actualizado correctamente",
        })
      } else {
        // Crear nuevo producto
        await addProduct(dataToSend)

        toast({
          title: "Éxito",
          description: "Producto agregado correctamente",
        })
      }
      router.push("/admin")
      router.refresh()
    } catch (error) {
      console.error("Error saving product:", error)
      toast({
        title: "Error",
        description: isEditing ? "No se pudo actualizar el producto" : "No se pudo agregar el producto",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Sección de información básica */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#1B1D32] flex items-center">
            <FileText className="mr-2 h-5 w-5 text-[#4D60AA]" /> Información básica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre del producto */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col h-full">
                  <FormLabel className="font-medium text-[#1B1D32]">Nombre del producto *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ej: 3nStar | RPT006"
                      {...field}
                      className="focus:ring-2 focus:ring-[#4D60AA] h-10"
                    />
                  </FormControl>
                  <FormMessage className="text-[#9F1C2C]" />
                </FormItem>
              )}
            />

            {/* Precio (opcional) */}
            <div className="flex flex-col h-full relative translate-y-[-16px]">
              <div className="flex justify-between items-center mb-2">
                <FormLabel className="font-medium text-[#1B1D32] translate-y-[5px]">Precio (L)</FormLabel>
                <Button
                  type="button"
                  variant={includePrice ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIncludePrice(!includePrice)}
                  className={
                    includePrice
                      ? "bg-[#4D60AA] hover:bg-[#3D4F99] text-white"
                      : "border-[#4D60AA] text-[#4D60AA] hover:bg-[#4D60AA]/10"
                  }
                >
                  {includePrice ? "Quitar precio" : "Incluir precio"}
                </Button>
              </div>
              {includePrice ? (
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          placeholder="Ej: 2350"
                          {...field}
                          value={field.value === null ? "" : field.value}
                          onChange={(e) => field.onChange(e.target.value ? Number.parseFloat(e.target.value) : 0)}
                          className="focus:ring-2 focus:ring-[#4D60AA] h-10 relative translate-y-[-6px]"
                        />
                      </FormControl>
                      <FormMessage className="text-[#9F1C2C]" />
                    </FormItem>
                  )}
                />
              ) : (
                <div className="h-10 flex items-center text-[#67686B] text-sm italic">
                  No se incluirá precio en este producto
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sección de detalles del producto */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#1B1D32] flex items-center">
            <ListChecks className="mr-2 h-5 w-5 text-[#4D60AA]" /> Descripciones
          </h2>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm text-[#67686B]">Agregue las características principales del producto</p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addDescription}
                className="flex items-center border-[#4D60AA] text-[#4D60AA] hover:bg-[#4D60AA]/10"
              >
                <Plus className="h-4 w-4 mr-1" /> Agregar descripción
              </Button>
            </div>

            <div className="space-y-3">
              {descriptions.map((description, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-1 mr-2">
                    <Input
                      placeholder="Ej: Tecnología de impresión Térmica directa"
                      value={description}
                      onChange={(e) => updateDescription(index, e.target.value)}
                      className="focus:ring-2 focus:ring-[#4D60AA]"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeDescription(index)}
                    disabled={descriptions.length === 1}
                    className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#9F1C2C]/10 hover:text-[#9F1C2C]"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de multimedia */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#1B1D32] flex items-center">
            <Image  className="mr-2 h-5 w-5 text-[#4D60AA]" /> Multimedia
          </h2>

          {/* Imágenes */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <FormLabel className="font-medium text-[#1B1D32]">Imágenes del producto *</FormLabel>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addImage}
                className="flex items-center border-[#4D60AA] text-[#4D60AA] hover:bg-[#4D60AA]/10"
              >
                <Plus className="h-4 w-4 mr-1" /> Agregar imagen
              </Button>
            </div>
            <p className="text-sm text-[#67686B] mb-2">
              Agregue URLs de imágenes del producto desde Cloudinary u otro servicio
            </p>
            <div className="space-y-3">
              {images.map((image, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-1 mr-2">
                    <Input
                      placeholder="https://res.cloudinary.com/..."
                      value={image}
                      onChange={(e) => updateImage(index, e.target.value)}
                      className="focus:ring-2 focus:ring-[#4D60AA]"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeImage(index)}
                    disabled={images.length === 1}
                    className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#9F1C2C]/10 hover:text-[#9F1C2C]"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* URLs de recursos adicionales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <FormField
              control={form.control}
              name="videoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1B1D32]">URL del video (opcional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://www.youtube.com/embed/..."
                      {...field}
                      className="focus:ring-2 focus:ring-[#4D60AA]"
                    />
                  </FormControl>
                  <FormMessage className="text-[#9F1C2C]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pdfUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1B1D32]">URL del PDF (opcional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://res.cloudinary.com/..."
                      {...field}
                      className="focus:ring-2 focus:ring-[#4D60AA]"
                    />
                  </FormControl>
                  <FormMessage className="text-[#9F1C2C]" />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Sección de categorización */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#1B1D32] flex items-center">
            <Tags className="mr-2 h-5 w-5 text-[#4D60AA]" /> Categorización
          </h2>

          {/* Categorías */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <FormLabel className="font-medium text-[#1B1D32]">Categorías *</FormLabel>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addCategory}
                className="flex items-center border-[#4D60AA] text-[#4D60AA] hover:bg-[#4D60AA]/10"
              >
                <Plus className="h-4 w-4 mr-1" /> Agregar categoría
              </Button>
            </div>
            <p className="text-sm text-[#67686B] mb-2">Agregue categorías para clasificar el producto</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#4D60AA]/10 rounded-full pl-3 pr-1 py-1 border border-[#4D60AA]/20 group"
                >
                  <Input
                    placeholder="Ej: impresoras"
                    value={category}
                    onChange={(e) => updateCategory(index, e.target.value)}
                    className="border-none bg-transparent p-0 h-6 min-w-20 focus-visible:ring-0 focus-visible:ring-offset-0 text-[#1B1D32]"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeCategory(index)}
                    disabled={categories.length === 1}
                    className="h-6 w-6 rounded-full hover:bg-[#9F1C2C]/10 hover:text-[#9F1C2C]"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de información de la marca */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[#1B1D32] flex items-center">
            <Building2 className="mr-2 h-5 w-5 text-[#4D60AA]" /> Información de la marca
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="brand.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1B1D32]">Nombre de la marca *</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej: 3nStar" {...field} className="focus:ring-2 focus:ring-[#4D60AA]" />
                  </FormControl>
                  <FormMessage className="text-[#9F1C2C]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="brand.logo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-[#1B1D32]">Logo de la marca (URL) *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://res.cloudinary.com/..."
                      {...field}
                      className="focus:ring-2 focus:ring-[#4D60AA]"
                    />
                  </FormControl>
                  <FormMessage className="text-[#9F1C2C]" />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Sección de garantía */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#1B1D32] flex items-center">
              <Shield className="mr-2 h-5 w-5 text-[#4D60AA]" /> Garantía
            </h2>
            <Button
              type="button"
              variant={includeWarranty ? "default" : "outline"}
              size="sm"
              onClick={() => setIncludeWarranty(!includeWarranty)}
              className={
                includeWarranty
                  ? "bg-[#4D60AA] hover:bg-[#3D4F99] text-white"
                  : "border-[#4D60AA] text-[#4D60AA] hover:bg-[#4D60AA]/10"
              }
            >
              {includeWarranty ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-1" /> Quitar garantía
                </>
              ) : (
                <>
                  <PlusCircle className="h-4 w-4 mr-1" /> Incluir garantía
                </>
              )}
            </Button>
          </div>

          {includeWarranty ? (
            <FormField
              control={form.control}
              name="warranty"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Ej: 1 año - Garantía de fábrica"
                      value={warrantyAsText}
                      onChange={(e) => {
                        setWarrantyAsText(e.target.value)
                        field.onChange(e.target.value)
                      }}
                      className="focus:ring-2 focus:ring-[#4D60AA]"
                    />
                  </FormControl>
                  <FormMessage className="text-[#9F1C2C]" />
                </FormItem>
              )}
            />
          ) : (
            <p className="text-sm text-[#67686B] italic">Este producto no incluye información de garantía.</p>
          )}
        </div>

        {/* Botones de acción */}
        <div className="flex justify-end gap-4 mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin")}
            disabled={isSubmitting}
            className="min-w-32 border-[#67686B] text-[#67686B] hover:bg-[#67686B]/10"
          >
            <X className="h-4 w-4 mr-1" /> Cancelar
          </Button>
          <Button type="submit" disabled={isSubmitting} className="min-w-32 bg-[#ed1b34] hover:bg-[#9F1C2C] text-white">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isEditing ? "Actualizando..." : "Agregando..."}
              </>
            ) : (
              <>
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4 mr-1" /> Actualizar producto
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-1" /> Agregar producto
                  </>
                )}
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

