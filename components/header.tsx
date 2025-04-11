"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import {
  Facebook,
  Instagram,
  Linkedin,
  MenuIcon,
  X,
  Home,
  ShoppingBag,
  Layers,
  Headphones,
  Building,
  Phone,
  Lightbulb,
  UserCircle,
  Mail,
  ChevronDown,
} from "lucide-react"

interface ContactOption {
  label: string
  number: string
  address: string
  schedule: string
}

export default function Header() {
  const pathname = usePathname()
  const isSupport = pathname === "/soporte"
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isCallMenuOpen, setCallMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const callMenuRef = useRef<HTMLDivElement | null>(null)
  const callOptions: ContactOption[] = [
    { label: "Sucursal TGU", number: "87346326", address: "Tegucigalpa, Honduras", schedule: "Lun-Vie: 8:00-17:00" },
    { label: "Sucursal SPS", number: "25646280", address: "San Pedro Sula, Honduras", schedule: "Lun-Vie: 8:00-17:00" },
    { label: "Sucursal CEIBA", number: "32588581", address: "La Ceiba, Honduras", schedule: "Lun-Vie: 8:00-17:00" },
    {
      label: "Sucursal CHOLUTECA",
      number: "33424387",
      address: "Choluteca, Honduras",
      schedule: "Lun-Vie: 8:00-17:00",
    },
    {
      label: "Sucursal SRC",
      number: "31985826",
      address: "Santa Rosa de Copán, Honduras",
      schedule: "Lun-Vie: 8:00-17:00",
    },
  ]
  const socialLinks = [
    { href: "https://www.instagram.com/posdehonduras", icon: Instagram, color: "#d62976" },
    { href: "https://www.facebook.com/POSdehondura/", icon: Facebook, color: "#1877F2" },
    { href: "https://www.linkedin.com/company/pos-de-honduras-pdh/", icon: Linkedin, color: "#0072b1" },
  ]

  const [comingSoonModal, setComingSoonModal] = useState<string | null>(null)

  const handleComingSoonClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault()
    setComingSoonModal(section)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        setMobileMenuOpen(false)
      }

      if (callMenuRef.current && !callMenuRef.current.contains(event.target as Node) && isCallMenuOpen) {
        setCallMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMobileMenuOpen, isCallMenuOpen])
  
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.location.href = "mailto:marketingdigital@posdehonduras.com"
  }
  
  useEffect(() => {
    // Función para actualizar el estado basado en el tamaño de la pantalla
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobileMenuOpen])

  return (
    <header className={`w-full bg-white shadow-sm ${isSupport ? "" : "fixed top-0 left-0 right-0"} z-50`}>
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          {/* Mobile menu button - visible on small and medium screens */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="Pos de Honduras"
                width={120}
                height={40}
                priority
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-2">
            {socialLinks.map(({ href, icon: Icon, color }, index) => (
              <Link key={index} href={href} target="_blank" rel="noopener noreferrer">
                <div
                  className="w-10 h-10 border-2 border-[#67686B] flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    borderColor: "#67686B",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = color)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#67686B")}
                >
                  <Icon className="h-5 w-5 text-[#67686B]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="border-t border-gray-100">
        <nav
          ref={mobileMenuRef}
          className={`${isMobileMenuOpen ? "block" : "hidden"} lg:block container mx-auto py-4 px-6`}
        >
          {/* Desktop Navigation - visible on large screens */}
          <div className="hidden lg:flex lg:flex-wrap lg:justify-center lg:items-center">
            <ul className="flex items-center gap-4 xl:gap-6 text-sm font-poppins-bold text-[#23254C]">
              {[
                { href: "/", label: "Inicio", icon: Home },
                { href: "/productos", label: "Productos", icon: ShoppingBag },
                { href: "/nosotros", label: "Nosotros", icon: UserCircle },
                {
                  href: "#",
                  label: "Servicios",
                  icon: Layers,
                  comingSoon: true,
                  section: "services",
                },
                {
                  href: "#",
                  label: "Soluciones",
                  icon: Lightbulb,
                  comingSoon: true,
                  section: "solutions",
                },
                { href: "/soporte", label: "Soporte", icon: Headphones },
                { href: "/empresas", label: "Clientes", icon: Building },
              ].map((item, index) => (
                <li key={index} className="relative flex items-center gap-2 whitespace-nowrap">
                  <item.icon className="w-4 h-4 text-[#ed1b34]" />
                  <Link
                    href={item.href}
                    className="hover:text-[#ed1b34] transition-colors duration-300"
                    onClick={(e) => (item.comingSoon ? handleComingSoonClick(e, item.section) : undefined)}
                  >
                    {item.label}
                  </Link>
                  {index < 6 && <span className="text-gray-400">/</span>}
                </li>
              ))}
            </ul>
            
            <div className="flex items-center ml-6 gap-4">
              {/* Call Button */}
              <div ref={callMenuRef} className="relative">
                <button
                  onClick={() => setCallMenuOpen(!isCallMenuOpen)}
                  className="px-4 py-2 bg-[#ed1b34] text-white rounded-full hover:bg-[#9F1C2C] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                  aria-expanded={isCallMenuOpen}
                  aria-haspopup="true"
                >
                  <Phone className="w-4 h-4" />
                  Llamar
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isCallMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Call Dropdown Menu */}
                {isCallMenuOpen && (
                  <div className="absolute right-0 top-full bg-white shadow-lg rounded-lg mt-2 w-72 z-50">
                    <div className="max-h-96 overflow-y-auto">
                      {callOptions.map((option, index) => (
                        <div
                          key={index}
                          className="p-4 border-b last:border-0 hover:bg-gray-50 transition-colors duration-300"
                        >
                          <h3 className="font-semibold text-gray-900">{option.label}</h3>
                          <p className="text-sm text-gray-500">{option.schedule}</p>
                          <p className="text-sm text-gray-600 mt-1">{option.address}</p>
                          <Link
                            href={`tel:${option.number}`}
                            className="flex items-center gap-1 text-[#ed1b34] hover:text-[#9F1C2C] transition-colors duration-300 mt-2"
                          >
                            <Phone className="w-4 h-4" />
                            <span>Llamar</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Email Button */}
              <a
                href="mailto:marketingdigital@posdehonduras.com"
                onClick={handleEmailClick}
                className="px-4 py-2 bg-[#ed1b34] text-white rounded-full hover:bg-[#9F1C2C] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Mail className="w-4 h-4" /> Correo
              </a>
            </div>
          </div>
          
          {/* Mobile Navigation - visible on small and medium screens */}
          <div className="lg:hidden">
            <ul className="flex flex-col gap-4 text-sm font-poppins-bold text-[#23254C]">
              {[
                { href: "/", label: "Inicio", icon: Home },
                { href: "/productos", label: "Productos", icon: ShoppingBag },
                { href: "/nosotros", label: "Nosotros", icon: UserCircle },
                {
                  href: "#",
                  label: "Servicios",
                  icon: Layers,
                  comingSoon: true,
                  section: "services",
                },
                {
                  href: "#",
                  label: "Soluciones",
                  icon: Lightbulb,
                  comingSoon: true,
                  section: "solutions",
                },
                { href: "/soporte", label: "Soporte", icon: Headphones },
                { href: "/empresas", label: "Clientes", icon: Building },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-[#ed1b34]" />
                  <Link
                    href={item.href}
                    className="hover:text-[#ed1b34] transition-colors duration-300"
                    onClick={(e) => (item.comingSoon ? handleComingSoonClick(e, item.section) : undefined)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              
              {/* Call Button - Mobile */}
              <li className="w-full mt-2">
                <div className="relative w-full">
                  <button
                    onClick={() => setCallMenuOpen(!isCallMenuOpen)}
                    className="w-full px-4 py-2 bg-[#ed1b34] text-white rounded-full hover:bg-[#9F1C2C] transition-all duration-300 flex items-center justify-center gap-2"
                    aria-expanded={isCallMenuOpen}
                    aria-haspopup="true"
                  >
                    <Phone className="w-4 h-4" />
                    Llamar
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isCallMenuOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {/* Call Dropdown Menu - Mobile */}
                {isCallMenuOpen && (
                  <>
                    <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setCallMenuOpen(false)} />
                    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-t-lg w-[90%] max-w-[320px] z-50">
                      <div className="max-h-[70vh] overflow-y-auto">
                        {callOptions.map((option, index) => (
                          <div
                            key={index}
                            className="p-4 border-b last:border-0 hover:bg-gray-50 transition-colors duration-300"
                          >
                            <h3 className="font-semibold text-gray-900">{option.label}</h3>
                            <p className="text-sm text-gray-500">{option.schedule}</p>
                            <p className="text-sm text-gray-600 mt-1">{option.address}</p>
                            <Link
                              href={`tel:${option.number}`}
                              className="flex items-center gap-1 text-[#ed1b34] hover:text-[#9F1C2C] transition-colors duration-300 mt-2"
                            >
                              <Phone className="w-4 h-4" />
                              <span>Llamar</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </li>

              {/* Email Button - Mobile */}
              <li className="w-full mt-2">
                <a
                  href="mailto:marketingdigital@posdehonduras.com"
                  onClick={handleEmailClick}
                  className="w-full px-4 py-2 bg-[#ed1b34] text-white rounded-full hover:bg-[#9F1C2C] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Correo
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
      {/* Coming Soon Modal */}
      {comingSoonModal && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setComingSoonModal(null)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 max-w-md w-[90%] z-50">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#23254C]">
                {comingSoonModal === "services" ? "Servicios" : "Soluciones"}
              </h3>
              <button onClick={() => setComingSoonModal(null)} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="text-center py-4">
              <Lightbulb className="h-16 w-16 text-[#ed1b34] mx-auto mb-4" />
              <p className="text-gray-700 mb-2">¡Próximamente!</p>
              <p className="text-sm text-gray-500">
                Estamos trabajando en esta sección. Pronto tendremos disponible toda la información sobre nuestros{" "}
                {comingSoonModal === "services" ? "servicios" : "soluciones"}.
              </p>
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={() => setComingSoonModal(null)}
                className="px-4 py-2 bg-[#ed1b34] text-white rounded-full hover:bg-[#9F1C2C] transition-all duration-300"
              >
                Entendido
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}