export type Sucursal ={
    id: number
    nombre: string
    imagen: string
   // direccion:string
  //  telefono: string
}

export const sucursales : Sucursal[] = [
    {
        id:1,
        nombre: "Tegucigalpa",
        imagen:"https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742328796/tegucigalpa_y2rfqm.jpg",
     //   direccion: "colonia las minitas",
      //  telefono: "1234567",
    },
    {
        id:2,
        nombre: "San Pedro Sula",
        imagen:"https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742328792/SPS_h73yiy.jpg",
      //  direccion: "colonia las minitas",
     //   telefono: "1234567",
    },
    {
        id:3,
        nombre: "Choluteca",
        imagen:"https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742592771/CHOLUTECA_NEW_ytfkmp.png",
      //  direccion: "colonia las minitas",
      //  telefono: "1234567",
    },
    {
        id:4,
        nombre: "La Ceiba",
        imagen:"https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742328797/CEIBA_e8vith.jpg",
      //  direccion: "colonia las minitas",
      //  telefono: "1234567",
    },
    {
        id:5,
        nombre: "Copán",
        imagen:"https://res.cloudinary.com/ddrl7h6xt/image/upload/v1742328800/SRC_fo3blf.png",
      //  direccion: "Barrio Santa Teresa, 1 cuadra al sur del parque central La Libertad, esquina opuesta a la Corte de Apelaciones y los Juzgados.",
      //  telefono: "1234567",
    },
]