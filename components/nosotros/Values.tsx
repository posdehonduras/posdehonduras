"use client"
import React,{useRef} from 'react';
import { Cpu, Handshake, MonitorSmartphone} from'lucide-react';
import { useInView } from './hooks/useInView';

/**
 * Componente Values
 * 
 * Esta seccion muestra los valores de la empresa con una animacion de aparicion cuando
 * entra en la vista del usuario.
 * 
 */

export const Values : React.FC = () => {
  const valuesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(valuesRef);

  // lista de valores con titulo y descripcion

  const values = [
    {
      title:"Innovador",
      description :"Nuestros equipos se diferencian por ser tecnología de punta, contamos con las mejores marcas del mercado ",
      icon:<Cpu className="h-8 w-8 text-[#1B1D32]"/>,

    },
    {
      title:"Profesional", 
      description:"Ponemos a tu disposición un servicio posventa adaptado a sus necesidades con el fin de satisfacer sus necesidades",
      icon:< Handshake className="h-8 w-8 text-[#1B1D32]"/>,
    },
    {
      title:"Inteligente",
      description :"Desde el primer momento , contara con equipos escalable , modernos y con la garantía que le ofrecemos en POS de Honduras",
      icon:<MonitorSmartphone className="h-8 w-8 text-[#1B1D32]"/>,

    }
  ];

  return (
<section
ref={valuesRef}
className={`transition-all duration-700 px-6 md:px12 lg:px-20 py-16 lg:py-12 ${
  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
}`}
>
  {/*Titulo de la seccion */}

  <h2 className="text-4xl md:text-5xl font-poppins-bold md-12 text-gray-800 text-center py-4 ">Nuestros Servicios</h2>
   {/*Contenedor de las tarjetas de valores */}
   <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {values.map((value, index) => (
      <div 
      key={index}
      className={`transition-all duration-700 delay-[${index * 200}ms]`}
      >
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all min-h-[280px]">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4">
        {value.icon}
          </div>
          {/*Titulo */}
          <h3 className="text-xl font-poppins-bold text-gray-800 mb-2">{value.title}</h3>
          {/*Descripcion */}
          <p className="text-gray-600 flex-grow font-poppins-regular">{value.description}</p>
          </div>
          </div>
    ))}
    </div>
    </section>
  );
};
export default Values;



  