"use client";

import React, { useRef } from "react";
import { ArrowRight, Target } from "lucide-react";
import { useInView } from "../nosotros/hooks/useInView";

/**
 * componente 'MissionVision'
 * Muestra la mision y vision de la empresa en dos trajetas con animacion cuando entra visualmente
 *
 *
 */

export const MisionVision: React.FC = () => {
  //Referencia al contenedor para detectar si esta en la vista dell usuario
  const missionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(missionRef);

  return (
    <div
      ref={missionRef} // Asigna mas que todo la referencia al contenedor principal
      className={`py-6 px-4 md:px-8 lg:px-16 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/*Titulo de la Seccion */}
      <h2 className="text-4xl md:text-5xl font-poppins-bold text-center text-[#1B1D32] mb-4">
        Quiénes Somos
      </h2>

      {/* Contenedor general de la seccion */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/*Tarjeta de mision */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 flex flex-col items-center justify-center text-center h-full">
          <div className="space-y-4">
            {/*Encabezado de la tarjeta con icono y titulo centrados  */}
            <div className="flex flex-col items-center">
              <ArrowRight className="h-10 w-10 text-gray-[#ed1b34]" />
              {/*Icono Mision */}
              <h3 className="text-2xl font-bold text-gray-800 mt-2">
                Misión
              </h3>
              {/*Titulo de la mision */}
            </div>
            {/*Descripcion de la mision */}
            <p className="text-gray-600 leading-relaxed font-poppins-regular">
              Ser baluarte fundamental del crecimiento Tecnológico de Honduras y
              la región Centroamericana, desempeñándonos con integridad y
              profesionalismo.
            </p>
          </div>
        </div>

        {/*Tarjeta de Vision */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 flex flex-col items-center justify-center text-center h-full">
          <div className="space-y-4">
            {/*Encabezado de la tarjeta con icono y titulo */}
            <div className="flex flex-col items-center">
              <Target className="h-10 w-10 text-[#ed1b34]" />
              {/*Icono Vision */}
              <h3 className="text-2xl font-bold text-gray-800 mt-2">Visión</h3>
              {/*Titulo de la vision */}
            </div>
            {/*Descripcion de la vision */}
            <p className="text-gray-600 leading-relaxed font-poppins-regular">
              Proveer tecnología e innovación con el mejor recurso humano,
              apasionados por la excelencia y el servicio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MisionVision;
