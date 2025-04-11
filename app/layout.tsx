import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import type React from "react";
import { Poppins } from "next/font/google";
import WhatsAppButton from "@/components/landingpage/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Ajusta los pesos que necesitas
  variable: "--font-poppins", // Esto es útil para usar con Tailwind
});

export const metadata: Metadata = {
  title: "POS de Honduras - Tenemos una solución para los diferentes mercados",
  description: "En POS de Honduras brindamos soluciones tecnológicas especializadas para empresas. Ofrecemos escáneres, impresoras de etiquetas, computadoras, handhelds, impresoras móviles, sistemas de punto de venta, ERP, WMS, CRM, MDM, antenas de seguridad EAS, baterías recargables y más. Somos expertos en soluciones de punto de venta y retail. ¡Descubre cómo optimizar tu negocio con nosotros!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Meta descripción agregada manualmente */}
        <meta name="description" content="En POS de Honduras brindamos soluciones tecnológicas especializadas para empresas. Ofrecemos escáneres, impresoras de etiquetas, computadoras, handhelds, impresoras móviles, sistemas de punto de venta, ERP, WMS, CRM, MDM, antenas de seguridad EAS, baterías recargables y más. Somos expertos en soluciones de punto de venta y retail. ¡Descubre cómo optimizar tu negocio con nosotros!" />
      </head>
      <body className={poppins.variable}>
        {children}
        <Analytics />
        <WhatsAppButton phoneNumber="50431632881" />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
