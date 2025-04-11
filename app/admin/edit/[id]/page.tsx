"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { getProductById } from "@/lib/db"
import ProductForm from "@/components/admin/ProductForm"
import type { Product } from "@/types"

export default function EditProductPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      if (!params.id) return

      try {
        const productData = await getProductById(params.id as string)
        if (!productData) {
          setError("Producto no encontrado")
          return
        }
        setProduct(productData)
      } catch (err) {
        console.error("Error fetching product:", err)
        setError("Error al cargar el producto")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.id])

  if (loading) {
    return (
      <div className="container mx-auto py-10 px-4">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="container mx-auto py-10 px-4">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>{error || "Producto no encontrado"}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Editar Producto: {product.name}</h1>
      <ProductForm product={product} isEditing={true} />
    </div>
  )
}

