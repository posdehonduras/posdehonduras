"use client";

import React, { useRef } from "react";
import { Clock, Award, Users } from "lucide-react";
import { useInView } from "../nosotros/hooks/useInView"; // Hook para detectar si el componente está en la vista

export const History: React.FC = () => {
  // Referencia para detectar cuando la sección está en la vista
  const historyRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(historyRef);

  // Datos de los hitos históricos de la empresa
  const milestones = [
    {
      year: "2005",
      title: "Los inicios",
      description: "En 2005 un grupo de emprendedores visionarios fundo la empresa en san pedro sula , Enfocandose inicialmente en el desarrollo sofware para puntos de venta",
      icon: Clock,
    },
    {
      year: "2011",
      title: "El crecimiento",
      description: "La empresa crece dando soluciones integrales para puntos de venta que incluian no solo software, sino tambien hardware y otros accesorios necesarios para el funcionamiento eficiente de los negocios",
      icon: Users,
    },
    {
      year: "Presente",
      title: "Liderazgo",
      description: "La empresa decidio ampliar sus servicios y comenzó a ofrecer una amplia gama de productos para puntos de venta naciendo así POS de Honduras",
      icon: Award,
    },
  ];

  return (
    <div ref={historyRef} className="py-8 px-4 sm:px-2 md:py-24 md:px-12 lg:px-24 max-w-7xl mx-auto mt-16 w-full">
  {/* Título principal */}
  <h2 className="text-4xl sm:text-3xl md:text-5xl font-poppins-bold mb-8 text-gray-800 text-center">
    Nuestra Historia
  </h2>
      
        {/*seccion de introduccion mejorada con animaciones y diseño atractivo ala vista */}

        <div 
        className={`relative mb-16 rounded-xl overflow-hidden transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        >

        {/**fondo de la seccion con gradiente que se extiende en toda la seccion  */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B1D32] to-[#1B1D32]"/>

        {/*fondo semitransparente con forma triangular*/}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio ="none">
            {/*triangulo blanco que cubre todo el fondo con opacidad reducida */}
            <path d="M0 0 L50 100 L100 0 Z" fill = "white"/>
           </svg> 
           </div>

           {/*contendio de la introducion centrada y con estilo llamativo */}
           <div className="relative z-10 py-16 px-8 md:px-16 lg:px-24">
            {/*contenedor para limitar el ancho y centrar el contenido */}
            <div className="max-w-3xl mx-auto text-center text-white">
              {/*Titulo con tamaño dinamico segun la pantalla */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-poppins-bold mb-6">
                Una Trayectoria de Excelencia
              </h3>

              {/*parrafo con una historia breve y legible */}
              <p className="text-lg md:text-xl leading-relaxed font-poppins-regular">
              Desde nuestros humildes comienzos hasta convertirnos en líderes del sector, cada paso ha
              estado marcado por la innovación y el compromiso con la excelencia.
              </p>
              </div>
              </div>
              </div>
              
              
              
              
      {/* Línea de tiempo */}
      <div className="relative max-w-4xl mx-auto">
        {/* Línea central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#ed1b34]" />

        {/* Iteración sobre los hitos históricos */}
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          return (
            <div
              key={index}
              className={`relative mb-10 md:mb-16 transition-all duration-700 ${
                isInView ? "opacity-100 translate-x-0" : index % 2 === 0
                  ? "opacity-0 -translate-x-8"
                  : "opacity-0 translate-x-8"
              } flex items-center justify-between`}
            >
              {/* Contenedor del contenido del hito */}
              <div
                className={`flex items-center gap-4 w-full max-w-md mx-auto ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Tarjeta de la linea del tiempo */}
                <div className="p-5 bg-white shadow-lg rounded-lg flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    {/* Icono del hito */}
                    <div className="p-3 rounded-full bg-[#1B1D32]">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {/* Año y título de la tarjeta  */}
                    <div>
                      <span className="text-sm font-poppins-bold text[#1B1D32]">
                        {milestone.year}
                      </span>
                      <h4 className="text-lg font-poppins-bold text-gray-800">
                        {milestone.title}
                      </h4>
                    </div>
                  </div>
                  {/* Descripción de la tarjeta*/}
                  <p className="text-gray-600 text-sm font-poppins-regular">{milestone.description}</p>
                </div>

                
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
