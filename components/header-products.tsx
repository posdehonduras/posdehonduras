"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";

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
  Search,
  ShoppingCart,
} from "lucide-react";

interface ContactOption {
  label: string;
  number: string;
  address: string;
  schedule: string;
}

interface HeaderProps {
  onCategoryMenuToggle?: () => void;
  onSearch?: (query: string) => void;
  isCategoryMenuOpen?: boolean;
}

export default function Header({
  onCategoryMenuToggle,
  onSearch,
  isCategoryMenuOpen,
}: HeaderProps) {
  const pathname = usePathname();
  const isSupport = pathname === "/soporte";
  const isProducts =
    pathname === "/productos" || pathname?.startsWith("/productos/");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCallMenuOpen, setCallMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { items } = useCart();
  const [screenSize, setScreenSize] = useState<string | null>(null);

  const totalItems = items?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const callMenuRef = useRef<HTMLLIElement | null>(null);
  const callMenuDivRef = useRef<HTMLDivElement | null>(null);
  const callOptions: ContactOption[] = [
    {
      label: "Sucursal TGU",
      number: "87346326",
      address: "Tegucigalpa, Honduras",
      schedule: "Lun-Vie: 8:00-17:00",
    },
    {
      label: "Sucursal SPS",
      number: "25646280",
      address: "San Pedro Sula, Honduras",
      schedule: "Lun-Vie: 8:00-17:00",
    },
    {
      label: "Sucursal CEIBA",
      number: "32588581",
      address: "La Ceiba, Honduras",
      schedule: "Lun-Vie: 8:00-17:00",
    },
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
  ];
  const socialLinks = [
    {
      href: "https://www.instagram.com/posdehonduras",
      icon: Instagram,
      color: "#d62976",
    },
    {
      href: "https://www.facebook.com/POSdehondura/",
      icon: Facebook,
      color: "#1877F2",
    },
    {
      href: "https://www.linkedin.com/company/pos-de-honduras-pdh/",
      icon: Linkedin,
      color: "#0072b1",
    },
  ];

  const [comingSoonModal, setComingSoonModal] = useState<string | null>(null);

  const handleComingSoonClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    e.preventDefault();
    setComingSoonModal(section);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setMobileMenuOpen(false);
      }

      if (
        callMenuRef.current &&
        !callMenuRef.current.contains(event.target as Node) &&
        isCallMenuOpen
      ) {
        setCallMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen, isCallMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setScreenSize("xl-desktop"); // XL desktop
        setMobileMenuOpen(false);
      } else if (width >= 1024) {
        setScreenSize("lg-desktop"); // Large desktop including 1024x800
        setMobileMenuOpen(false);
      } else if (width >= 768) {
        setScreenSize("tablet");
        // Don't auto-close on tablet
      } else {
        setScreenSize("mobile");
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "mailto:marketingdigital@posdehonduras.com";
  };

  // Función para manejar la búsqueda
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim() !== "" && onSearch) {
      onSearch(searchQuery);
    }
  };

  // Función para manejar el clic en el botón de categorías
  const handleCategoryButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onCategoryMenuToggle) {
      onCategoryMenuToggle();
    }
  };

  // Función para limpiar la búsqueda
  const clearSearch = () => {
    setSearchQuery("");
    if (onSearch) {
      onSearch("");
    }
  };

  // Efecto para realizar búsqueda en tiempo real
  useEffect(() => {
    if (!onSearch) return;

    const timeoutId = setTimeout(() => {
      if (searchQuery.trim() !== "") {
        onSearch(searchQuery);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, onSearch]);

  // Determine menu visibility logic
  const isSmallScreen = screenSize === "mobile" || screenSize === "tablet";
  const isLargeScreen =
    screenSize === "lg-desktop" || screenSize === "xl-desktop";
  const isMediumScreen = screenSize === "lg-desktop"; // Para arreglos específicos de pantallas medianas

  // Only show menu when explicitly opened on mobile/tablet
  const showMobileMenu = isSmallScreen && isMobileMenuOpen;

  // Función para determinar si se debe mostrar el botón de categorías
  // No se muestra en pantallas medianas (1024-1279px) ni en Macbook (aprox 1200x800)
  const shouldShowCategoryButton = () => {
    // Solo mostrar en móvil y tablet, NO en resoluciones medianas
    return screenSize === "mobile" || screenSize === "tablet";
  };

  // Calculamos la altura del espaciador basado en múltiples factores
  const getSpacerHeight = () => {
    if (isSmallScreen && isMobileMenuOpen) {
      return "280px";
    } else if (isProducts) {
      if (screenSize === "tablet") {
        return "160px";
      } else if (screenSize === "lg-desktop") {
        return "140px"; // Reducimos la altura para pantallas 1024x800 ya que los botones están arriba
      } else {
        return "140px";
      }
    } else {
      return "120px";
    }
  };

  return (
    <>
      <style jsx global>{`
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
          -webkit-appearance: none;
        }

        /* Arreglos para tablets generales */
        @media (min-width: 768px) and (max-width: 1023px) {
          .tablet-search-container {
            width: 100%;
            margin-top: 0.5rem;
            order: 3;
          }

          .tablet-menu-layout .mobile-menu {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          .tablet-menu-layout .mobile-menu ul {
            flex-direction: column;
            gap: 0.75rem;
          }

          /* Mostrar botón de categorías solo en tablets reales, no en pantallas medianas */
          .tablet-category-btn {
            display: flex !important;
          }
        }

        /* Arreglos específicos para iPads y Kindles */
        @media (min-width: 768px) and (max-width: 1023px) {
          .tablet-special-fixes .search-wrapper {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.5rem;
          }

          .tablet-special-fixes .tablet-category-btn {
            display: flex !important;
            margin-right: 0.5rem;
          }
        }

        /* Special fix for 1024x800 y similar - Ocultar botón de categorías */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .medium-screen-buttons {
            display: flex;
            gap: 0.5rem;
          }

          .medium-screen-buttons .call-btn,
          .medium-screen-buttons .mail-btn {
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
            min-width: auto !important;
          }

          .medium-screen-buttons .icon-only {
            margin-right: 0;
          }

          .lg-desktop-fixes .mobile-menu ul {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem 1rem;
          }

          /* Esconder los botones de la navegación en resoluciones medias */
          .medium-screen-hide {
            display: none !important;
          }

          /* Ocultar el botón de categorías en pantallas medianas */
          .medium-screen-category-btn {
            display: none !important;
          }
        }
      `}</style>

      <header
        className={`w-full bg-white shadow-sm ${
          isSupport ? "" : "fixed top-0 left-0 right-0"
        } z-50 ${isSmallScreen ? "tablet-menu-layout" : ""} ${
          screenSize === "lg-desktop" ? "lg-desktop-fixes" : ""
        } ${screenSize === "tablet" ? "tablet-special-fixes" : ""}`}
      >
        <div className="container mx-auto py-4 px-6">
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
            {/* Logo y Menú Móvil */}
            <div className="flex items-center gap-4">
              <button
                className={`${
                  isLargeScreen && screenSize === "xl-desktop"
                    ? "hidden"
                    : "block"
                }`}
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>

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

            {/* Barra de búsqueda y carrito para desktop y tablet */}
            {isProducts && (
              <div className="hidden sm:flex items-center justify-end flex-1 xl:flex-none xl:justify-center xl:flex-grow order-2 xl:order-2 tablet-search-container">
                <div className="flex items-center w-full max-w-xl search-wrapper">
                  {/* Botón categorías visible SOLO en tablets, NO en pantallas medianas */}
                  {shouldShowCategoryButton() && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`mr-2 tablet-category-btn hidden medium-screen-category-btn ${
                        isCategoryMenuOpen ? "bg-gray-100" : ""
                      }`}
                      onClick={handleCategoryButtonClick}
                      type="button"
                      aria-expanded={isCategoryMenuOpen}
                      aria-label="Toggle category menu"
                    >
                      {isCategoryMenuOpen ? (
                        <X className="h-5 w-5" />
                      ) : (
                        <MenuIcon className="h-5 w-5" />
                      )}
                    </Button>
                  )}

                  <form
                    onSubmit={handleSearch}
                    className="flex flex-grow items-center"
                  >
                    <div className="relative flex-grow">
                      <Input
                        type="text"
                        placeholder="Buscar productos..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={searchQuery ? clearSearch : undefined}
                        className="absolute right-0 top-0 h-full"
                      >
                        {searchQuery ? (
                          <X className="h-5 w-5 text-[#ed1b34]" />
                        ) : (
                          <Search className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
                <Link href="/carrito" className="ml-4 relative">
                  <Button variant="outline" size="icon">
                    <ShoppingCart className="h-5 w-5" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>
            )}

            {/* Iconos de redes sociales y botones para pantallas medias */}
            <div className="flex items-center gap-2">
              {/* Botones de llamar y correo para pantallas medianas */}
              {isMediumScreen && (
                <div className="medium-screen-buttons mr-2">
                  <div ref={callMenuDivRef} className="relative inline-block">
                    <button
                      onClick={() => setCallMenuOpen(!isCallMenuOpen)}
                      className="call-btn px-2 py-1 bg-[#ed1b34] text-white rounded-full hover:bg-[#9F1C2C] transition-all duration-300 flex items-center justify-center gap-1 text-xs"
                      aria-expanded={isCallMenuOpen}
                      aria-haspopup="true"
                    >
                      <Phone className="w-3 h-3 icon-only" />
                      <span>Llamar</span>
                    </button>

                    {/*Menu desplegable */}
                    {isCallMenuOpen && (
                      <>
                        <div
                          className="fixed inset-0 bg-black/20 z-40"
                          onClick={() => setCallMenuOpen(false)}
                        />
                        <div className="absolute right-0 top-full bg-white shadow-lg rounded-lg mt-2 w-64 z-50">
                          <div className="max-h-[70vh] overflow-y-auto">
                            {callOptions.map((option, index) => (
                              <div
                                key={index}
                                className="p-4 border-b last:border-0 hover:bg-gray-50 transition-colors duration-300"
                              >
                                <h3 className="font-semibold text-gray-900">
                                  {option.label}
                                </h3>
                                <p className="text-sm text-gray-500">
                                  {option.schedule}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                  {option.address}
                                </p>
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
                  </div>

                  <a
                    href="mailto:marketingdigital@posdehonduras.com"
                    onClick={handleEmailClick}
                    className="mail-btn px-2 py-1 bg-[#ed1b34] text-white rounded-full hover:bg-[#9F1C2C] transition-all duration-300 flex items-center justify-center gap-1 text-xs"
                  >
                    <Mail className="w-3 h-3 icon-only" /> <span>Correo</span>
                  </a>
                </div>
              )}

              {/* Iconos de redes sociales */}
              {socialLinks.map(({ href, icon: Icon, color }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="w-10 h-10 border-2 border-[#67686B] flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      borderColor: "#67686B",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "#67686B")
                    }
                  >
                    <Icon className="h-5 w-5 text-[#67686B]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Barra de búsqueda móvil para productos */}
          {isProducts && (
            <div className="sm:hidden mt-4">
              <div className="flex items-center">
                {/* Solo mostrar en móvil real, no en medianas resoluciones */}
                {shouldShowCategoryButton() && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`mr-2 ${
                      isCategoryMenuOpen ? "bg-gray-100" : ""
                    }`}
                    onClick={handleCategoryButtonClick}
                    type="button"
                    aria-expanded={isCategoryMenuOpen}
                    aria-label="Toggle category menu"
                  >
                    {isCategoryMenuOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <MenuIcon className="h-5 w-5" />
                    )}
                  </Button>
                )}
                <div className="relative flex-grow">
                  <Input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={searchQuery ? clearSearch : undefined}
                    className="absolute right-0 top-0 h-full"
                  >
                    {searchQuery ? (
                      <X className="h-5 w-5 text-[#ed1b34]" />
                    ) : (
                      <Search className="h-5 w-5" />
                    )}
                  </Button>
                </div>
                <Link href="/carrito" className="ml-2 relative">
                  <Button variant="outline" size="icon">
                    <ShoppingCart className="h-5 w-5" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/*Links de las diferentes secciones de la pagina web */}
        <div className="border-t border-gray-100">
          <nav
            ref={mobileMenuRef}
            className={`mobile-menu ${
              showMobileMenu || isLargeScreen ? "block" : "hidden"
            } container mx-auto py-4 px-6`}
          >
            <ul className="flex flex-col xl:flex-row justify-center items-stretch xl:items-center gap-4 xl:gap-6 text-sm font-poppins-bold text-[#23254C]">
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
                <li key={index} className="relative flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-[#ed1b34]" />
                  <Link
                    href={item.href}
                    className="hover:text-[#ed1b34] transition-colors duration-300"
                    onClick={(e) => {
                      if (item.comingSoon) {
                        handleComingSoonClick(e, item.section);
                      } else if (isSmallScreen || isMediumScreen) {
                        // Close menu when a link is clicked on mobile/tablet/medium screens
                        setMobileMenuOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                  {index < 6 && (
                    <span className="hidden xl:inline text-gray-400">/</span>
                  )}
                </li>
              ))}

              {/* Botones de Llamar y Correo - ocultar en pantallas medianas */}
              <div
                className={`flex flex-col w-full xl:flex-row xl:w-auto items-center medium-screen-hide`}
              >
                {/*Botton llamar */}
                <li
                  ref={callMenuRef}
                  className="relative max-w-[200px] mx-auto xl:mx-0 w-auto"
                >
                  <button
                    onClick={() => setCallMenuOpen(!isCallMenuOpen)}
                    className="w-auto min-w-[120px] px-4 py-2 bg-[#ed1b34] text-white rounded-full hover:bg-[#9F1C2C] transition-all duration-300 flex items-center justify-center gap-2"
                    aria-expanded={isCallMenuOpen}
                    aria-haspopup="true"
                  >
                    <Phone className="w-4 h-4" />
                    Llamar
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isCallMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/*Menu desplegable */}
                  {isCallMenuOpen && (
                    <>
                      <div
                        className="fixed inset-0 bg-black/20 z-40"
                        onClick={() => setCallMenuOpen(false)}
                      />
                      <div className="fixed xl:absolute bottom-0 xl:bottom-auto left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-0 xl:right-auto xl:top-full bg-white shadow-lg xl:rounded-lg mt-2 w-[90%] max-w-[320px] xl:w-72 z-50">
                        <div className="max-h-[70vh] overflow-y-auto">
                          {callOptions.map((option, index) => (
                            <div
                              key={index}
                              className="p-4 border-b last:border-0 hover:bg-gray-50 transition-colors duration-300"
                            >
                              <h3 className="font-semibold text-gray-900">
                                {option.label}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {option.schedule}
                              </p>
                              <p className="text-sm text-gray-600 mt-1">
                                {option.address}
                              </p>
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

                <li className="mt-4 xl:mt-0 xl:ml-4 max-w-[200px] mx-auto xl:mx-0 w-auto">
                  <a
                    href="mailto:marketingdigital@posdehonduras.com"
                    onClick={handleEmailClick}
                    className="w-auto min-w-[120px] px-4 py-2 bg-[#ed1b34] text-white rounded-full hover:bg-[#9F1C2C] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" /> Correo
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </div>

        {comingSoonModal && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setComingSoonModal(null)}
            />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 max-w-md w-[90%] z-50">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-[#23254C]">
                  {comingSoonModal === "services" ? "Servicios" : "Soluciones"}
                </h3>
                <button
                  onClick={() => setComingSoonModal(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="text-center py-4">
                <Lightbulb className="h-16 w-16 text-[#ed1b34] mx-auto mb-4" />
                <p className="text-gray-700 mb-2">¡Próximamente!</p>
                <p className="text-sm text-gray-500">
                  Estamos trabajando en esta sección. Pronto tendremos
                  disponible toda la información sobre nuestros{" "}
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
      {/* Espaciador para evitar que el contenido quede debajo del header fixed */}
      {!isSupport && (
        <div
          className={`w-full ${isMediumScreen ? "header-spacer-lg" : ""}`}
          style={{
            height: getSpacerHeight(),
          }}
        />
      )}
    </>
  );
}
