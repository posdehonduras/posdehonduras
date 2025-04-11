"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, FileText, PlayCircle } from "lucide-react"
import { useCart } from "@/store/cart"
import type { Product } from "@/types"
import { Button } from "@/components/ui/button"
import { VideoModal } from "@/components/ui/video-modal"
import toast from "react-hot-toast"
import Image from "next/image"
import Link from "next/link"

// Función para optimizar URLs de Cloudinary
const optimizeCloudinaryUrl = (url: string | undefined, width = 500): string => {
  if (!url || !url.includes("cloudinary")) return "/placeholder.svg"

  // Asegurarse de que no hay comillas adicionales en la URL
  const cleanUrl = url.replace(/["']/g, "")

  // Insertamos parámetros de transformación para calidad y formato
  return cleanUrl.replace("/upload/", `/upload/q_auto:good,f_auto,w_${width}/`)
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart((state) => state.addItem)
  const [showVideo, setShowVideo] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const handleAddToCart = () => {
    // Crear una copia limpia del producto para el carrito
    const cleanProduct = {
      ...product,
      images: product.images.map((img) => img.replace(/["']/g, "")),
    }


    // Añadir el producto al carrito y mostrar notificación (Pagina principal de productos)
    addItem(cleanProduct)
  toast.success(
    <div className="flex items-center">
      <div className="mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      </div>
      <div>
        <p className="font-medium">Producto agregado</p>
        <p className="text-sm">{product.name}</p>
      </div>
    </div>,
    {
      duration: 3000,
      position: "bottom-right",
      style: {
        background: "#1B1D32",
        color: "#ffffff",
        border: "1px solid #ed1b34",
        borderLeft: "4px solid #ed1b34",
      },
      iconTheme: {
        primary: "#ed1b34",
        secondary: "#FFFFFF",
      },
    }
  )
}

  const handleMouseEnter = () => {
    if (product.images && product.images.length > 1) {
      setIsHovering(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  // Optimizamos las URLs de las imágenes
  const mainImage = optimizeCloudinaryUrl(product.images?.[0], 600) || "/placeholder.svg"
  const hoverImage = optimizeCloudinaryUrl(product.images?.[1], 600) || mainImage

  // Formateador de precio para mostrar en Lempiras
  const formatPrice = (price: number | string | null | undefined) => {
    if (price === undefined || price === null) return ""

    let numericPrice: number

    if (typeof price === "string") {
      // Quitar el símbolo de dólar u otros caracteres no numéricos excepto punto decimal
      const cleanedPrice = price.replace(/[^0-9.]/g, "")
      numericPrice = Number.parseFloat(cleanedPrice)
    } else {
      numericPrice = price
    }

    // Verificar si es un número válido
    if (isNaN(numericPrice)) return ""

    // Formatear con 2 decimales en formato de Honduras
    return numericPrice.toLocaleString("es-HN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  // Función para verificar si hay un precio válido
  const hasPrice = () => {
    return product.price !== undefined && product.price !== null
  }

  // Precargar ambas imágenes al renderizar el componente
  const preloadImages = () => {
    if (typeof window === "undefined") return // Evitar ejecución en SSR

    const mainImg = new window.Image()
    mainImg.src = mainImage
    mainImg.crossOrigin = "anonymous" // Añadir crossOrigin para evitar problemas CORS

    if (product.images && product.images.length > 1) {
      const hoverImg = new window.Image()
      hoverImg.src = hoverImage
      hoverImg.crossOrigin = "anonymous" // Añadir crossOrigin para evitar problemas CORS

      // Establecer como cargadas cuando ambas hayan cargado
      Promise.all([
        new Promise((resolve) => {
          mainImg.onload = resolve
        }),
        new Promise((resolve) => {
          hoverImg.onload = resolve
        }),
      ]).then(() => {
        setImagesLoaded(true)
      })
    } else {
      mainImg.onload = () => setImagesLoaded(true)
    }
  }

  // Ejecutar la precarga cuando el componente se monte
  useEffect(() => {
    preloadImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white overflow-hidden h-full">
      {/* Contenedor de la imagen con Link */}
      <Link href={`/producto/${product.id}`} className="block w-full">
        <div
          className="relative w-full aspect-square overflow-hidden bg-white"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Efecto de carga estático en lugar de pulsante */}
          <div
            className={`absolute inset-0 bg-white ${
              imagesLoaded ? "opacity-0" : "opacity-100"
            } transition-opacity duration-500`}
          ></div>

          {/* Imagen principal */}
          <Image
            src={mainImage || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            priority={true}
            loading="eager"
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg=="
            className={`absolute top-0 left-0 transition-opacity duration-500 ease-in-out object-cover ${
              isHovering ? "opacity-0" : "opacity-100"
            }`}
            style={{ zIndex: 1 }}
          />

          {/* Imagen hover - siempre presente pero oculta inicialmente */}
          {product.images && product.images.length > 1 && (
            <Image
              src={hoverImage || "/placeholder.svg"}
              alt={`${product.name} - vista alternativa`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              quality={85}
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg=="
              className={`absolute top-0 left-0 transition-opacity duration-500 ease-in-out object-cover ${
                isHovering ? "opacity-100" : "opacity-0"
              }`}
              style={{ zIndex: 0 }}
            />
          )}

          {/* Botón de video */}
          {product.videoUrl && (
            <button
              onClick={(e) => {
                e.preventDefault()
                setShowVideo(true)
              }}
              className="absolute top-2 right-2 bg-[#ed1b34]/70 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 hover:bg-[#ed1b34]/90 transition-colors z-10"
            >
              <PlayCircle className="h-3 w-3" />
              <span>Video</span>
            </button>
          )}
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-2 sm:p-3">
        {/* Título con Link */}
        <Link href={`/producto/${product.id}`} className="block">
          <h2 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 line-clamp-2 hover:text-[#ed1b34] transition-colors">
            {product.name}
          </h2>
        </Link>

        {/* Precio del producto en Lempiras (solo si existe) */}
        {hasPrice() && (
          <div className="mb-2 sm:mb-3">
            <p className="text-sm sm:text-base font-semibold text-[#ed1b34] flex items-center">
              <span className="font-bold mr-1">L</span>
              <span>{formatPrice(product.price)}</span>
            </p>
          </div>
        )}

        {/* Lista de características sin Link */}
        <ul className="space-y-0.5 sm:space-y-1 flex-1 mb-2 sm:mb-3">
          {product.description &&
            Array.isArray(product.description) &&
            product.description.slice(0, 3).map((item, index) => (
              <li
                key={`${product.id}-desc-${index}`}
                className="flex items-start gap-1 text-[10px] sm:text-xs text-gray-600"
              >
                <span className="text-[#ed1b34] font-bold">⚬</span>
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
        </ul>
      </div>

      {/* Botones */}
      <div className="flex gap-1 sm:gap-2 p-2 sm:p-3 mt-auto">
        {product.pdfUrl ? (
          <Link href={product.pdfUrl.replace(/["']/g, "")} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" size="sm" className="w-full text-[10px] sm:text-xs px-1 sm:px-2">
              <FileText className="h-3 w-3 mr-1" />
              Ficha
            </Button>
          </Link>
        ) : (
          <Button variant="outline" size="sm" className="flex-1 text-[10px] sm:text-xs px-1 sm:px-2" disabled>
            <FileText className="h-3 w-3 mr-1" />
            Ficha
          </Button>
        )}
        <Button size="sm" className="flex-1 text-[10px] sm:text-xs px-1 sm:px-2" onClick={handleAddToCart}>
          <ShoppingCart className="h-3 w-3 mr-1" />
          Cotizar
        </Button>
      </div>

      {product.videoUrl && (
        <VideoModal
          isOpen={showVideo}
          onClose={() => setShowVideo(false)}
          videoUrl={product.videoUrl.replace(/["']/g, "")}
          title={product.name}
        />
      )}
    </div>
  )
}

