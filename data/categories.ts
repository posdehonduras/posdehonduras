import type { Category } from "@/types";

export const categories: Category[] = [

  //Todas las categorias y subcategorias de Punto de Venta
  {
    id: "punto-de-venta",
    name: "Punto de Venta",
    subcategories: [
      {
        id: "monitores",
        name: "Monitores",
        subcategories: [
          { 
            id: "monitores-convencionales", 
            name: "Monitores Convencionales" 
          },
          { 
            id: "touchscreen", 
            name: "Touchscreen" 
          },
        ],
      },
      {
        id: "verificador-precio",
        name: "Verificador de Precio",
      },
      { 
        id: "kioskos-autoservicio", 
        name: "Kioskos de Autoservicio" 
      },
      { 
        id: "cajon-dinero", 
        name: "Cajón de Dinero" 
      },
      { 
        id: "android-imin", 
        name: "Android iMin" 
      },
      {
        id: "all-in-one",
        name: "All in One",
        subcategories: [
          { 
            id: "android", 
            name: "Android" 
          },
          { 
            id: "windows", 
            name: "Windows" 
          },
          { 
            id: "touch", 
            name: "Touch" 
          },
        ],
      },
      { 
        id: "servidores", 
        name: "Servidores" 
      },
    ],
  },

  //Todas las categorias y subcategorias de impresoras
  {
    id: "impresoras",
    name: "Impresoras",
    subcategories: [
      { 
        id: "impresoras-bancarias", 
        name: "Impresoras Bancarias", 
        subcategories: [
          {
            id: "compuprint",
            name: "Compuprint",
          },
        ],
      },
      {
        id: "impresoras-termicas",
        name: "Impresoras Térmicas",
      },
      { 
        id: "impresoras-carnet", 
        name: "Impresoras de Carnet" 
      },
      { 
        id: "impresoras-codigo-barras", 
        name: "Impresoras de Código de Barras" 
      },
      { 
        id: "impresoras-industriales", 
        name: "Impresoras Industriales" 
      },
      { 
        id: "impresoras-portatiles", 
        name: "Impresoras Portátiles" 
      },
      { 
        id: "accesorios-impresoras", 
        name: "Accesorios para Impresoras" 
      },
    ],
  },



  //Todas las categorias y subcategorias de escaneres
  {
    id: "escaneres",
    name: "Escáneres",
    subcategories: [
      { 
        id: "escaneres-alambricos", 
        name: "Escáneres Alámbricos" 
      },
      { 
        id: "escaneres-inalambricos", 
        name: "Escáneres Inalámbricos" 
      },
      {
        id: "escaneres-omnidireccionales",
        name: "Escáneres Omnidireccionales",
      },
      {
        id: "escaneres-inalambricos-rugged",
        name: "Escáneres Inalámbricos Rugged",
      },
      { 
        id: "escaneres-balanzas", 
        name: "Escáneres Balanzas" 
      },
    ],
  },

  //Todas las caegorias y subcategorias de  computadoras
  {
    id: "computadoras",
    name: "Computadoras",
    subcategories: [
      {
        id: "escritorio",
        name: "Escritorio",
        subcategories: [
          { 
            id: "minipc", 
            name: "MiniPC" 
          }
        ],
      },
      {
        id: "moviles",
        name: "Móviles",
        subcategories: [
          {
            id: "handheld",
            name: "Handheld",
            subcategories: [
              { 
                id: "accesorios-handheld", 
                name: "Accesorios para Handheld" 
              },
            ],
          },
          { 
            id: "smartphone-rugged", 
            name: "Smartphone Rugged" 
          },
          {
            id: "tablets-robustas",
            name: "Tablets Robustas",
            subcategories: [
              { 
                id: "accesorios-tablets", 
                name: "Accesorios para Tablets" 
              },
            ],
          },
        ],
      },
    ],
  },

  //Todas las categorias y subactegorias de complementos
  {
    id: "complementos",
    name: "Complementos",
    subcategories: [
      { 
        id: "lectores-bandas", 
        name: "Lectores de Bandas" 
      },
      { 
        id: "contador-dinero", 
        name: "Contador de Dinero" 
      },
      { 
        id: "corporativos", 
        name: "Corporativos" 
      },
      { 
        id: "teclados", 
        name: "Teclados" 
      },
      { 
        id: "mouses", 
        name: "Mouses" 
      },{
        id: "audifonos",
        name: "Audífonos"
      },
      { 
        id: "mmcall", 
        name: "Mmcall" 
      },
    ],
  },

  //Todas las categorias y subcategoriasde sistemas
  {
    id: "sistemas",
    name: "Sistemas",
    subcategories: [
      {
        id: "sistemas-facturacion",
        name: "Sistemas de Facturación",
        subcategories: [
          { 
            id: "cizaro", 
            name: "Cizaro" 
          },
          {
            id: "a2",
            name: "A2",
            subcategories: [
              { 
                id: "hac", 
                name: "HAC" 

              },
              { 
                id: "pv", 
                name: "PV" 

              },
              { 
                id: "contabilidad", 
                name: "Contabilidad" 

              },
              { 
                id: "nomina", 
                name: "Nómina" 

              },
              { 
                id: "hotel", 
                name: "Hotel" 

              },
            ],
          },
        ],
      },
      { 
        id: "easysoft", 
        name: "EASYSOFT" 
      },
      {
        id: "kaspersky",
        name: "KASPERSKY"
      },
      {
        id: "apps-moviles",
        name: "Apps Móviles",
        subcategories: [
          { 
            id: "tecno-ventas",
             name: "Tecno Ventas" 
            },
          { id: "tecno-gestion", 
            name: "Tecno Gestión" 
          },
          { 
            id: "suite-mobile", 
            name: "Suite Mobile" 
          },
        ],
      },
      {
        id: "gestion-empresarial-mdm",
        name: "Gestión Empresarial MDM",
        subcategories: [
          { 
            id: "scalefusion", 
            name: "Scale Fusion" 
          }
        ],
      },
    ],
  },

  // Todas las categorias y subcategorias de Seguridad EAS
  {
    id: "seguridad-eas",
    name: "Seguridad EAS",
    subcategories:[
      {
        id: "antenas",
        name: "Antenas",
      },
      {
        id: "tags-etiquetas",
        name: "Tags & Etiquetas",
      },
      {
        id: "desactivadores",
        name: "Desactivadores",
      },
      {
        id: "accesorios-eas",
        name: "Accesorios EAS",
      },
    ],
  },

  //Todas las categorias y subcategorias de Balnazas
  {
    id: "balanzas",
    name: "Balanzas",
    subcategories: [
      { 
        id: "balanzas-marques", 
        name: "Balanzas Marques" 
      },
      { id: "balanza-t30", 
        name: "Balanza T-30" 
      },
    ],
  },

  //Todas las taegorias y subcategorias de suminutros 
  {
    id: "suministros",
    name: "Suministros",
    subcategories: [
      { 
        id: "papel-termico", 
        name: "Papel Térmico" 
      },
      { 
        id: "papel-quimico", 
        name: "Papel Químico" 
      },
      { 
        id: "papel-bond", 
        name: "Papel Bond" 
      },
      { 
        id: "etiquetas", 
        name: "Etiquetas" 
      },
      { 
        id: "ribbons", 
        name: "Ribbons" 
      },
    ],
  },

  //Todas las categorias y subcategorias de energia
  {
    id: "energia",
    name: "Energía",
    subcategories: [
      { 
        id: "eco-flow", 
        name: "Eco Flow" 
      },
      { 
        id: "ups-reguladores", 
        name: "UPS / Reguladores de Voltaje" 
      },
    ],
  },
];
