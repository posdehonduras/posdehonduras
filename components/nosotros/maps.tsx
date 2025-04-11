import type React from "react"
import Image from "next/image"

const NationalCoverage: React.FC = () => {
  return (
    <section className=" ">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="text-3xl font-bold text-center text-red-600 p-8">¡COBERTURA A NIVEL NACIONAL!</h2>
        <div className="flex justify-center ">
          <div className="relative w-full max-w-3xl">
            <Image
              src="/img/cobertura3.png"
              alt="Mapa de cobertura nacional"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NationalCoverage

