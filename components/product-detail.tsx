"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import type { Product } from "@/types"
import { Button } from "@/components/ui/button"
import { ShoppingCart, FileText, ChevronLeft, Eye, Shield } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/store/cart"
import toast from "react-hot-toast"
import { motion } from "framer-motion"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  // Limpiar las URLs de las imágenes
  const cleanedImages = product.images.map((img) => img.replace(/["']/g, ""))

  const [mainImage, setMainImage] = useState(cleanedImages[0])
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showCartButton, setShowCartButton] = useState(false)

  // Obtenemos las funciones y el estado del carrito
  const addItem = useCart((state) => state.addItem)
  const cartItems = useCart((state) => state.items)

  // Calculamos la cantidad de este producto en el carrito
  const productInCart = cartItems.find((item) => item.id === product.id)
  const productQuantity = productInCart ? productInCart.quantity : 0

  useEffect(() => {
    setIsLoaded(true)
    // Mostrar el botón de ir al carrito si ya hay productos en el carrito
    if (productQuantity > 0) {
      setShowCartButton(true)
    }
  }, [productQuantity])

  const handleAddToCart = () => {
    // Crear una copia limpia del producto para el carrito
    const cleanProduct = {
      ...product,
      images: cleanedImages,
      videoUrl: product.videoUrl ? product.videoUrl.replace(/["']/g, "") : "",
      pdfUrl: product.pdfUrl ? product.pdfUrl.replace(/["']/g, "") : "",
    }

    // Añadir el producto al carrito y mostrar notificación (detalle de producto)
    addItem(cleanProduct)
  setShowCartButton(true)
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
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      },
      iconTheme: {
        primary: "#ed1b34",
        secondary: "#FFFFFF",
      },
    }
  )
}

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

  // Verificar si el producto tiene precio
  const hasPrice = () => {
    return product.price !== undefined && product.price !== null
  }

  return (
    <div className="relative w-full bg-white text-black min-h-screen">
      <div className="container mx-auto px-4 py-6 relative z-10">
        {/* Botón de regreso con diseño mejorado y sticky */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm py-3 mb-6 border-b border-[#67686B]/10">
          <Link href="/productos" className="inline-flex">
            <Button
              variant="outline"
              className="group flex items-center gap-2 text-[#000000] border-[#67686B] rounded-full pl-3 pr-5 py-5 hover:bg-gradient-to-r hover:from-[#ed1b34] hover:to-[#ed1b34]/80 hover:border-transparent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="group-hover:translate-x-1 transition-transform font-medium">Regresar a catálogo</span>
            </Button>
          </Link>
        </div>

        {/* Contenedor principal del producto con suave animación de entrada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sección de imágenes con thumbnails verticales */}
            <div className="w-full md:w-2/5 md:sticky md:top-24 self-start">
              <div className="flex flex-row-reverse gap-4">
                {/* Miniaturas verticales a la izquierda */}
                <div className="relative rounded-2xl overflow-hidden mb-6 group flex-1">
                  {/* Background con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0]"></div>

                  {/* Bordes con efecto */}
                  <div className="absolute inset-0 border border-[#ed1b34]/10 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ed1b34]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  <motion.div
                    key={selectedImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-80 flex items-center justify-center p-6 z-10"
                  >
                    <Image
                      src={mainImage || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-contain transition-all duration-500 hover:scale-105"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Miniaturas en columna vertical */}
                <div className="flex flex-col gap-3 w-20">
                  {cleanedImages.slice(0, 4).map((image, i) => (
                    <div
                      key={i}
                      className="cursor-pointer relative group"
                      onClick={() => {
                        setMainImage(image)
                        setSelectedImageIndex(i)
                      }}
                    >
                      <div
                        className={`
                        relative h-20 rounded-xl overflow-hidden
                        transition-all duration-300 transform 
                        ${
                          mainImage === image
                            ? "ring-2 ring-[#ed1b34] scale-105 shadow-md"
                            : "ring-1 ring-[#67686B]/20 hover:ring-[#ed1b34] hover:scale-105 hover:shadow-md"
                        }
                      `}
                      >
                        {/* Background con gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0]"></div>

                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${product.name} thumbnail ${i + 1}`}
                          className="w-full h-full object-contain p-2 relative z-10"
                          width={80}
                          height={80}
                          quality={100}
                        />
                        <div className="absolute inset-0 bg-[#000000]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                          <Eye className="w-4 h-4 text-white drop-shadow-md" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sección de información con diseño mejorado */}
            <div className="w-full md:w-3/5">
              {/* Logo de marca y garantía uno al lado del otro */}
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <Image
                    src={product.brand.logo ? product.brand.logo.replace(/["']/g, "") : "/placeholder.svg"}
                    alt={product.brand.name}
                    width={220}
                    height={110}
                    quality={100}
                    className="h-20 w-auto object-contain" /* Logo aún más grande */
                  />
                </div>

                {/* Sección de garantía rediseñada con ícono de escudo en lugar de estrella */}
                {product.warranty && (
                  <div className="flex items-center pl-3 pr-4 py-2 bg-gradient-to-r from-[#f8f8f8] to-[#f0f0f0] border border-[#ed1b34]/20 rounded-lg hover:shadow-sm transition-all duration-300">
                    <div className="mr-3 flex items-center justify-center w-10 h-10 rounded-full bg-[#ed1b34]/10">
                      <Shield className="w-5 h-5 text-[#ed1b34]" />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-[#67686B]">
                        {typeof product.warranty === "object"
                          ? `${product.warranty.years} ${
                              product.warranty.years === 1 ? "AÑO" : "AÑOS"
                            } - ${product.warranty.description}`
                          : product.warranty}
                      </div>
                      <span className="text-xs text-[#ed1b34] font-medium">DE GARANTÍA</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Título del producto */}
              <h1 className="text-3xl font-bold text-[#000000] leading-tight relative mb-8">
                {product.name}
                <div className="absolute -bottom-3 left-0 w-16 h-1 bg-[#ed1b34]"></div>
              </h1>

              {/* Panel superior con precio (solo si existe) */}
              {hasPrice() && (
                <div className="flex items-center mb-8 mt-8 pb-5 border-b border-[#67686B]/10">
                  <div className="flex flex-col">
                    <span className="text-[#67686B] text-sm">Precio</span>
                    <div className="text-2xl font-bold text-[#000000]">L {formatPrice(product.price)}</div>
                  </div>
                </div>
              )}

              {/* Descripción con estilo mejorado */}
              <div className="mb-8">
                <h3 className="font-bold text-lg text-[#000000] mb-4 pb-2 border-b border-[#67686B]/10 flex items-center">
                  <div className="w-1 h-5 bg-[#ed1b34] mr-3 rounded-full"></div>
                  Descripción
                </h3>
                <ul className="space-y-3 pl-1">
                  {product.description.map((item, index) => (
                    <li key={index} className="flex items-start p-3 rounded-lg">
                      {/* Se quitó el background oscuro de los items */}
                      <span className="inline-block w-2 h-2 mt-1.5 mr-3 rounded-full bg-[#ed1b34]"></span>
                      <span className="text-[#000000] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botones con diseño mejorado y responsivo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {product.pdfUrl && (
                  <div className={showCartButton ? "col-span-1" : "col-span-1 sm:col-span-1"}>
                    <Link
                      href={product.pdfUrl.replace(/["']/g, "")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button
                        variant="outline"
                        className="w-full h-14 border-[#67686B]/30 text-[#000000] hover:border-[#ed1b34] hover:bg-[#ed1b34] hover:text-white transition-all duration-300 group overflow-hidden relative rounded-xl shadow-sm hover:shadow-md"
                      >
                        <FileText className="w-5 h-5 mr-3 text-[#ed1b34] group-hover:text-white group-hover:scale-110 transition-all" />
                        <span className="relative z-10 font-medium text-lg group-hover:translate-x-1 transition-transform">
                          Ver ficha técnica
                        </span>
                      </Button>
                    </Link>
                  </div>
                )}

                <div className={showCartButton ? "col-span-1" : "col-span-1 sm:col-span-1"}>
                  <Button
                    onClick={handleAddToCart}
                    className="w-full h-14 bg-gradient-to-r from-[#ed1b34] to-[#d01830] hover:from-[#d01830] hover:to-[#b01428] text-white shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group rounded-xl"
                  >
                    <span className="absolute inset-0 bg-black/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <ShoppingCart className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    <span className="relative z-10 font-medium text-lg group-hover:translate-x-1 transition-transform">
                      Cotizar {productQuantity > 0 && `(${productQuantity})`}
                    </span>
                  </Button>
                </div>

                {showCartButton && (
                  <div className="col-span-1 sm:col-span-2 mt-0 sm:mt-2">
                    <Link href="/cart" className="block w-full">
                      <Button className="w-full h-14 bg-gradient-to-r from-[#67686B] to-[#494A4C] hover:from-[#494A4C] hover:to-[#333435] text-white shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group rounded-xl">
                        <span className="absolute inset-0 bg-black/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                        <ShoppingCart className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                        <span className="relative z-10 font-medium text-lg group-hover:translate-x-1 transition-transform">
                          Ir al carrito
                        </span>
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

