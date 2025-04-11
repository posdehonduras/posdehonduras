"use client"

import type React from "react"
import { sucursales } from "./hooks/sucursal"
import { SucursalCard } from "./SucursalCard"

/**
 * Sección que muestra todas las sucursales en tarjetas.
 * - Utiliza `SucursalCard` para mostrar cada una.
 * - Se organiza en una cuadrícula adaptable.
 */
export const SeccionSucursales: React.FC = () => {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto mb-4">
        {/* Título de la sección */}
        <h2 className="text-4xl sm:text-5xl font-poppins-bold text-[#1B1D32] text-center py-6">
          Nuestras Sucursales
        </h2>

        {/* Contenedor de sucursales en formato grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sucursales.map((sucursal) => (
            <SucursalCard key={sucursal.id} sucursal={sucursal} />
          ))}
        </div>
      </div>
    </section>
  )
}


export default SeccionSucursales;