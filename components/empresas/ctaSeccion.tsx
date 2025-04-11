import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-r from-gray to-white mt-0 mb-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-poppins-bold text-[#1B1D32] mb-4">
            Lleva tu negocio al siguiente nivel
          </h2>
          <p className="text-black/80 font-poppins-bold text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Descubre cómo nuestras soluciones personalizadas pueden transformar tu empresa y ayudarte a alcanzar tus
            objetivos de negocio.
          </p>
          
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 bg-[#ed1b34] text-white font-medium px-6 py-3 md:px-8 rounded-lg hover:bg-[#9F1C2C] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            aria-label="Ver nuestros productos"
          >
            Ver nuestros productos
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </Link>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-black">
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-3xl md:text-4xl font-poppins-bold text-[#ed1b34]">100+</span>
              <span className="text-black/80 mt-1">Proyectos completados</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-3xl md:text-4xl font-poppins-bold text-[#ed1b34]">95%</span>
              <span className="text-black/80 mt-1">Clientes satisfechos</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-3xl md:text-4xl font-poppins-bold text-[#ed1b34]">Soporte Técnico</span>
              <span className="text-black/80 mt-1">Especializado</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="hidden lg:block absolute right-0 bottom-0 opacity-10 -z-10">
        <div className="w-48 h-48 rounded-full bg-[#ed1b34] blur-3xl"></div>
      </div>
      <div className="hidden lg:block absolute left-0 top-0 opacity-10 -z-10">
        <div className="w-32 h-32 rounded-full bg-[#ed1b34] blur-3xl"></div>
      </div>
    </section>
  );
}