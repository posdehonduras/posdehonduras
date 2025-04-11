import Image from "next/image";
import type React from "react";
import type { Sucursal } from "./hooks/sucursal";

type SucursalCardProps = {
  sucursal: Sucursal;
};

export const SucursalCard: React.FC<SucursalCardProps> = ({ sucursal }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg w-full group mb-6">
      {/* Imagen de la sucursal */}
      <Image
        src={sucursal.imagen || "/placeholder.svg"}
        alt={sucursal.nombre}
        width={800}
        height={200}
        className="object-cover w-full h-[300px]"
      />

      {/* Contenedor de la información (aparece al pasar el cursor) */}
      <div className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-3xl font-bold">{sucursal.nombre}</h3>
      </div>
    </div>
  );
};
