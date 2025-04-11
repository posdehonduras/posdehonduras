import Header from "@/components/header"
import Footer from "@/components/landingpage/footer"
import TrustedCompanies from "@/components/empresas/empresasConfianza"
import CTASection from "@/components/empresas/ctaSeccion"
const AboutPage: React.FC = () => {
  return (
    <div className="main-h-screen ">
        <Header />
        <TrustedCompanies/>
        <CTASection/>
         <Footer/>
        
    </div>
  )
}

export default AboutPage