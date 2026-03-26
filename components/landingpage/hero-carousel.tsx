"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import Link from "next/link"
import { ShoppingBag, Phone, X, Clock } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"
import "swiper/css"
import "swiper/css/pagination"

// Datos de las sucursales
const branches = [
  {
    id: 1,
    name: "Sucursal San Pedro Sula",
    address: "Col. Colombia 15 Calle, Av. 10 y 11 calle, Pasaje el Soldado",
    phone: "+504 25646280",
    schedule: "Lunes a viernes 8:00 AM a 5:00 PM",
    scheduleWeekend: "Sábado de 8:00 AM a 12:00 PM",
  },
  {
    id: 2,
    name: "Sucursal Tegucigalpa",
    address: "Col. Las Minitas, Calle Real de Minas, 1 cuadra al oeste del redondel de Las Minitas",
    phone: "+504 87346326",
    schedule: "Lunes a viernes 8:00 AM a 5:00 PM",
    scheduleWeekend: "Sábado de 8:00 AM a 12:00 PM",
  },
  {
    id: 3,
    name: "Sucursal La Ceiba",
    address: "Barrio Independencia, Av. 15 de Septiembre, frente a Walmart",
    phone: "+504 32588581",
    schedule: "Lunes a viernes 8:00 AM a 5:00 PM",
    scheduleWeekend: "Sábado de 8:00 AM a 12:00 PM",
  },
  {
    id: 4,
    name: "Sucursal Choluteca",
    address: "Plaza Mia, Local 4, Blvd. Juan Orlando Hernández, frente a Inst. José Cecilio del Valle",
    phone: "+504 33424387",
    schedule: "Lunes a viernes 8:00 AM a 5:00 PM",
    scheduleWeekend: "Sábado de 8:00 AM a 12:00 PM",
  },
  {
    id: 5,
    name: "Sucursal Santa Rosa de Copan",
    address: "Barrio Miraflores, Boulevard Jorge Bueso Arias, frente a Plaza Alvarados, al par de Banco Azteca ",
    phone: "+504 31985826",
    schedule: "Lunes a viernes 8:00 AM a 5:00 PM",
    scheduleWeekend: "Sábado de 8:00 AM a 12:00 PM",
  },
]

// Datos de los slides del carrusel
const slides = [
  {
    //Seccion slide A2
    id: 1,
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1743697494/2_bqephb.jpg",
    title: (
      <>
        <div className="space-y-7">
          <p className="text-white text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold">
          Optimiza tu negocio con A2 Punto de Venta
          </p>
          <p className="text-white text-xl sm:text-xl md:text-1xl lg:text-2xl">
          Contáctanos para gestionar tu negocio
          </p> 
        </div>
      </>
    ),
    bgColor: "bg-[#9B1D30]",
    buttonText: "Contactarnos",
    buttonColor: "bg-[#1B1D32]",
    posColor: "text-white",
    posText: "POS de Honduras Asistencia",
    hoverColor: "hover:bg-[#2E3763]",
    icon: Phone,
    isLink: false,
  },





  {
    //Seccion slide MyPOS
    id: 2,
    image: "https://res.cloudinary.com/dc95c99nb/image/upload/v1774553350/IM%C3%81GENES_INICIO_P%C3%81G_WEB_actualizaci%C3%B3n-14_vz2zup.jpg",
    title: (
      <>
        <div className="space-y-7">
          <p className="text-white text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold">
          Agiliza tu restaurante con comandas en pantalla
          </p>
          <p className="text-white text-xl sm:text-xl md:text-1xl lg:text-2xl">
          Toma pedidos desde la mesa, anvialos directo a cocina y reduce errores en cada orden.
          </p>
        </div>
      </>
    ),
    bgColor: "bg-[#1B1D32]",
    buttonText: "Contactarnos",
    buttonColor: "bg-[#9B1D30]",
    posColor: "text-white",
    posText: "POS de Honduras Asistencia",
    hoverColor: "hover:bg-[#2E3763]",
    icon: Phone,
    isLink: false,
  },








  {
    //Seccion slide EasySoft
    id: 3,
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1743697495/6_nd0sl7.jpg",
    title: (
      <>
        <div className="space-y-7">
          <p className="text-white text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold">
          Ventas controladas y tecnología de vanguardia
          </p>
          <p className="text-white text-xl sm:text-xl md:text-1xl lg:text-2xl">
          Contáctanos y optimiza la gestión de tu negocio con las mejores soluciones
          </p>
        </div>
      </>
    ),
    bgColor: "bg-[#9B1D30]",
    buttonText: "Contactarnos",
    buttonColor: "bg-[#1B1D32]",
    posColor: "text-white",
    posText: "POS de Honduras Asistencia",
    hoverColor: "hover:bg-[#2E3763]",
    icon: Phone,
    isLink: false,
  },









  {
    //Seccion slide RMH
    id: 4,
    image: "https://res.cloudinary.com/dc95c99nb/image/upload/v1774553351/IM%C3%81GENES_INICIO_P%C3%81G_WEB_actualizaci%C3%B3n-06_mmrswh.jpg",
    title: (
      <>
        <div className="space-y-7">
          <p className="text-white text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold">
          RMH: Control total para tu tienda en un solo sistema Retail Management Hero
          </p>
          <p className="text-white text-xl sm:text-xl md:text-1xl lg:text-2xl">
          Gestiona ventas, inventario y precios de forma rápida y eficiente
          </p>
        </div>
      </>
    ),
    bgColor: "bg-[#1B1D32]",
    buttonText: "Contactarnos",
    buttonColor: "bg-[#9B1D30]",
    posColor: "text-white",
    posText: "POS de Honduras Asistencia",
    hoverColor: "hover:bg-[#2E3763]",
    icon: Phone,
    isLink: false,
  },









  {
    //Seccion slide logistica
    id: 5,
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1743697497/10_aczjyq.jpg",
    title: (
      <>
        <div className="space-y-7">
          <p className="text-white text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold">
          Optimiza tu Logística con Soluciones Avanzadas
          </p>
          <p className="text-white text-xl sm:text-xl md:text-1xl lg:text-2xl">
          ¡Contáctanos y equipa tu negocio con la mejor tecnología!
          </p>
        </div>
      </>
    ),
    bgColor: "bg-[#9B1D30]",
    buttonText: "Ver Productos",
    buttonColor: "bg-[#1B1D32]",
    posColor: "text-white",
    posText: "POS de Honduras Tienda",
    hoverColor: "hover:bg-[#ed1b34]",
    link: "/productos",
    icon: ShoppingBag,
    isLink: true,
  },




  {
    //Seccion slide punto de venta
    id: 6,
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1743697496/12_shs5aj.jpg",
    title: (
      <>
        <div className="space-y-7">
          <p className="text-white text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold">
          Impulsa tu negocio con el mejor sistema de Punto de Venta
          </p>
          <p className="text-white text-xl sm:text-xl md:text-1xl lg:text-2xl">
          ¡Optimiza tus ventas hoy!
          </p>
        </div>
      </>
    ),
    bgColor: "bg-[#1B1D32]",
    buttonText: "Ver Productos",
    buttonColor: "bg-[#9B1D30]",
    posColor: "text-white",
    posText: "POS de Honduras Tienda",
    hoverColor: "hover:bg-[#ed1b34]",
    link: "/productos",
    icon: ShoppingBag,
    isLink: true,
  },




  {
    //Seccion slide etiquetas electronicas
    id: 7,
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1743697497/14_kijaia.jpg",
    title: (
      <>
        <div className="space-y-7">
          <p className="text-white text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold">
          Moderniza tu negocio con Etiquetas Electrónicas
          </p>
          <p className="text-white text-xl sm:text-xl md:text-1xl lg:text-2xl">
          ¡Actualiza tus precios en segundos!
          </p>
        </div>
      </>
    ),
    bgColor: "bg-[#9B1D30]",
    buttonText: "Ver Productos",
    buttonColor: "bg-[#1B1D32]",
    posColor: "text-white",
    posText: "POS de Honduras Tienda",
    hoverColor: "hover:bg-[#ed1b34]",
    link: "/productos",
    icon: ShoppingBag,
    isLink: true,
  },






  {
    //Seccion slide ecoflow
    id: 8,
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1743697499/16_glg69e.jpg",
    title: (
      <>
        <div className="space-y-7">
          <p className="text-white text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold">
          Mantén tu negocio siempre encendido con baterías EcoFlow
          </p>
          <p className="text-white text-xl sm:text-xl md:text-1xl lg:text-2xl">
          ¡Descubre la energía portátil avanzada!
          </p>
        </div>
      </>
    ),
    bgColor: "bg-[#1B1D32]",
    buttonText: "Ver Productos",
    buttonColor: "bg-[#9B1D30]",
    posColor: "text-white",
    posText: "POS de Honduras Tienda",
    hoverColor: "hover:bg-[#ed1b34]",
    link: "/productos",
    icon: ShoppingBag,
    isLink: true,
  },




  {
    //Seccion slide seguridad
    id: 9,
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1743697500/18_lnr7tl.jpg",
    title: (
      <>
        <div className="space-y-7">
          <p className="text-white text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold">
          Seguridad Inteligente para tu Negocio
          </p>
          <p className="text-white text-xl sm:text-xl md:text-1xl lg:text-2xl">
          ¡Refuerza tu seguridad!
          </p>
        </div>
      </>
    ),
    bgColor: "bg-[#9B1D30]",
    buttonText: "Ver Productos",
    buttonColor: "bg-[#1B1D32]",
    posColor: "text-white",
    posText: "POS de Honduras Tienda",
    hoverColor: "hover:bg-[#ed1b34]",
    link: "/productos",
    icon: ShoppingBag,
    isLink: true,
  },


]

export default function HeroCarousel() {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [selectedBranch, setSelectedBranch] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Función para manejar las llamadas telefónicas
  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber.replace(/\s+/g, "")}`
  }

  if (!mounted) return <div suppressHydrationWarning className="h-[500px]" />

  return (
    <section className="bg-white py-16 px-2 md:px-4 lg:px-6 mt-16">
      {/* Corrección aquí: Ajustando el contenedor principal */}
      <div className="w-full max-w-screen-4xl mx-auto rounded-2xl overflow-hidden shadow-md">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          className="md:h-auto"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={`relative flex flex-col-reverse md:grid md:grid-cols-2 ${slide.bgColor} overflow-hidden`}>
                <div className="p-3 sm:p-6 md:p-12 flex flex-col justify-center flex-1 md:flex-none order-2 md:order-1">
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-poppins-bold text-white leading-tight mb-4">
                    {slide.title}
                  </h1>

                  {slide.isLink ? (
                    <Link href={slide.link || "#"}>
                      <button
                        className={`${slide.buttonColor} ${slide.hoverColor}
                        text-white flex items-center justify-center
                        px-6 py-3 rounded-full
                        font-poppins-bold transition-all duration-300 mt-8 
                        transform hover:scale-105 hover:shadow-lg
                        relative overflow-hidden group w-80`}
                      >
                        <slide.icon
                          className="w-5 h-5 mr-2 
                        transition-transform duration-300
                        group-hover:rotate-12"
                        />
                        <span
                          className={`relative ${slide.posColor}
                          group-hover:opacity-0 transition-opacity
                          duration-300 text-sm`}
                        >
                          {slide.posText}
                        </span>
                        <span
                          className="absolute left-1/2
                        -translate-x-1/2 opacity-0
                        group-hover:opacity-100 transition-opacity
                        duration-300"
                        >
                          {slide.buttonText}
                        </span>
                      </button>
                    </Link>
                  ) : (
                    <button
                      onClick={() => setOpen(true)}
                      className={`${slide.buttonColor} ${slide.hoverColor}
                      text-white flex items-center justify-center
                      px-6 py-3 rounded-full
                      font-poppins-bold transition-all duration-300 mt-8 
                      transform hover:scale-105 hover:shadow-lg
                      relative overflow-hidden group w-80`}
                    >
                      <slide.icon
                        className="w-5 h-5 mr-2 
                      transition-transform duration-300
                      group-hover:rotate-12"
                      />
                      <span
                        className={`relative ${slide.posColor}
                        group-hover:opacity-0 transition-opacity
                        duration-300 text-sm`}
                      >
                        {slide.posText}
                      </span>
                      <span
                        className="absolute left-1/2
                      -translate-x-1/2 opacity-0
                      group-hover:opacity-100 transition-opacity
                      duration-300"
                      >
                        {slide.buttonText}
                      </span>
                    </button>
                  )}
                </div>

                {/* Corregido: Ajuste del contenedor de la imagen para que se ajuste exactamente */}
                <div className="relative aspect-[3/2] min-h-[250px] w-full h-full order-1 md:order-2 overflow-hidden">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt="Slide"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain md:object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal de Sucursales - Fuera del mapeo de slides */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300" />
          <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[550px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white shadow-2xl z-50 overflow-hidden transition-all duration-300">
            <div className="bg-[#9B1D30] text-white p-6">
              <Dialog.Title className="text-2xl font-poppins-bold flex items-center">Nuestras Sucursales</Dialog.Title>
              <Dialog.Description className="text-white/80 mt-1">
                Selecciona una sucursal para ver más detalles o contactarnos
              </Dialog.Description>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="grid gap-4">
                {branches.map((branch) => (
                  <div
                    key={branch.id}
                    className={`border rounded-lg p-4 shadow-sm transition-all duration-200 
                      ${selectedBranch === branch.id ? "border-[#9B1D30] bg-[#9B1D30]/5" : "hover:border-[#9B1D30]/50 cursor-pointer"}`}
                    onClick={() => setSelectedBranch(selectedBranch === branch.id ? null : branch.id)}
                  >
                    <h3 className="font-poppins-bold text-lg flex items-center text-gray-900">{branch.name}</h3>

                    <div
                      className={`mt-2 space-y-3 transition-all duration-300 ${selectedBranch === branch.id ? "block" : "hidden"}`}
                    >
                      <div className="flex items-start ml-7">
                        <div className="text-gray-600 text-sm">{branch.address}</div>
                      </div>

                      {branch.schedule && (
                        <div className="flex items-start ml-7 gap-2">
                          <Clock className="w-4 h-4 text-[#9B1D30] mt-0.5 flex-shrink-0" />
                          <div className="text-gray-600 text-sm space-y-1">
                            <p>{branch.schedule}</p>
                            {branch.scheduleWeekend && <p>{branch.scheduleWeekend}</p>}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center ml-7 mt-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handlePhoneCall(branch.phone)
                          }}
                          className="flex items-center px-4 py-2 bg-[#1B1D32] text-white rounded-lg hover:bg-[#2E3763] transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          <span>{branch.phone}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 inline-flex items-center justify-center rounded-full h-8 w-8 transition-colors hover:bg-white/20 focus:outline-none text-white"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}
