"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Store, Utensils, Warehouse, Heart, Building2 } from "lucide-react"

const solutions = [
  {
    icon: ShoppingCart,
    titulo: "Supermercados",
    descripcion:
      "Somos pioneros en la implementación de etiquetas electrónicas en Centroamérica. Contamos con gran variedad de equipamiento de última tecnología que sin dudas impulsará las ventas de tu negocio y agilizarán la operatividad diaria.",
  },
  {
    icon: Store,
    titulo: "Tiendas comerciales",
    descripcion:
      "Ya sea que tengas una tienda de indumentaria y calzado o bien estés al frente de un comercio de venta de alimentos al peso, nuestras soluciones POS harán que te destaques en tu sector.",
  },
  {
    icon: Utensils,
    titulo: "Gastronomía",
    descripcion:
      "Nuestros dispositivos portátiles, combinados con avanzados softwares de gestión de pedidos y control de inventario, podrán potenciar la eficiencia de tu establecimiento al reducir los tiempos de espera y brindar una experiencia excepcional para el cliente.",
  },
  {
    icon: Warehouse,
    titulo: "Depósitos y Almacenes",
    descripcion:
      "Mediante la combinación estratégica del uso de impresoras de etiquetas y lectores de códigos de barras en entornos como almacenes industriales y depósitos, se logra optimizar la gestión del inventario al facilitar la identificación, clasificación y seguimiento preciso de productos.",
  },
  {
    icon: Heart,
    titulo: "Sector de salud",
    descripcion:
      "La utilización de dispositivos de última tecnología como kioscos de autoservicio que permiten realizar consultas o gestionar turnos de forma autónoma, favorece la reducción de los tiempos de espera, lo que mejora la experiencia general en centros de salud y farmacias.",
  },
  {
    icon: Building2,
    titulo: "Instituciones",
    descripcion:
      "La integración de impresoras de identificación que permiten una emisión rápida y personalizada de carnets, facilitan la gestión del ingreso a establecimientos. De hecho, no solo proporcionan una solución eficaz para el control de acceso, sino que también brindan un entorno seguro y organizado.",
  },
]

export default function SolutionsSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="text-4xl sm:text-5xl md:text-5xl text-center font-poppins-bold text-[#ed1b34] mb-8 sm:mb-12"
        >
          Tenemos soluciones para diferentes mercados en pos de Honduras
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.titulo}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="flex flex-col p-6 rounded-lg bg-white shadow-lg hover:shadow-xl
              transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105
              hover:bg-gray-50 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <solution.icon
                  className="h-12 w-12 text-[#000000] group-hover:text-[#ed1b34]
                transition-colors duration-500 ease-in-out"
                />
                <h3 className="text-2xl text-[#000000] group-hover:text-[#ed1b34] transition-colors duration-500 ease-in-out font-poppins-bold">
                  {solution.titulo}
                </h3>
              </div>

              <p className="text-[#1B1D32] text-lg italic tracking-wide leading-relaxed flex-grow mb-6 font-poppins-bold">
                {solution.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

