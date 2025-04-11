"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type FAQItem = {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  description?: string
  faqs?: FAQItem[]
}

export default function FAQSection({
  title = "Preguntas Frecuentes",
  description = "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.",
  faqs = [

    {
      question: "¿Cuáles son los métodos de pago aceptados?",
      answer:
        "Aceptamos tarjetas de crédito/débito (Visa, MasterCard, American Express), Efectivo, y transferencias bancarias. Todos los pagos se procesan de manera segura a través de nosotros",
    },
    {
      question: "¿Cuánto tiempo tarda el envío?",
      answer:
        "El tiempo de envío depende de tu ubicación. Generalmente, los envíos nacionales tardan de 2, 3 a 5 días hábiles.",
    },
  
    {
      question: "¿Cómo puedo contactar al servicio al cliente?",
      answer:
        "Puedes contactar a nuestro equipo de servicio al cliente a través del formulario de contacto en nuestro sitio web, por correo electrónico a marketingdigital@posdehonduras.com, o por teléfono al +504 3163-2881 de lunes a viernes, de 8:00 a 17:00 horas y sabados de 8:00 a 12:00 horas.",
    },
  ],
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-6 md:py-24 lg:py-16 bg-gray dark:bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-poppins-bold text-[#1B1D32] sm:text-4xl md:text-5xl">{title}</h2>
          <p className="max-w-[700px]  font-poppins-bold  text-gray-500 md:text-xl dark:text-gray-400">{description}</p>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="font-poppins-bold text-[#1B1D32] text-lg">{faq.question}</h3>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-gray-500 transition-transform duration-200",
                    openIndex === index ? "rotate-180 transform" : "",
                  )}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96" : "max-h-0",
                )}
              >
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

