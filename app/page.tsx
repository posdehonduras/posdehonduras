import Header from "@/components/header"
import HeroCarousel from "@/components/landingpage/hero-carousel"
import ProductsSection from "@/components/landingpage/products-section"
import BrandsSection from "@/components/landingpage/brands-section"
import SolutionsSection from "@/components/landingpage/solutions-section"
import LocationsSection from "@/components/landingpage/locations-section"
import Footer from "@/components/landingpage/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <ProductsSection />
      <BrandsSection />
      <SolutionsSection />
      <LocationsSection />
      <Footer />
    </main>
  )
}

