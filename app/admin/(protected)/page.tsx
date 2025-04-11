"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getAllProducts, deleteProduct, toggleProductVisibility, migrateProductsVisibility } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Pencil, Trash2, Plus, Search, RefreshCw, LogOut, Eye, EyeOff, Database } from "lucide-react"
import type { Product } from "@/types"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [productToDelete, setProductToDelete] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false) // Corregido: cambiado de isDeleting a false
  const [isTogglingVisibility, setIsTogglingVisibility] = useState(false)
  const [isMigrating, setIsMigrating] = useState(false)
  const { toast } = useToast()
  const { signOut, user } = useAuth()
  const router = useRouter()

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const data = await getAllProducts()
      // Ensure all products have the expected structure
      const sanitizedProducts = data.map((product) => ({
        ...product,
        // Ensure price is either a number, string or null, not undefined
        price: product.price === undefined ? null : product.price,
        // Ensure categories is always an array
        categories: Array.isArray(product.categories) ? product.categories : [],
        // Ensure images is always an array
        images: Array.isArray(product.images) ? product.images : [],
        // Ensure description is always an array
        description: Array.isArray(product.description) ? product.description : [],
        // Ensure visible is a boolean
        visible: product.visible !== undefined ? product.visible : true,
      }))
      setProducts(sanitizedProducts)
    } catch (error) {
      console.error("Error fetching products:", error)
      toast({
        title: "Error",
        description: "No se pudieron cargar los productos",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleDelete = async () => {
    if (!productToDelete) return

    setIsDeleting(true)
    try {
      await deleteProduct(productToDelete)
      setProducts(products.filter((product) => product.id !== productToDelete))
      toast({
        title: "Éxito",
        description: "Producto eliminado correctamente",
      })
    } catch (error) {
      console.error("Error deleting product:", error)
      toast({
        title: "Error",
        description: "No se pudo eliminar el producto",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
      setProductToDelete(null)
    }
  }

  const handleToggleVisibility = async (productId: string, currentVisibility: boolean) => {
    setIsTogglingVisibility(true)
    try {
      await toggleProductVisibility(productId, !currentVisibility)

      // Actualizar el estado local
      setProducts(
        products.map((product) => (product.id === productId ? { ...product, visible: !currentVisibility } : product)),
      )

      toast({
        title: "Éxito",
        description: `Producto ${!currentVisibility ? "visible" : "oculto"} correctamente`,
      })
    } catch (error) {
      console.error("Error toggling product visibility:", error)
      toast({
        title: "Error",
        description: "No se pudo cambiar la visibilidad del producto",
        variant: "destructive",
      })
    } finally {
      setIsTogglingVisibility(false)
    }
  }

  const handleMigrateVisibility = async () => {
    setIsMigrating(true)
    try {
      const updatedCount = await migrateProductsVisibility()

      if (updatedCount > 0) {
        toast({
          title: "Migración completada",
          description: `Se actualizaron ${updatedCount} productos con el campo de visibilidad.`,
        })
        // Recargar los productos para reflejar los cambios
        await fetchProducts()
      } else {
        toast({
          title: "Información",
          description: "Todos los productos ya tienen el campo de visibilidad.",
        })
      }
    } catch (error) {
      console.error("Error migrating products visibility:", error)
      toast({
        title: "Error",
        description: "No se pudo completar la migración de visibilidad.",
        variant: "destructive",
      })
    } finally {
      setIsMigrating(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push("/admin/login")
    } catch (error) {
      console.error("Error signing out:", error)
      toast({
        title: "Error",
        description: "No se pudo cerrar sesión",
        variant: "destructive",
      })
    }
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Safe function to format price
  const formatPrice = (price: number | string | null | undefined) => {
    if (price === undefined || price === null) {
      return "Sin precio"
    }
    try {
      const numericPrice = typeof price === "string" ? Number.parseFloat(price) : price
      return `L ${numericPrice.toLocaleString("es-HN", { minimumFractionDigits: 2 })}`
    } catch (error) {
      console.error("Error formatting price:", error)
      return "Error de formato"
    }
  }

  // Contar productos sin campo de visibilidad
  const productsWithoutVisibility = products.filter((product) => product.needsMigration).length

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Administración de Productos</h1>
          {user && <p className="text-sm text-gray-500">Conectado como: {user.email}</p>}
        </div>
        <div className="flex gap-2">
          <Button onClick={fetchProducts} variant="outline" size="icon" title="Refrescar">
            <RefreshCw className="h-4 w-4" />
          </Button>
          {productsWithoutVisibility > 0 && (
            <Button
              onClick={handleMigrateVisibility}
              variant="outline"
              disabled={isMigrating}
              title="Migrar visibilidad de productos"
            >
              <Database className="h-4 w-4 mr-2" />
              {isMigrating ? "Migrando..." : `Migrar (${productsWithoutVisibility})`}
            </Button>
          )}
          <Link href="/admin/add">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Agregar Producto
            </Button>
          </Link>
          <Button onClick={handleSignOut} variant="destructive">
            <LogOut className="h-4 w-4 mr-2" />
            Cerrar sesión
          </Button>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableCaption>Lista de productos disponibles</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Nombre</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead>Categorías</TableHead>
                <TableHead>Imágenes</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10">
                    No se encontraron productos
                  </TableCell>
                </TableRow>
              ) : (
                filteredProducts.map((product) => (
                  <TableRow key={product.id} className={!product.visible ? "bg-gray-50" : ""}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{formatPrice(product.price)}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {(product.categories || []).map((category, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {category}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{(product.images || []).length}</TableCell>
                    <TableCell>
                      {product.needsMigration ? (
                        <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                          Sin definir
                        </span>
                      ) : (
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${product.visible ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                        >
                          {product.visible ? "Visible" : "Oculto"}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleToggleVisibility(product.id, product.visible || false)}
                          disabled={isTogglingVisibility || product.needsMigration}
                          title={product.visible ? "Ocultar producto" : "Mostrar producto"}
                        >
                          {product.visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Link href={`/admin/edit/${product.id}`}>
                          <Button variant="outline" size="sm" title="Editar producto">
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </Link>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => setProductToDelete(product.id)}
                              title="Eliminar producto"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Esta acción no se puede deshacer. Esto eliminará permanentemente el producto
                                <span className="font-bold">
                                  {" "}
                                  {products.find((p) => p.id === productToDelete)?.name}
                                </span>
                                .
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancelar</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={handleDelete}
                                disabled={isDeleting}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                {isDeleting ? "Eliminando..." : "Eliminar"}
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}

