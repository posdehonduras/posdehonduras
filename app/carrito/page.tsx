"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/store/cart"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Trash2, ArrowLeft, Plus, Minus, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import toast, { type Toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { saveQuoteData } from "@/lib/supabase"
import Header from "@/components/header-products"

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Ingrese un correo electrónico válido.",
  }),
  direccion: z.string().optional(),
  departamento: z.string().min(1, {
    message: "Seleccione un departamento.",
  }),
  telefono: z.string().min(8, {
    message: "Ingrese un número de teléfono válido.",
  }),
  recibirOfertas: z.boolean().default(false),
})

export default function CartPage() {
  const { items, removeItem, updateItemQuantity, clearCart } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      direccion: "",
      departamento: "",
      telefono: "",
      recibirOfertas: false,
    },
  })

  // Función para limpiar URLs de imagenes
  const cleanImageUrl = (url: string): string => {
    if (!url) return "/img/placeholder.svg"
    // Eliminar comillas adicionales y espacios
    return url.replace(/["']/g, "").trim()
  }

  const calculateSubtotal = (price: string | number | null | undefined, quantity: number) => {
    // Si no hay precio, retornar 0
    if (price === undefined || price === null) {
      return 0
    }

    // Si price es un numero, simplemente multiplicar
    if (typeof price === "number") {
      return price * quantity
    }

    // Si es string, limpiar el precio: remover símbolos y convertir comas en vacio para manejar miles
    const cleanPrice = price.trim().replace("L", "").replace("$", "").replace(/,/g, "")

    // Convertir a número y multiplicar por cantidad
    return Number.parseFloat(cleanPrice) * quantity
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString("es-HN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  const cartTotal = items.reduce((acc, item) => acc + calculateSubtotal(item.price, item.quantity), 0)

  // Verificar si un producto tiene precio
  const hasPrice = (price: string | number | null | undefined) => {
    return price !== undefined && price !== null
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (isSubmitting) return

    try {
      setIsSubmitting(true)

      // Guardar datos en Supabase (independiente de si marca o no el checkbox)
      await saveQuoteData(values.nombre, values.email, values.telefono, values.recibirOfertas)

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerEmail: values.email,
          formData: values,
          cartItems: items,
          cartTotal: cartTotal, // Enviamos el cartTotal calculado en el cliente
        }),
      })

      if (!response.ok) {
        throw new Error("Error al enviar el correo")
      }

      clearCart()

      toast.custom(
        (t: Toast) => (
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5">
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">Pedido enviado con éxito</p>
                  <p className="mt-1 text-sm text-gray-500">Gracias por tu compra. Te contactaremos pronto.</p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Cerrar
              </button>
            </div>
          </div>
        ),
        { duration: 5000 },
      )
      setShowCheckout(false)
      router.push("/productos") // Redirigir a la página de productos después del envío
    } catch (error) {
      console.error("Error:", error)
      toast.error("Hubo un error al procesar tu pedido. Por favor, intenta de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-sm text-center">
          <h1 className="text-2xl font-bold mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-8">Agrega algunos productos para comenzar</p>
          <Link href="/productos">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a la tienda
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Carrito de Compras</h1>
              <Link href="/productos">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Seguir comprando</span>
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {items.map((item) => {
                const itemTotal = calculateSubtotal(item.price, item.quantity)
                // Obtener la primera imagen y limpiarla
                const imageUrl =
                  item.images && item.images.length > 0 ? cleanImageUrl(item.images[0]) : "/img/placeholder.svg"

                return (
                  <div key={item.id} className="flex items-center space-x-4 py-4 border-b">
                    <div className="w-20 h-20 flex-shrink-0 relative rounded-md overflow-hidden">
                      <Image
                        src={imageUrl || "/placeholder.svg"}
                        alt={item.name || "Imagen del producto"}
                        fill
                        sizes="(max-width: 640px) 80px, (max-width: 768px) 120px, 160px"
                        style={{ objectFit: "cover" }}
                        onError={(e) => {
                          // Si hay error al cargar la imagen, usar placeholder
                          const target = e.target as HTMLImageElement
                          target.src = "/img/placeholder.svg"
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                        <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                      <div className="mt-1 text-sm text-gray-500">
                        {hasPrice(item.price) ? (
                          <>
                            <p>
                              Precio: L{" "}
                              {typeof item.price === "string"
                                ? item.price.trim().replace("$", "")
                                : formatCurrency(item.price as number)}
                            </p>
                            <p>Cantidad: {item.quantity}</p>
                            <p className="font-semibold">Total: L {formatCurrency(itemTotal)}</p>
                          </>
                        ) : (
                          <p>Cantidad: {item.quantity}</p>
                        )}
                      </div>
                      <div className="flex items-center mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity === 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="mx-2 text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            {cartTotal > 0 && (
              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span>L {formatCurrency(cartTotal)}</span>
                </div>
              </div>
            )}
            {!showCheckout ? (
              <div className="mt-6">
                <Button className="w-full" onClick={() => setShowCheckout(true)}>
                  Proceder con la cotización
                </Button>
              </div>
            ) : (
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-4">Información de la cotización</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="nombre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Juan Pérez" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="juan@ejemplo.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="departamento"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Departamento</FormLabel>
                          <FormControl>
                            <select {...field} className="w-full p-2 border rounded">
                              <option value="">Seleccione un departamento</option>
                              <option value="Atlántida">Atlántida</option>
                              <option value="Choluteca">Choluteca</option>
                              <option value="Colón">Colón</option>
                              <option value="Comayagua">Comayagua</option>
                              <option value="Copán">Copán</option>
                              <option value="Cortés">Cortés</option>
                              <option value="El Paraíso">El Paraíso</option>
                              <option value="Francisco Morazán">Francisco Morazán</option>
                              <option value="Gracias a Dios">Gracias a Dios</option>
                              <option value="Intibucá">Intibucá</option>
                              <option value="Islas de la Bahía">Islas de la Bahía</option>
                              <option value="La Paz">La Paz</option>
                              <option value="Lempira">Lempira</option>
                              <option value="Ocotepeque">Ocotepeque</option>
                              <option value="Olancho">Olancho</option>
                              <option value="Santa Bárbara">Santa Bárbara</option>
                              <option value="Valle">Valle</option>
                              <option value="Yoro">Yoro</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="direccion"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dirección (opcional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Calle, número, colonia..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono</FormLabel>
                          <FormControl>
                            <Input placeholder="12345678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="recibirOfertas"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border">
                          <FormControl>
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={field.onChange}
                              className="h-4 w-4 mt-1"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Recibir ofertas y promociones</FormLabel>
                            <p className="text-sm text-gray-500">
                              Me gustaría recibir información sobre ofertas, nuevos productos y promociones.
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        "Enviar Cotización"
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

