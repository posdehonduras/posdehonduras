"use client"

import * as React from "react"
import { CategoryNav } from "@/components/category-nav"
import { ProductCard } from "@/components/product-card"
import Header from "@/components/header-products"
import { Button } from "@/components/ui/button"
import { getVisibleProducts } from "@/lib/db" // Cambiado de getAllProducts a getVisibleProducts
import type { Product } from "@/types"

// Función mejorada para normalizar texto
const normalizeString = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
    .replace(/[^\w\s]/g, "") // Eliminar caracteres especiales excepto espacios
    .replace(/\s+/g, " ") // Normalizar espacios
    .trim()

//Solo mostramos una cantidad de productos para mejorar el rendimiento del DOM
const PRODUCTS_PER_PAGE = 40

export default function ProductsPage() {
  const [products, setProducts] = React.useState<Product[]>([])
  const [loading, setLoading] = React.useState(true)
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState(1)
  const navRef = React.useRef<HTMLDivElement>(null)

  // Cargar productos desde Firebase
  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getVisibleProducts() // Cambiado de getAllProducts a getVisibleProducts
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Efecto para cerrar el menú al hacer clic fuera
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsCategoryMenuOpen(false)
      }
    }

    // Solo añadimos el listener si el menú está abierto
    if (isCategoryMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isCategoryMenuOpen])

  // Filtrar productos con búsqueda mejorada
  const filteredProducts = React.useMemo(() => {
    let result = selectedCategory
      ? products.filter((product) => product.categories.includes(selectedCategory))
      : products

    if (searchQuery) {
      const normalizedQuery = normalizeString(searchQuery)
      result = result.filter((product) => {
        // Normalizar el nombre del producto
        const normalizedName = normalizeString(product.name)

        // Normalizar cada descripción
        const normalizedDescriptions = product.description.map((desc) => normalizeString(desc))

        // Verificar si el nombre contiene la consulta
        const nameMatch = normalizedName.includes(normalizedQuery)

        // Verificar si alguna descripción contiene la consulta
        const descriptionMatch = normalizedDescriptions.some((desc) => desc.includes(normalizedQuery))

        // También buscar en categorías y marca
        const categoryMatch = product.categories.some((cat) => normalizeString(cat).includes(normalizedQuery))
        const brandMatch = normalizeString(product.brand.name).includes(normalizedQuery)

        return nameMatch || descriptionMatch || categoryMatch || brandMatch
      })
    }

    return result
  }, [selectedCategory, searchQuery, products])

  // Calcular productos visibles basados en la página actual
  const visibleProducts = React.useMemo(() => {
    const endIndex = currentPage * PRODUCTS_PER_PAGE
    return filteredProducts.slice(0, endIndex)
  }, [filteredProducts, currentPage])

  const handleSelectCategory = (categoryId: string | null, level: number, isExpandable: boolean) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1) // Resetear a la primera página cuando se cambia de categoría
    if (!isExpandable || categoryId === null) {
      // Solo cerramos el menú en móvil cuando se selecciona una categoría final
      if (window.innerWidth < 1024) {
        setIsCategoryMenuOpen(false)
      }
    }
  }

  const toggleCategoryMenu = React.useCallback(() => {
    setIsCategoryMenuOpen((prev) => !prev)
  }, [])

  const handleSearch = React.useCallback(
    (query: string) => {
      setSearchQuery(query)
      // Solo resetear la página si la consulta cambia significativamente
      if (query !== searchQuery) {
        setCurrentPage(1)
      }
    },
    [searchQuery],
  )

  // Función mejorada para cargar más productos
  const loadMoreProducts = React.useCallback(() => {
    // Usamos una función de actualización de estado para garantizar que obtenemos el valor más reciente
    setCurrentPage((prevPage) => {
      const newPage = prevPage + 1
      // Añadimos un log para depuración
      console.log(`Incrementando página de ${prevPage} a ${newPage}`)
      return newPage
    })
  }, [])

  // Efecto para cerrar el menú en pantallas grandes
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setIsCategoryMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header
        onCategoryMenuToggle={toggleCategoryMenu}
        onSearch={handleSearch}
        isCategoryMenuOpen={isCategoryMenuOpen}
      />

      <div className="flex flex-1 pt-2 sm:pt-4">
        {/* Overlay oscuro para móvil cuando el menú está abierto */}
        {isCategoryMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsCategoryMenuOpen(false)} />
        )}

        {/* Category Navigation */}
        <div
          ref={navRef}
          className={`fixed top-[140px] sm:top-[140px] lg:relative lg:top-0 bottom-0 left-0 w-64 bg-white overflow-y-auto z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
            isCategoryMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <CategoryNav onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <main className="container max-w-7xl mx-auto px-2 sm:px-4 py-4 lg:py-4">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : (
              <>
                {/* Mostrar el número de resultados encontrados */}
                {searchQuery && (
                  <div className="mb-4 text-sm text-gray-600">
                    Se encontraron {filteredProducts.length} resultados para &ldquo;{searchQuery}&rdquo;
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                  {visibleProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                {filteredProducts.length === 0 && (
                  <div className="col-span-full text-center py-12 text-gray-500">No se encontraron productos</div>
                )}
                {filteredProducts.length > visibleProducts.length && (
                  <div className="flex justify-center mt-8">
                    <Button
                      onClick={loadMoreProducts}
                      variant="outline"
                      size="lg"
                      className="border-[#ed1b34] text-[#ed1b34] hover:bg-[#ed1b34] hover:text-white"
                    >
                      Ver más productos
                    </Button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

