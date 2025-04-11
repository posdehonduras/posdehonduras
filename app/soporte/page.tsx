import Header from "@/components/header"
import SupportPage from "@/components/soporte/formulariosoporte"
import FAQSection from "@/components/soporte/preguntaFrecuentes"
import Footer from "@/components/landingpage/footer"

const AboutPage: React.FC = () => {
  return (
    <div className="main-h-screen ">
        <Header />
        <SupportPage/>
        <FAQSection/>
         <Footer/>
        
    </div>
  )
}

export default AboutPage

