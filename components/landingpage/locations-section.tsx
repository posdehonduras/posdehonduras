"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, X, Clock } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"

const API_KEY = "AIzaSyCD3aXb424Ls1QhecAveNFQkDsP_Qn38Q0"

const locations = [
  {
    city: "SAN PEDRO SULA",
    address: "Col. Colombia 15 Calle, Av. 10 y 11 calle, Pasaje el Soldado",
    schedule: "Lunes a viernes 8:00 AM a 5:00 PM",
    scheduleWeekend: "Sábado de 8:00 AM a 12:00 PM",
    coordinates: "15.518693377568274, -88.02975954091671",
  },
  {
    city: "TEGUCIGALPA",
    address: "Col. Las Minitas, Calle Real de Minas, 1 cuadra al oeste del redondel de Las Minitas",
    schedule: "Lunes a viernes 8:00 AM a 5:00 PM",
    scheduleWeekend: "Sábado de 8:00 AM a 12:00 PM",
    coordinates: "14.096711410247659,-87.1920684275799",
  },
  {
    city: "CHOLUTECA",
    address: "Plaza Mia, Local 4, Blvd. Juan Orlando Hernández, frente a Inst. José Cecilio del Valle",
    schedule: "Lunes a viernes 8:00 AM a 5:00 PM",
    scheduleWeekend: "Sábado de 8:00 AM a 12:00 PM",
    coordinates: "13.301409174165913, -87.17894770383556",
  },
  {
    city: "LA CEIBA",
    address: "Barrio Independencia, Av. 15 de Septiembre, frente a Walmart",
    schedule: "Lunes a viernes 8:00 AM a 5:00 PM",
    scheduleWeekend: "Sábado de 8:00 AM a 12:00 PM",
    coordinates: "15.779021486366435, -86.79490312775809",
  },
  {
    city: "SANTA ROSA DE COPAN",
    address: "Barrio Miraflores, Boulevard JOrge Bueso Arias, frente a Plaza Alvarados, al par de Banco Azteca, Italika",
    schedule: "Lunes a viernes 8:00 AM a 5:00 PM",
    scheduleWeekend: "Sábado de 8:00 AM a 12:00 PM",
    coordinates: "14.774459863124395, -88.77581643098527",
  },
]

// Componente para elementos visualmente ocultos pero accesibles para lectores de pantalla
const VisuallyHidden = ({ children }: { children: React.ReactNode }) => {
  return <span className="sr-only">{children}</span>
}

export default function LocationsSection() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<string>("")

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#ed1b34] font-poppins-bold leading-tight">
            Encuentra la sucursal
            <br className="md:hidden" /> más cercana y<br className="md:hidden" /> descubre cómo potenciar tu negocio
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex"
            >
              <Dialog.Root
                open={selectedLocation === location.coordinates}
                onOpenChange={(open) => {
                  if (open) {
                    setSelectedLocation(location.coordinates)
                    setSelectedCity(location.city)
                  } else {
                    setSelectedLocation(null)
                  }
                }}
              >
                <div className="group h-full w-full bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
                  <h3 className="text-xl font-poppins-bold mb-3 text-[#ed1b34] group-hover:text-[#ed1b34]">
                    {location.city}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm min-h-[60px]">{location.address}</p>

                  {location.schedule && (
                    <div className="flex flex-col gap-2 mb-5">
                      <div className="flex items-center gap-2 text-xs font-poppins-bold text-gray-700">
                        <Clock className="h-3.5 w-3.5 text-[#ed1b34]" />
                        {location.schedule}
                      </div>
                      {location.scheduleWeekend && (
                        <div className="flex items-center gap-2 text-xs font-poppins-bold text-gray-700">
                          <Clock className="h-3.5 w-3.5 text-[#ed1b34]" />
                          {location.scheduleWeekend}
                        </div>
                      )}
                    </div>
                  )}

                  <Dialog.Trigger asChild>
                    <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white border-2 border-[#ed1b34] text-[#ed1b34] font-poppins-bold hover:bg-[#ed1b34] hover:text-white transition-colors duration-300">
                      <MapPin className="h-4 w-4" />
                      Ver Ubicación
                    </button>
                  </Dialog.Trigger>

                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl w-[90vw] bg-white rounded-xl shadow-2xl z-50 overflow-hidden transition-all duration-300">
                      <div className="p-4 bg-[#ed1b34] text-white">
                        <Dialog.Title className="text-xl font-poppins-bold">{selectedCity}</Dialog.Title>
                        <Dialog.Description className="text-white/80 text-sm">
                          Ubicación de nuestra sucursal
                        </Dialog.Description>
                      </div>

                      <Dialog.Close className="absolute right-3 top-3 rounded-full p-1.5 bg-white/90 hover:bg-white transition-colors z-10 shadow-md">
                        <X className="h-5 w-5 text-[#ed1b34]" />
                        <VisuallyHidden>Cerrar</VisuallyHidden>
                      </Dialog.Close>

                      <iframe
                        className="w-full h-[450px] border-0"
                        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodeURIComponent(
                          selectedLocation || "",
                        )}`}
                        allowFullScreen
                        loading="lazy"
                        title={`Mapa de ${selectedCity}`}
                      />
                    </Dialog.Content>
                  </Dialog.Portal>
                </div>
              </Dialog.Root>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

