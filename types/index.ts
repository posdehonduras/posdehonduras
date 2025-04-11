export interface Category {
  id: string
  name: string
  subcategories?: Category[]
}

export interface Product {
  id: string
  name: string
  description: string[]
  images: string[]
  categories: string[]
  videoUrl?: string
  pdfUrl?: string
  price: number | string | null // Ahora usamos null para indicar que no hay precio
  brand: {
    name: string
    logo: string
  }
  warranty?:
    | {
        years: number
        description: string
      }
    | string
    | null
  visible?: boolean // Campo para controlar la visibilidad del producto
  needsMigration?: boolean // Nuevo campo para indicar si el producto necesita migración
}

export interface CartItem extends Product {
  quantity: number
}

export function generateProductIdFromName(name: string): string {
  return name.replace(/\s+/g, "-").toLowerCase()
}

export interface CotizacionRequest {
  nombre: string
  email: string
  direccion?: string
  departamento: string
  telefono: string
  carrito: CartItem[]
}

