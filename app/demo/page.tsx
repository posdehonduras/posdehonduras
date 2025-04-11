import Header from "@/components/header"
import DemoForm from "@/components/demo/demo-form"
import Footer from "@/components/landingpage/footer"

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Agendar una Demo</h1>
          <DemoForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}

