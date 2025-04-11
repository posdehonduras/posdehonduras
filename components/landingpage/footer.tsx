"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-br from-[#9F1C2C] to-[#4D152C] text-white">
      {/* Wave Separator */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 text-white fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Section - Logo and Info */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <div className="flex items-center mb-6">
              <Image
                src="/img/logo-white.png"
                alt="POS de Honduras"
                width={150}
                height={50}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm max-w-md mb-6">
              Soluciones de punto de venta innovadoras para negocios en
              Honduras, ofreciendo tecnología de punta para optimizar sus
              operaciones.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/POSdehondura/"
                className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/posdehonduras"
                className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/pos-de-honduras-pdh/"
                className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Section - Links and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Enlaces Rápidos
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white/30"></span>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors py-1.5 flex items-center"
                >
                  <span className="bg-white/10 h-1.5 w-1.5 rounded-full mr-2"></span>
                  Inicio
                </Link>
                <Link
                  href="/productos"
                  className="text-gray-300 hover:text-white transition-colors py-1.5 flex items-center"
                >
                  <span className="bg-white/10 h-1.5 w-1.5 rounded-full mr-2"></span>
                  Productos
                </Link>
                <Link
                  href="/empresas"
                  className="text-gray-300 hover:text-white transition-colors py-1.5 flex items-center"
                >
                  <span className="bg-white/10 h-1.5 w-1.5 rounded-full mr-2"></span>
                  Clientes
                </Link>
                <Link
                  href="/soporte"
                  className="text-gray-300 hover:text-white transition-colors py-1.5 flex items-center"
                >
                  <span className="bg-white/10 h-1.5 w-1.5 rounded-full mr-2"></span>
                  Soporte
                </Link>
                <Link
                  href="/nosotros"
                  className="text-gray-300 hover:text-white transition-colors py-1.5 flex items-center"
                >
                  <span className="bg-white/10 h-1.5 w-1.5 rounded-full mr-2"></span>
                  Nosotros
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Contáctenos
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white/30"></span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-white/70 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">
                    Sucursales a Nivel Nacional
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-white/70 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">+504 3163-2881</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-white/70 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">
                    marketingdigital@posdehonduras.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 text-center md:text-left">
              © {new Date().getFullYear()} POS de Honduras. Todos los derechos
              reservados
            </p>
            <div className="flex items-center mt-3 md:mt-0 space-x-6">
              <Link
                href="/privacidad"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Términos de Servicio
              </Link>
              <button
                onClick={scrollToTop}
                className="bg-white/10 p-1.5 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Volver arriba"
              >
                <ChevronUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
