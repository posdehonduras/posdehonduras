"use client"

import { useEffect,useState } from "react"
import Image from "next/image"
import {Swiper , SwiperSlide} from "swiper/react"
import {Autoplay,Navigation , Pagination} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {motion} from "framer-motion"

const brands = [
  {
    name : "Intel",
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742328788/INTEL_fvhuwc.png",
    description:"Lider mundial en la fabricacion de microprocesadores"
  },
  {
    name : "Cizaro",
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742328787/cizaro_bh5ljl.png",
    description : "Soluciones innovadoras para puntos de ventas"
  },
  {
    name:"Marques",
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742328791/MARQUES_fsdru5.png",
    description:"Soluciones tecnológicas  de alta calidad"
  },
  {
    name:"IDP",
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742328794/IDP-LOGO_kg2vhv.png",
    description:"Expertos en sistemas de identificacion"
  },
  {
    name:"OPTICON",
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742328789/OPTICON_yjwpcs.png",
    description :"Tecnologia avanzada en lectores de códigos "

  },
  {
    name:"TOUCH DYNAMIC",
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742328792/TOUCHDYNAMIC_onzosu.png",
    description:"Sistemas táctiles para comercios"
  },
  {
    name:"3NSTAR",
    image: "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742328793/3NSTAR_i8ncuk.png",
    description:"Tecnologia de captura de datos automaticas"
  },
]

export default function BradsSection() {
  const[mounted,setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
},[])

if (!mounted) return null

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1,transition:{
    staggerChildren:0.1
  }
}
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y:0, opacity:1, transition:{
    duration:0.5
  }
}
}

return(
  <>
  <div className="py-8 px-6 bg-white">
    <motion.h2 
    initial={{opacity:0,y:20}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1}}
    className="text-center text-4xl sm:text-4xl md:text-5xl
    lg:text-5xl font-poppins-bold text-[#ed1b34] mb sm:mb-8 md:mb-1">
      Las grandes marcas nos eligen para comercializar sus productos
      </motion.h2>
      </div>

      <section className="py-12 px-4 bg-gray relative">
        <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
        background-color: rgba (255,255,255,0.9);
        width: 40px !important;
        height: 40px !important;
        border-radius: 50%;
        box-shadow: 0 4px 10px rbga(0,0,0, 0.1);
        z-index:10;
        }

        .swiper-button-next{
        right: 5px !important;
        }

        .swiper-button.prev {
        left: 5px !important;
        }

      .swiper-button-next::after,
      .swiper-button-prev::after {
      font-size: 18px !important;
      font-weight: bold;
      color: #ed1b43;
        }

        @media (min-width:768px){
        .swiper-button-next {
        right:10px !important;
        }
        
        .swiper-button-prev{
        left:10px !important;
        }
        }

        @media (min-width:1024px){
        .swiper-button-next {
        right:15px !important;
        }

        .swiper-button-prev{
        left: 15px !important;
        }
        }

        .swiper-pagination{
        margin-top: 20px !important;
        position:relative !important;
        botton: 0 !important;
        }

        .swiper-pagination-bullet-active {
        background-color : #ed1b34 !important;
        }

        .brand-card-contaider .swiper-wrapper{
        padding: 10px 0;
        }
        `}</style>

        <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount:0.2 }}
        className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12"
        >
          <Swiper
          modules={[Autoplay,Navigation,Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter:true,
          }}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets:true,
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={25}
          speed={1000}
          breakpoints={{
            640:{slidesPerView:2,spaceBetween:25},
            768:{slidesPerView:3,spaceBetween:30},
            1280:{slidesPerView:4,spaceBetween:35},
          }}
          className="pb-12 brand-card-container"
          >
            {brands.map((brand)=> (
              <SwiperSlide key={brand.name} className="py-2">
                <motion.div
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group h-72 sm:h-80 md:h-84">
                  <div className="flex flex-col h-full">
                    <div className="p-6 flex items-center justify-center h-40 sm:h-44 border-b border-gray-100">
                      {brand.image ? (
                        <Image
                        src={brand.image || "/placeholder.svg"}
                        alt={brand.name}
                        width={150}
                        height={75}
                        className="object-contain transition-transform duration-300 group-hover:scale-110"/>
                      ):(
                        <span  className="text-gray-800 text-lg font-poppins-bold">{brand.name}</span>
                      )}
                      </div>
                      <div className="p-4 sm:p-5 flex-grow bg.white">
                        <h3 className="text-lg sm:text-xl font-poppins-bold text-gray-800 mb-2">{brand.name}</h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          {brand.description}</p>
                          </div>
                          </div>
                          </motion.div>
                          </SwiperSlide>
            ))}
            </Swiper>
           </motion.div>
           </section>
           </>
)
}
            

