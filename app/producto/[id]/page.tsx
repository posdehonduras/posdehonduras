"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ProductDetail } from "@/components/product-detail"
import { getProductById } from "@/lib/db"
import type { Product } from "@/types"
import Header from "@/components/header-products"

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      // Comprobar si params.id es un string
      if (typeof params.id === "string") {
        const productId = decodeURIComponent(params.id)
        try {
          const productData = await getProductById(productId)
          if (!productData) {
            // Si no se encuentra el producto, redirigir a la página de productos
            router.push("/productos")
            return
          }

          // Limpiar las URLs de las imágenes antes de establecer el producto
          if (productData.images) {
            productData.images = productData.images.map((img) => (img ? img.replace(/["']/g, "") : ""))
          }

          // Limpiar la URL del logo de la marca si existe
          if (productData.brand && productData.brand.logo) {
            productData.brand.logo = productData.brand.logo.replace(/["']/g, "")
          }

          // Limpiar otras URLs
          if (productData.videoUrl) {
            productData.videoUrl = productData.videoUrl.replace(/["']/g, "")
          }

          if (productData.pdfUrl) {
            productData.pdfUrl = productData.pdfUrl.replace(/["']/g, "")
          }

          setProduct(productData)
        } catch (error) {
          console.error("Error fetching product:", error)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchProduct()
  }, [params.id, router])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!product) {
    return <div className="container mx-auto py-10 px-4">Producto no encontrado</div>
  }

  return (
    <div>
      <Header />
      <ProductDetail product={product} />
    </div>
  )
}

