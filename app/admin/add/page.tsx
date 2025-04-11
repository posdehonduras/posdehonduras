"use client"

import ProductForm from "@/components/admin/ProductForm"

export default function AddProductPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Agregar Nuevo Producto</h1>
      <ProductForm />
    </div>
  )
}

