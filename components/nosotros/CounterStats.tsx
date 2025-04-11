"use client";

import React,{useRef} from "react";
import { useInView } from "../nosotros/hooks/useInView";
import { CountUp } from "./CountUp";



/**
 * componente 'counterstats'
 * muestra estadisticas con animaciones de conteo cuando entran ala vista
 * 
 * 
 */

export const CounterStats : React.FC = () => {
  // referencia la contenedor para detectar si esta ala vista
   const statsRef = useRef<HTMLDivElement>(null);
   const isInView = useInView(statsRef);

   // Datos de las estadisticas

   const stats = [
{label: "Años de Experiencia",value: 20},
{label: "Sucursales",value: 5},
{label: "Clientes Satisfechos",value: 1000},

   ];

  return (
    <div ref={statsRef}
    className={`py-12 px-4 md:px-8 lg:px-16 transition-all duration-500 ${
     isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
 }`}
 >
 {/*Titulo de la seccion*/}
 <h2 className="text-3xl font-bold text-[#1B1D32] text-center mb-8">
  Impacto y Trayectoria 
  </h2>




  {/* contenedor de las estadisticas con un diseño de Cuadricula adaptable */}

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {stats.map((stat, index) => (
    <div key ={index} className="bg-white shadow-md rounded-lg text-center p-6">
      {/* Numero con animacion de conteo*/}
      <h4 className="text-3xl font-bold text-[#ed1b34]">
      <CountUp end={stat.value}/>
      </h4>

      {/* Descripcion de la estadistica */}
      <p className="text-gray-600 ">{stat.label}</p>
      </div>
    ))}
    </div>
    </div>
    
    );
    };

    export default CounterStats;


