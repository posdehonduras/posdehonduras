import type React from "react"
import  History from "../../components/nosotros/History"
import  MisionVision from "../../components/nosotros/MisionVision"
import  Values from "../../components/nosotros/Values"
import Header from "@/components/header"
import Footer from "@/components/landingpage/footer"
import  SeccionSucursales  from "../../components/nosotros/SeccionSucursales"

const AboutPage: React.FC = () => {
  return (
    <div className="main-h-screen ">
        <Header />
        <History />
        <MisionVision/>
        <Values/>
      {/* <CounterStats/>*/}  
        <SeccionSucursales/>
      <Footer/>
    </div>
  )
}

export default AboutPage

