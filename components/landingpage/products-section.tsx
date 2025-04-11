"use client";
{/*Importaciones */}
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

{/*Datos de los productos software */}
const features = [
  {
    category: "Software",
    description:
      "Simplifica Procesos y Gestiona tu negocio en base a información concreta sobre su empresa",
    items: [
      "Recursos humanos",
      "Inventarios",
      "Logística",
      "Finanzas",
      "Punto de venta",
      "Mercadeo & CRM",
      "Proveedores",
      "Cuentas por pagar/cobrar",
    ],
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742328807/software_ajcxwx.jpg", // Imagen específica para Software
  },

 
  {
    category: "Hardware",
    description:
      "Potencia tu punto de venta con nuestra amplia gama de hardware de última tecnología y probada calidad",
    items: [
      "Etiquetas electrónicas",
      "Terminales POS",
      "Lectores de códigos de barras",
      "Balanzas electrónicas",
      "Monitores táctiles",
      "Computadoras All-in-one",
      "Antenas y accesorios de seguridad",
      "Impresoras: fiscales, térmicas, de etiqueta y credenciales",
    ],
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742328798/Hardware_ss3gx4.jpg", // Imagen específica para Hardware
  },
];

{/*Componente Principal */}
export default function ProductsSection() {
  return (
    <>
      {/* Sección de Transformación */}
      <section className="py-10 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto text-center -mb-12"
        >
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins-bold text-[#ed1b34] mb-4">
            Transforma tu negocio
            <br />
            con lo último en tecnología que
            <br />
            POS de Honduras
            <br />
            tiene para ofrecerte
          </h2>
        </motion.div>
      </section>

      {/* Sección de Productos */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.category}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-[#000000]"
            >
              {/*Animacion de cada categoria */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={index % 2 !== 0 ? "md:order-2" : ""}
              >
                <h3 className="text-2xl md:text-3xl font-poppins-bold mb-6 capitalize">
                  {feature.category}
                </h3>
                <p className="font-poppins-bold text-black">{feature.description}</p>
                <ul className="space-y-2 text-sm md:text-base mt-4">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="h-5 w-5 text-gray-500">•</span>
                      <span className="text-gray-500 font-poppins-bold">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/demo">  
                {/*Boton de agendar una demo */}
                  <button className="bg-[#67686B] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-poppins-bold transition-all duration-300 mt-4 md:mt-8 hover:bg-[#57595C] group">
                    <span className="group-hover:animate-none animate-pulse">
                      Agendar una demo
                    </span>
                  </button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={index % 2 !== 0 ? "md:order-1" : ""}
              >
                <Image
                  src={feature.image}
                  alt={feature.category}
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

