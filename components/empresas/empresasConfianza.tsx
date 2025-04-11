"use client"

import { useState } from "react"
import Image from "next/image"

export default function TrustedCompanies() {
  const [imgError, setImgError] = useState<Record<string, boolean>>({})

  const companies = [
    { name: "Banco popular", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329834/banco_Popular_s1vvd1.png" },
    { name: "Jetstereo", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329825/jetstereo_kb75ga.png" },
    { name: "Psycho Bunny", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329814/Bunny_k1tnpe.png" },
    { name: "Grupo Comidas", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329822/Grupo_comida_vl6uje.png" },
    { name: "Pacer", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329828/pacer_hxjszw.png" },
    { name: "Diunsa", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329819/Diunsa_vznd4y.png" },
    { name: "Banpais", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329814/banpais_hrsabn.png" },
    { name: "Usap", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329832/usap_wlmayj.png" },
    { name: "Ficohsa", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329821/ficohsa_lqka1t.png" },
    { name: "Alcosa", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329833/alcosa_p8aibi.png" },
    { name: "La Mundial", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329826/la_mundial_fhpjau.png" },
    { name: "Intermoda", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329824/intermoda_gsrdh4.png" },
    { name: "Indufesa", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329823/indufesa_ymktzc.jpg" },
    { name: "Colonial Supermercados", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329817/colonial_xeflah.png" },
    { name: "Banco de Occidente", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329834/banco_de_occidente_zhxefe.png" },
    { name: "Puma", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329829/puma_mo40nw.png" },
    { name: "Cemcol", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329816/cemcol_og4wpe.png" },
    { name: "Club Arabe", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329817/ClubArabe1_x1ethh.png" },
    { name: "Larach", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329827/larach_e9hg78.png" },
    { name: "Carrion", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329815/Carrion_dphjqo.png" },
    { name: "Ketchup", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329826/ketchup_egy99m.png" },
    { name: "Comisariato los Andes", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329819/comisariato_hlc4yb.png" },
    { name: "Sporline", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329830/Sporline_widay7.png" },
    { name: "Gildan", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329822/Gildan_ieqaxj.png" },
    { name: "La Colonia", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329830/super_mercado_la_colonia_jd98yz.png" },
    { name: "Distmania", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329818/Distmania_xjnwal.png" },
    { name: "Cargo Expreso", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329815/Cargoexpreso_yllr67.png" },
    { name: "Farmacia Siman", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329820/Farmacia_Siman_ct7tn0.png" },
    { name: "Rica Sula", logo: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742329831/Ricasula_femz57.png" },
  ]

  // Función para manejar errores de carga de imágenes
  const handleImageError = (index: number) => {
    setImgError((prev) => ({
      ...prev,
      [index]: true,
    }))
    console.error(`Error cargando imagen: ${companies[index].logo}`)
  }

  return (
    <section className="pt-44 bg-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-poppins-bold text-[#1B1D32] mb-4">
            Empresas que Confían en Nosotros
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos enorgullece trabajar con empresas líderes en diferentes industrias que han confiado en nuestra
            experiencia y soluciones.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6 items-center justify-items-center pb-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full max-w-[120px] h-[85px] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-2"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {imgError[index] ? (
                  // Fallback para imágenes con error
                  <div className="w-full h-full flex items-center justify-center text-xs text-center text-gray-500 p-1">
                    {company.name}
                  </div>
                ) : (
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`Logo de ${company.name}`}
                    fill
                    sizes="(max-width: 480px) 30vw, (max-width: 640px) 30vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 120px"
                    className="object-contain p-1"
                    priority={index < 12}
                    onError={() => handleImageError(index)}
                    unoptimized={false} // Cambia a true si sigues teniendo problemas
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

