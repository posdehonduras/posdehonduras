import type { Product } from "@/types";

function generateProductIdFromName(name: string): string {
  // Eliminamos caracteres especiales y convertimos a minúsculas
  return name.replace(/\s+/g, "-").toLowerCase();
}

export const products: Product[] = [
  //Impresoras termicas
  {
    id: generateProductIdFromName("3nStar | RPT006"),
    name: "3nStar | RPT006",
    description: [
      "Tecnología de impresión Térmica directa",
      "Resolución 203 ppp",
      "Velocidad de impresión: hasta 200 mm/s.",
      "Capaz de imprimir código QR y PDF417",
      "Dimensiones: 180mm (L) × 140mm (W) × 134.1mm (H)",
      "Peso: Neto 0.97Kg",
      "Máximo Ancho de impresión: 72mm",
      "Vida útil del cabezal: 150Km",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740841883/3nStar-RPT006_gqjok7.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740841883/3nStar-RPT006-_zjaxh7.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740841883/3nStar-RPT006--_vuzg8b.png",
    ],
    categories: ["impresoras", "impresoras-termicas"],
    videoUrl: "https://www.youtube.com/embed/ca8zoL2PcX8",
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740148569/ficha-3nStar-RPT006_pqfppd.pdf",
    price: " 2350",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
    warranty: {
      years: 3,
      description: "Garantía extendida por defectos de fabricación",
    },
  },





  {
    id: generateProductIdFromName("Star Micronics | BSC10"),
    name: "Star Micronics | BSC10",
    description: [
      "Tecnología de impresión Térmica directa",
      "Resolución 203 ppp",
      "Velocidad de impresión Hasta 102 mm/s",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740841883/Star-Micronics-BSC10_wbtkya.png",
    ],
    categories: ["impresoras", "impresoras-termicas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149360/ficha-Star-Micronics-BSC10_yqvhgh.pdf",
    price: "3000",
    brand: {
      name: "Star Micronics",
      logo: "/brands/starmicronics.png",
    },
    warranty: {
      years: 3,
      description: "Garantía extendida por defectos de fabricación",
    },
  },








  {
    id: generateProductIdFromName("Custom | P3L Térmica"),
    name: "Custom | P3L Térmica",
    description: [
      "Tecnología de impresión Térmica directa",
      "Resolución 203 ppp",
      "Velocidad de impresión de 250 mm/s",
      "Velocidad de impresión: 200mm/s",
      "Peso: 1 Kg",
      "Dimensiones: 145 mm (L) × 195 mm (W) × 150 mm (H)",
      "Formato de impresión Normal, altura y ancho de 1x a 8x, girado, subrayado, cursiva, negrita",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740841884/Custom-P3L-Termica_bd7yml.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740841883/Custom-P3L-Termica-_kcnxpm.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740841884/Custom-P3L-Termica--_gisqb4.png",
    ],
    categories: ["impresoras", "impresoras-termicas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149359/ficha-custom-P3L-termica_z9itdm.pdf",
    price: "3300.01",
    brand: {
      name: "",
      logo: "",
    },
  },







  {
    id: generateProductIdFromName("3nStar | RPT004"),
    name: "3nStar | RPT004",
    description: [
      "Tecnología de impresión Térmica directa",
      "Resolución 203 ppp",
      "Velocidad de impresión: 230 mm/s",
      "Peso neto: 0.89Kg",
      "Máximo ancho de impresión: 72 milímetros",
      "Vida útil del cabezal de impresión: 150Km",
      "Grosor del papel: 0,06 mm-0,08 mm",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740841883/3nStar-RPT004_ptdtv8.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740842433/3nStar-RPT004-_oquxnx.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740842433/3nStar-RPT004--_mhwkq2.png",
    ],
    categories: ["impresoras", "impresoras-termicas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149359/ficha-3nStar-RPT004_sgscz9.pdf",
    price: "2400",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },


  

  //Escaneres alambricos
  {
    id: generateProductIdFromName("Opticon | 3201Z"),
    name: "Opticon | 3201Z",
    description: [
      "Velocidad de escaneo Hasta 100 lecturas por segundo",
      "Peso 80 gramos",
      "Tipo de escaneo Láser de línea única",
      "Indicadores de operación: LED grande (rojo/verde/naranja) y zumbado",
      "Métodos de escaneo: Manual, auto-disparo y detección de soporte",
      "Conectividad: USB 1.1 y RS232C con conector DB9",
      "Durabilidad: Resiste caídas de 1.5 m sobre concreto y tiene protección IP42",
      "Fuente de luz: Diodo láser visible de 650 nm con velocidad de escaneo de hasta 100 escaneos/segundo",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740848198/Opticon-3201Z_cg1w6g.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740848204/Opticon-3201Z-_yxuxoo.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740848185/Opticon-3201Z--_djdvhd.png",
    ],
    categories: ["escaneres", "escaneres-alambricos"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149828/ficha-Opticon-3201Z_hfc1fk.pdf",
    price: "2200",
    brand: {
      name: "Opticom",
      logo: "/brands/opticon.png",
    },
  },
  {
    id: generateProductIdFromName("3nStar | SC100"),
    name: "3nStar | SC100",
    description: [
      "Tecnología de escaneo Sensor lineal 1D",
      "Interfaz USB estándar",
      "Distancia de lectura Hasta 20 cm",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740848206/3nStar-SC100_tdmzog.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740848166/3nStar-SC100--_jzqz1l.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740848171/3nStar-SC100-_dxm3g7.png",
    ],
    categories: ["escaneres", "escaneres-alambricos"],
    pdfUrl: "",
    price: "995",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech | MS836"),
    name: "Unitech | MS836",
    description: [
      "Tecnología de lectura Escaneo lineal (láser) 1D",
      "nterfaz USB",
      "Resistencia Caídas 1.5 metros",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740848198/Unitech-MS836_nta8kw.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740848196/Unitech-MS836-_umappd.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740848205/Unitech-MS836--_ktzhp0.png",
    ],
    categories: ["escaneres", "escaneres-alembricos"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149848/ficha-Unitech-MS836_ipeley.pdf",
    price: "1599.99",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("3nStar | SC405"),
    name: "3nStar | SC405",
    description: [
      "Tecnología de lectura Lineal, basada en láser",
      "Códigos admitidos Códigos de barras 1D estándar",
      "Interfaz USB",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740848179/3nStar-SC405_w0s24v.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740848165/3nStar-SC405-_sisr2n.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740848179/3nStar-SC405--_pznieu.png",
    ],
    categories: ["escaneres", "escaneres-alambricos"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName("3nStar | SCI150"),
    name: "3nStar | SCI150",
    description: [
      "2500 Pixeles tecnología de imagen",
      "Capacidad de lectura 1D y 2D",
      "Tecnología de escaneo Imager 2D",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741098369/3nStar-SCI150_mmp7mv.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741098369/3nStar-SCI150-_d21fbn.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741098370/3nStar-SCI150--_tqt7wd.png",
    ],
    categories: ["escaneres", "escaneres-alambricos"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150225/ficha-3nStar-SCI150_izficl.pdf",
    price: "1290",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },

  //Escaneres Inalambricos
  {
    id: generateProductIdFromName("3nStar | SC440"),
    name: "3nStar | SC440",
    description: [
      "Tecnología de lectura Imager 2D",
      "Códigos admitidos 1D y 2D",
      "Interfaz USB, RS-232, PS/2",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741098368/3nStar-SC440_e1yxou.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741098368/3nStar-SC440-_kiwor7.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741098369/3nStar-SC440--_q4jxng.png",
    ],
    categories: ["escaneres", "escaneres-inalambricos"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150220/ficha-3nStar-SC440_ffnwag.pdf",
    price: "$0",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName("Datalogic |  QBT2500"),
    name: "Datalogic |  QBT 2500",
    description: [
      "Tecnología de lectura Imager lineal para códigos 1D",
      "Interfaces USB, RS-232, PS/2",
      "Resistencia a caídas Hasta 1.5metros",
      "GARANTÍA 5 años",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704439/Datalogic-2500_jry8ew.png",
    ],
    categories: ["escaneres", "escaneres-inalambricos"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149799/ficha-Datalogic-2500_ndimme.pdf",
    price: "4800",
    brand: {
      name: "Datalogic",
      logo: "/brands/datalogic.png",
    },
  },
  {
    id: generateProductIdFromName("Opticon | 3301I"),
    name: "Opticon | 3301I",
    description: [
      "Tecnología de lectura Imager 2D",
      "Conexión USB",
      "Resistencia a caídas Hasta 1.5metros",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741098372/Opticon-3301I_n2drru.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741098372/Opticon-3301I-_hf3yns.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741098373/Opticon-3301I--_dfduqj.png",
    ],
    categories: ["escaneres", "escaneres-inalambricos"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149826/ficha-Opticon-3301I_fabtzp.pdf",
    price: "7500",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },

  {
    id: generateProductIdFromName("3nStar | SC402BT"),
    name: "3nStar | SC402BT",
    description: [
      "Tecnología de escaneo Imager 2D",
      "Capacidad de lectura 1D y 2D",
      "Interfaz Bluetooth y USB",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101527/3nStar-SC402BT_jk7cug.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101527/3nStar-SC402BT-_wzgfkh.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101527/3nStar-SC402BT--_gabk3s.png",
    ],
    categories: ["escaneres", "escaneres-inalambricos"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150219/ficha-3nStar-SC402BT_zeamcv.pdf",
    price: "2850",
    brand: {
      name: "enStar",
      logo: "/brands/3nstar.png",
    },
  },

  //Escaneres omnidireccionales
  {
    id: generateProductIdFromName("Opticon | M10"),
    name: "Opticon | M10",
    description: [
      "Captura códigos 1D y 2D",
      "Interfaz USB, RS-232",
      "Tecnología de lectura Imager 2D omnidireccional.",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101531/Opticon-M10_s4iap0.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101536/Opticon-M10-_xhk1om.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101537/Opticon-M10--_yallqx.png",
    ],
    categories: ["escaneres", "escaneres-omnidireccionales"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149828/ficha-Opticon-M10_pjsqfw.pdf",
    price: "4749.99",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },
  {
    id: generateProductIdFromName("Datalogic | 1500I"),
    name: "Datalogic | 1500I",
    description: [
      "Conectividad Bluetooth 4.0 y USB",
      "Conectividad USB, RS-232",
      "Tipo de escaneo 1D y 2D",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101530/Datalogic-1500I_gynd9b.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101530/Datalogic-1500I-_ih2ccd.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101530/Datalogic-1500I--_xsbsib.png",
    ],
    categories: ["escaneres", "escaneres-omnidireccionales"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150240/ficha-Datalogic-1500I_cecknb.pdf",
    price: "4250",
    brand: {
      name: "Datalogic",
      logo: "/brands/datalogic.png",
    },
  },



  {
    id: generateProductIdFromName("3nStar | SC506"),
    name: "3nStar | SC506",
    description: [
      "Conectividad USB y Bluetooth",
      "Compatibilidad Windows, MacOS y Android",
      "Resistencia Caídas desde 1.5 metros",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101528/3nStar-SC506_pw7gtw.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101528/3nStar-SC506-_qjdtuc.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101528/3nStar-SC506--_to36pe.png",
    ],
    categories: ["escaneres", "escaneres.omnidireccionales"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150222/ficha-3nStar-SC506_ykh8po.pdf",
    price: "$0",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },




  
  {
    id: generateProductIdFromName("Unitech | TS100"),
    name: "Unitech | TS100",
    description: [
      "Tecnología de lectura Imager 2D",
      "Códigos admitidos 1D y 2D",
      "Interfaz USB, RS-232, Ethernet",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101537/Unitech-TS100_jdl7mh.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101537/Unitech-TS100-_qrxozm.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101537/Unitech-TS100--_ngfmgb.png",
    ],
    categories: ["escaneres", "escaneres-omnidireccionales"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149850/ficha-Unitech-TS100_m2qlgy.pdf",
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Custom | SM600"),
    name: "Custom | SM600",
    description: [
      "Tecnología de escaneo Imager 2D",
      "Velocidad de lectura Alta precisión y respuesta rápida",
      "Conectividad USB",
      "GARANTÍA 4 años",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101529/Custom-SM600_jfgdta.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101529/Custom-SM600-_eicn0b.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101530/Custom-SM600--_uyox1u.png",
    ],
    categories: ["escaneres", "escaneres-omnidireccionales"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150237/ficha-Custom-SM600_quwbvq.pdf",
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },

  //Cajon de dinero
  {
    id: generateProductIdFromName("3nStar | CD326"),
    name: "3nStar | CD326",
    description: [
      "Caja electrónica",
      "Dimensiones (pulgadas) 3.9 (H) x 16.1 (W) x 16.5 (D)",
      "Dimensiones (mm) 100mm (H) x 410mm (W) x 420mm (D)",
      "Exterior fabricado en Acero",
      "5 compartimentos para billetes y 8 compartimentos para monedas",
      "Rodillos de poliuretano para un funcionamiento suave",
      "Cerradura de 3 Posiciones y 4 funciones Activación electrónica, asegurado abierto/cerrado, apertura manua",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101527/3nStar-CD326_bsawol.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101527/3nStar-CD326-_eb7zxq.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741101527/3nStar-CD326--_fp4q87.png",
    ],
    categories: ["punto-de-venta", "cajon-dinero"],
    price: "1360",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },

  //All in One
  {
    id: generateProductIdFromName("3nStar | PTE0120-8-240"),
    name: "3nStar | PTE0120-8-240",
    description: [
      "Disco duro 20 GB SSD",
      "Tamaño de pantalla 15 pulgadas",
      "Memoria RAM 4 GB DDR3",
      "Procesador Intel Celeron J6412 Quad Core 2.0GHz",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106063/3nStar-PTE0120_aeh7ra.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106063/3nStar-PTE0120-_u4s2bc.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106065/3nStar-PTE0120--_ffmige.png",
    ],
    categories: ["punto-de-venta", "all-in-one"], //Le falta una categoria
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150215/ficha-3nStar-PTE0120_szghuq.pdf",
    price: "17850",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName("Touch Dynamic | Pulse Ultra"),
    name: "Touch Dynamic | Pulse Ultra",
    description: [
      "Disco duro 128 GB SSD",
      "Tamaño de pantalla 15 pulgadas o 17 pulgadas, según configuración",
      "Memoria RAM 4 GB DDR4 (expandible hasta 32 GB)",
      "Procesador Intel Celeron J3455",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106075/Touch-Dynamic-Pulse-Ultra_kvgt0a.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106080/Touch-Dynamic-Pulse-Ultra-_jmxrax.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106081/Touch-Dynamic-Pulse-Ultra--_fo0vpd.png",
    ],
    categories: ["punto-de-venta", "all-in-one", "touch"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149837/ficha-Touch-Dynamic-Pulse-Ultra_j7ro9k.pdf",
    price: "$0",
    brand: {
      name: "Touch Dynamic",
      logo: "/brands/touchdynamic.png",
    },
  },
  {
    id: generateProductIdFromName("3nStar | PTE0211W-8-240"),
    name: "3nStar | PTE0211W-8-240",
    description: [
      "Disco duro 240 GB SSD",
      "Tamaño de pantalla 15 pulgadas",
      "Memoria RAM 8 GB",
      "Procesador Intel Core i5 11ava Generación ",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106065/3nStar-PTE0211_gcpls3.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106066/3nStar-PTE0211-_e672lc.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106066/3nStar-PTE0211--_oa9frl.png",
    ],
    categories: ["punto-de-venta", "all-in-one"], //Le falta una categoria
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150217/ficha-3nStar-PTE0211_mdri3n.pdf",
    price: "25000",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName("3nStar | PTE0205W-8-240"),
    name: "3nStar | PTE0205W-8-240",
    description: [
      "Disco duro 240 SSD",
      "Tamaño de pantalla 15.6 pulgadas Wide Screen",
      "Memoria RAM 8 GB",
      "Procesador Intel Core i5 2.6Ghz",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704432/3nStar-PTE0205W_r51fok.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704432/3nStar-PTE0205W-_kqzga6.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704433/3nStar-PTE0205W--_udlrx1.png",
    ],
    categories: ["punde-de-venta", "all-in-one"], //Le falta una categoria
    pdfUrl: "",
    price: "29250",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName("CUSTOM | Daytona I3"),
    name: "CUSTOM | Daytona I3",
    description: [
      "Disco duro 128 GB SSD (opcional hasta 1 TB)",
      "Tamaño de pantalla 15. pulgadas Full HD Touch Screen",
      "Memoria RAM 8 GB DDR4",
      "Procesador Intel ® , Core i3 8145UE, 4M de caché, hasta 3,90 GHz, TPM 2.0",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106067/CUSTOM-Daytona-I3_obtmcm.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106069/CUSTOM-Daytona-I3-_xzd9ue.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106070/CUSTOM-Daytona-I3--_qf6fhx.png",
    ],
    categories: ["punto-de-venta", "all-in-one"], //Le falta una categoria
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("Touch Dynamic | Nexus"),
    name: "Touch Dynamic | Nexus",
    description: [
      "Procesador MediaTek (GMS) o Intel® Celeron® J6412",
      "4 GB de memoria DDR4 de alta velocidad (Android) ",
      "8 GB de memoria DDR4 de alta velocidad (Windows)",
      "Disco duro 128 GB SSD (opcional hasta 1 TB)",
      "Tamaño de pantalla 15 pulgadas táctil",
      "Memoria RAM 4 GB DDR4 (expandible hasta 16 GB)",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106075/Touch-Dynamic-Nexus_sxzqmy.png",
      "",
      "",
    ],
    categories: ["punto-de-venta", "all-in-one", "touch", "android", "windows"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149835/ficha-Touch-Dynamic-Nexus_mbsrww.pdf",
    price: "$0",
    brand: {
      name: "Touch Dynamic",
      logo: "/brands/touchdynamic.png",
    },
  },
  {
    id: generateProductIdFromName("Meking | M3 POS Terminal"),
    name: "Meking | M3 POS Terminal",
    description: [
      "Disco duro 64 GB SSD (opcional hasta 256 GB SSD)",
      "Tamaño de pantalla 15.6 pulgadas",
      "Memoria RAM 4 GB DDR4 (expandible hasta 8 GB)",
      "Procesador Intel Celeron J4125 Quad-Core 2.0 GHz",
    ],
    images: ["", "", ""],
    categories: ["punto-de-venta", "all-in-one"], //Le faltan categorias
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("Touch Dynamic | Breeze Ultra"),
    name: "Touch Dynamic | Breeze Ultra",
    description: [
      "Disco duro: 128 GB SSD (opcional hasta 1 TB SSD).",
      "Tamaño de pantalla 15 pulgadas táctil",
      "Memoria RAM 4 GB DDR4 (expandible hasta 32 GB).",
      "Procesador: Intel Celeron J1900, Intel Core i3, i5 o i7 (dependiendo de la configuración)",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704445/Touch-Dynamic-Breeze-Ultra_ad5puc.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704445/Touch-Dynamic-Breeze-Ultra-_b4kxcf.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704445/Touch-Dynamic-Breeze-Ultra--_if2uei.png",
    ],
    categories: ["punto-de-venta", "all-in-one", "touch"], //Le faltan categorias
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149834/ficha-Touch-Dynamic-Breeze-Ultra_oy37sz.pdf",
    price: "$0",
    brand: {
      name: "Touch Dynamic",
      logo: "/brands/touchdynamic.png",
    },
  },
  {
    id: generateProductIdFromName("Touch Dynamic | Razor"),
    name: "Touch Dynamic | Razor",
    description: [
      "Disco duro 64 GB SSD (opcional hasta 1 TB SSD)",
      "Tamaño de pantalla: 15 pulgadas",
      "Memoria RAM 4 GB DDR3L (expandible hasta 16 GB)",
      "Procesador Intel Celeron J1900 Quad-Core",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704450/Touch-Dynamic-Razor_g4fpm5.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704450/Touch-Dynamic-Razor-_tgob0y.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704450/Touch-Dynamic-Razor--_mk2jwe.png",
    ],
    categories: ["punto-de-venta", "all-in-one", "touch"], //Le faltan categorias
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "TouchDynamic",
      logo: "/brands/touchdynamic.png",
    },
  },



  //All in One Segunda pantalla
  {
    id: generateProductIdFromName("3nStar | PTE0105-M10"),
    name: "3nStar | PTE0105-M10",
    description: [
      "Tamaño de pantalla 9.7 pulgadas",
      "Memoria RAM 4 GB (ampliable hasta 8 GB)",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704432/3nStar-PTE0105-M10_kzywgw.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704433/3nStar-PTE0105-M10--_gzti9i.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704432/3nStar-PTE0105-M10-_ycqkte.png",
    ],
    categories: ["punto-de-venta", "all-in-one", "touch"], //Le faltan categorias
    pdfUrl: "",
    price: "5890",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName("3nStar | PDL110U"),
    name: "3nStar | PDL110U",
    description: [
      "Pantalla Plana sin Bisel Brillante de 250 nits",
      "Tamaño de pantalla 9.7 pulgadas",
      "Disponible en interfaz USB o VGA",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106061/3nStar-PDL110U_acljsd.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106061/3nStar-PDL110U-_cqq2u3.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106062/3nStar-PDL110U--_wtluqc.png",
    ],
    categories: ["punto-de-venta", "all-in-one", "touch"], //Le faltan categorias
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150212/ficha-3nStar-PDL110U_xkqw3q.pdf",
    price: "6000",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName("CUSTOM | Pole Daytona"),
    name: "CUSTOM | Pole Daytona",
    description: [
      "Almacenamiento SSD SATA de 2,5¨, 128 GB",
      "Pantalla LCD Pantalla TFT de 15¨",
      "Resolución 1024x768",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704439/CUSTOM-Pole-Daytona_aihzad.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704439/CUSTOM-Pole-Daytona-_tlmqhc.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704439/CUSTOM-Pole-Daytona--_ptfpcv.png",
    ],
    categories: ["punto-de-venta", "all-in-one", "touch"],
    pdfUrl: "",
    price: "6395",
    brand: {
      name: "",
      logo: "",
    },
  },










  //Servidor T-150
  {
    id: generateProductIdFromName("DELL | T-150"),
    name: "DELL | T-150",
    description: [
      "Procesador Compatible con procesadores Intel Xeon E-2300",
      "Memoria (RAM) Soporta hasta 128 GB de RAM DDR4 ECC",
      "Almacenamiento Compatible con unidades HDD o SSD",
      "Conectividad Interfaces de red Gigabit Ethernet para una conexión rápida y estable",
      "Puertos USB Varias opciones, incluidos USB 2.0 y USB 3.0 para periféricos y almacenamiento externo",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106070/Servidor-T-150_vgd1rb.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106071/Servidor-T-150-_rsys39.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741106072/Servidor-T-150--_xobwtr.png",
    ],
    categories: ["punto-de-vente", "servidores"],
    pdfUrl: "",
    price: "40500",
    brand: {
      name: "Dell",
      logo: "/brands/dell.png",
    },
  },

  //Intel Nuc Mini PC
  {
    id: generateProductIdFromName("NUC | Core i3"),
    name: "NUC | Core i3",
    description: [
      "(6M Cache, hasta 4.10GHz)",
      "Controlador de Ethernet",
      "Inalámbrica: Wi-Fi",
      "Diseño Compacto Su tamaño reducido permite integrarlo fácilmente en escritorios, kioscos, sistemas POS y otros entornos con espacio limitado.",
    ],
    images: [""],
    categories: ["computadoras", "escritorio", "minipc"],
    pdfUrl: "",
    price: "13995.01",
    brand: {
      name: "Intel",
      logo: "/brands/intel.png",
    },
  },
  {
    id: generateProductIdFromName("NUC | Core i5"),
    name: "NUC | Core i5",
    description: [
      "Tipo de procesador Intel Core i5",
      "Tipo de memoria DDR4",
      "Procesador de frecuencias 3300 MHz",
      "Almacenamiento Personalizable Discos SSD y HDD",
      "Conectividad Incluye puertos HDMI, USB, Ethernet, Wi-Fi y Bluetooth",
    ],
    images: [""],
    categories: ["computadoras", "escritorio", "minipc"],
    pdfUrl: "",
    price: "18750",
    brand: {
      name: "Intel",
      logo: "/brands/intel.png",
    },
  },





  //Cherry complemntos
  {
    id: generateProductIdFromName("Cherry | KC-1000"),
    name: "Cherry | KC-1000",
    description: [
      "Conexión Plug & Play",
      "Teclas Silenciosas",
      "Diseño Compacto y Estilizad",
      "GARANTÍA 3 años",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122160/Cherry-KC-1000_swmrlp.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122162/Cherry-KC-1000-_vmfvn0.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122164/Cherry-KC-1000--_lx09wi.png",
    ],
    categories: ["complementos", "teclados"], //Le falta lo de cherry
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150258/ficha-KC-1000_xafafc.pdf",
    price: "520",
    brand: {
      name: "Cherry",
      logo: "/brands/cherry.png",
    },
  },
  {
    id: generateProductIdFromName("Cherry | G86-71 + Reader"),
    name: "Cherry | G86-71 + Reader",
    description: [
      "Diseño robusto y ergonómico",
      "Lector de tarjetas integrado",
      "Conexión USB",
      "GARANTÍA 3 años",
    ],
    images: ["", ""],
    categories: ["complementos", "teclados"], //Le falta si es industrial o cherry
    pdfUrl: "",
    price: "5969.99",
    brand: {
      name: "Cherry",
      logo: "/brands/cherry.png",
    },
  },
  {
    id: generateProductIdFromName("Cherry | JK 8500"),
    name: "Cherry | JK 8500",
    description: [
      "Teclas de alto rendimiento",
      "Diseño Ergonómico",
      "Conexión USB",
      "GARANTÍA 3 años",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122155/Cherry-JK-8500_zahbiv.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122158/Cherry-JK-8500-_dphsjc.png",
      "",
    ],
    categories: ["complementos", "teclados"], //Le falta lo de la marca
    pdfUrl: "",
    price: "1270",
    brand: {
      name: "Cherry",
      logo: "/brands/cherry.png",
    },
  },
  {
    id: generateProductIdFromName("Cherry | HC 2.2"),
    name: "Cherry | HC 2.2",
    description: [
      "Micrófono de alta calidad",
      "Control de volumen en línea",
      "Sonido Nítido y equilibrado",
      "Conexión USB",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122149/Cherry-HC-2.2_lldlhs.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122151/Cherry-HC-2.2-_oaqkoy.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122154/Cherry-HC-2.2--_qwxwyv.png",
    ],
    categories: ["complementos", "audifonos"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150251/ficha-HC_2.2_qkinoh.pdf",
    price: "$0",
    brand: {
      name: "Cherry",
      logo: "/brands/cherry.png",
    },
  },
  {
    id: generateProductIdFromName("Cherry | MC-1000"),
    name: "Cherry | MC-1000",
    description: [
      "Sensor óptico de 1000 DPI",
      "Conexión USB",
      "Bajo consumo de energía",
      "GARANTÍA 3 años",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122143/Cherry_-MC-1000_lkbtkl.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122146/Cherry_-MC-1000-_mnihn6.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122147/Cherry_-MC-1000--_fqemiv.png",
    ],
    categories: ["complementos", "mouses"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150260/ficha-MC-1000_lofjtt.pdf",
    price: "300",
    brand: {
      name: "Cherry",
      logo: "/brands/cherry.png",
    },
  },

  //Verificadores de precio
  {
    id: generateProductIdFromName("3nStar | K10-j6412"),
    name: "3nStar | K10-j6412",
    description: [
      "Memoria RAM 4 GB (ampliable hasta 16 GB)",
      "Disco duro SSD de 120 GB (ampliable hasta 1 TB)",
      "Sistema operativo Compatible con Windows y Linux",
      "Tipo de conexión Wi-Fi 802.11b/g/n, Ethernet 10/100/1000M RJ45, 2 puertos USB 2.0, 2 puertos USB 3.0, 1 HDMI 2.0",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122132/3nStar-K10-j6412_sgqhup.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122134/3nStar-K10-j6412-_eclquc.png",
      "",
    ],
    categories: ["punto-de-venta", "verificador-precio"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150208/ficha-3nStar-K10-j6412_voii7z.pdf",
    price: "14000",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName("OPTICON | CK-101"),
    name: "OPTICON | CK-101",
    description: [
      "Sistema operativo Android 7.X",
      "Tipo de conexión Ethernet, Wi-Fi, Bluetooth",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122196/OPTICON-CK-101_gck1j2.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122198/OPTICON-CK-101-_wpk5k5.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122200/OPTICON-CK-101--_tgdybq.png",
    ],
    categories: ["punto-de-venta", "verificador-precio"],
    pdfUrl: "",
    price: "23500",
    brand: {
      name: "opticon",
      logo: "/brands/opticon.png",
    },
  },
  {
    id: generateProductIdFromName("3nStar | K10-A11"),
    name: "3nStar | K10-A11",
    description: [
      "Memoria RAM 4 GB",
      "Disco duro 32 GB",
      "Sistema operativo Android 11.0",
      "Tipo de conexión Wi-Fi 802.11b/g/n, Bluetooth, Ethernet (POE)",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122126/3nStar-K10-A11-432_kffcze.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122127/3nStar-K10-A11-432-_admgmp.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122130/3nStar-K10-A11-432--_azhane.png",
    ],
    categories: ["punto-de-venta", "verificador-precio"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150207/ficha-3nStar-K10-A11-432_cpb3cs.pdf",
    price: "16500",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName("Opticon | CK-50"),
    name: "Opticon | CK-50",
    description: [
      "Memoria RAM 4 GB (ampliable hasta 8 GB)",
      "Disco duro SSD de 120 GB (ampliable hasta 1 TB)",
      "Sistema operativo Windows 10",
      "Tipo de conexión Ethernet, Wi-Fi, Bluetooth",
    ],
    images: [""],
    categories: ["punto-de-venta", "verificador-precio"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },

  //Kioskos de Autoservicio
  {
    id: generateProductIdFromName("POS- Tech | Personalizado"),
    name: "POS- Tech | Personalizado",
    description: [],
    images: [""],
    categories: ["punto-de-venta", "kioskos-autoservicio"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("Touch Dynamic | Edge"),
    name: "Touch Dynamic | Edge",
    description: [
      "Pantalla táctil",
      "Procesador Equipado con procesadores de última generación (Intel Core i3, i5, i7)",
      "Memoria RAM 4 GB y 8 GB de memoria",
      "Sistema operativo Compatible con Windows y Android",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122202/Touch-Dynamic-Edge_gslvvr.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122205/Touch-Dynamic-Edge-_rjmpbj.png",
      "",
    ],
    categories: ["punto-de-veta", "kioskos-autoservicio"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "Touch Dynamic",
      logo: "/brands/touchdynamic.png",
    },
  },
  {
    id: generateProductIdFromName("Imin | S1"),
    name: "Imin | S1",
    description: [
      "Pantalla Táctil Full HD",
      "Soporta Pagos sin contacto, escaneo e impresión de tickets",
      "Potente bocina 3W",
      "Sistema operativo Android 11.0 ",
      "Almacenamiento 64 GB de memoria interna (ROM)",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122182/Imin-S1_tvo92u.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122184/Imin-S1-_idi64q.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122186/Imin-S1--_dwcave.png",
    ],
    categories: ["punto-de-venta", "kioskos-autoservicio"],
    pdfUrl: "",
    price: "42000",
    brand: {
      name: "Imin",
      logo: "/brands/imin.png",
    },
  },
  {
    id: generateProductIdFromName("3nStar | K21-J6412"),
    name: "3nStar | K21-J6412",
    description: [
      "Procesador Intel Celeron J6412 de cuatro núcleos para un rendimiento eficiente.",
      "RAM expandible de 8 GB (hasta 16 GB) para una multitarea fluida.",
      "SSD de 240 GB (ampliable a 1 TB)",
      "Disco duro SSD de 240 GB (ampliable hasta 1 TB)",
      "Sistema operativo Compatible con Windows y Android",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122136/3nStar-K21_zdusjd.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122138/3nStar-K21-_aiepjc.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122142/3nStar-K21--_sf6gjm.png",
    ],
    categories: ["punto-de-venta", "kioskos-autoservicio"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150204/ficha-3nStar-_K21_uunjjk.pdf",
    price: "37000",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },

  //Android Imin
  {
    id: generateProductIdFromName("Imin | FALCON 1"),
    name: "Imin | FALCON 1",
    description: [
      "Impresora Integrada",
      "Procesador Intel Celeron o Intel Core i3",
      "Almacenamiento SSD de 128 GB a 256 GB",
      "Sistema operativo Android 11 Go",
      "Disco duro 16 GB o 32 GB",
      "Memoria RAM 2 GB o 4 GB ",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122171/Imin-Falcon_pk4gj8.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122173/Imin-Falcon-_kiqxum.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122178/Imin-Falcon-2-_nmnufq.png",
    ],
    categories: ["punto-de-venta", "android-imin"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149820/ficha-Imin-Falcon_anfqi1.pdf",
    price: "12600",
    brand: {
      name: "Imin",
      logo: "/brands/imin.png",
    },
  },
  {
    id: generateProductIdFromName("Imin | Falcon 2"),
    name: "Imin | Falcon 2",
    description: [
      "Impresora Integrada",
      "Tarjeta TF (hasta 1 TB) x 1",
      "Sistema operativo Android 13",
      "Disco duro 64 GB o 128 GB",
      "Memoria RAM 4 GB o 8 GB",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122175/Imin-Falcon-2_mcrdwd.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122178/Imin-Falcon-2-_nmnufq.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122181/Imin-Falcon-2--_fpatbu.png",
    ],
    categories: ["punto-de-venta", "android-imin"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149824/ficha-Imin-Falcon2_yzm0xz.pdf",
    price: "$0",
    brand: {
      name: "Imin",
      logo: "/brands/imin.png",
    },
  },
  {
    id: generateProductIdFromName("Imin | Swift 2Pro"),
    name: "Imin | Swift 2Pro",
    description: [
      "Impresora Integrada",
      "Conectividad Bluetooth y Wi-Fi",
      "Sistema operativo Android 13",
      "Disco duro 32 GB",
      "Memoria RAM 4 GB",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122188/Imin-Swift-2Pro_b2bx1z.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122191/Imin-Swift-2Pro-_beufz4.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122193/Imin-Swift-2Pro--_sekwtu.png",
    ],
    categories: ["punto-de-venta", "android-imin"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149828/ficha-Imin-Swift-2Pro_lqxhva.pdf",
    price: "$0",
    brand: {
      name: "Imin",
      logo: "/brands/imin.png",
    },
  },
  {
    id: generateProductIdFromName("Imin | Swan 1"),
    name: "Imin | Swan 1",
    description: [
      "Pantalla capacitiva 15” o 15.6”",
      "Procesador Intel Celeron o Intel Core i3",
      "Almacenamiento SSD de 128 GB a 256 GB",
      "Sistema operativo Android 11",
      "Disco duro 16 GB o 32 GB",
      "Memoria RAM 2 GB o 4 GB",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704443/Imin-Swan-1_eq2kwk.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704444/Imin-Swan-1-_eazt7l.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704444/Imin-Swan-1--_mzdipf.png",
    ],
    categories: ["punto-de-venta", "android-imin"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149825/ficha-Imin-Swan1_j2kfmh.pdf",
    price: "13250",
    brand: {
      name: "Imin",
      logo: "/brands/imin.png",
    },
  },
  {
    id: generateProductIdFromName("Imin | D4"),
    name: "Imin | D4",
    description: [
      "Impresora Integrada",
      "Procesador Intel Celeron o Intel",
      "Almacenamiento SSD de 128 GB o 256 GB",
      "Sistema operativo Android 11",
      "Disco duro 16 GB o 32 GB",
      "Memoria RAM 2 GB o 4 GB",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122167/Imin-D4_k4fwnk.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741122169/Imin-D4-_arzytx.png",
      "",
    ],
    categories: ["punto-de-venta", "android-imin"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149818/ficha-Imin-D4_lzwooe.pdf",
    price: "$0",
    brand: {
      name: "Imin",
      logo: "/brands/imin.png",
    },
  },

  //A2 Punto de Venta
  {
    id: generateProductIdFromName("A2"),
    name: "A2",
    description: [
      "Manejo de altos volúmenes de transacciones",
      "Manejo de turnos para cajeros",
      "Manejo de códigos únicos asociados",
      "Manejo de productos con seriales",
      "Manejo de lotes y vencimientos (medicinas)",
      "Manejo de tallas y colores (ropa y calzados)",
      "Posibilidad de manejar fotos, para los ítems del inventario y clientes",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741126635/a2_gyowcy.png",
    ],
    categories: ["sistemas", "sisetamas-facturacion", "a2"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150233/ficha-A2_jljesa.pdf",
    price: "$0",
    brand: {
      name: "A2",
      logo: "/brands/a2.png",
    },
  },

  //cizaro
  {
    id: generateProductIdFromName("Cizaro"),
    name: "Cizaro",
    description: [
      "Gestiona las ventas en tiempo real",
      "Acepta múltiples formas de pago",
      "Controla el inventario de productos",
      "Genera informes de ventas detallados",
      "Integración con dispositivos de hardware como impresoras de recibos y lectores de códigos de barras",
      "Control total sobre los productos en existencia",
      "Actualización automática de stock en tiempo rea",
      "Alertas para productos con bajo stock",
      "Herramientas para la gestión de productos en varias ubicaciones",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741126635/cizaro_xemelg.png",
    ],
    categories: ["sistemas", "sistemas-facturacion", "cizaro"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150238/ficha-cizaro_mcjgrp.pdf",
    price: "$0",
    brand: {
      name: "Cizaro",
      logo: "/brands/cizaro.png",
    },
  },

  //Easy Soft
  {
    id: generateProductIdFromName("EASYSOFT"),
    name: "EASYSOFT",
    description: [
      "Opción buscar producto (por nombre)",
      "Consultar precio (C.B)",
      "Aplicar descuento por % y $",
      "Seleccionar vendedor",
      "Consultar precio (nombre)",
      "Agregar o quitar clientes a una venta",
      "Eliminar productos a la venta",
      "Cobro en efectivo, tarjeta, crédito, mixto y transferencia",
      "Recargas electrónicas y pago de servicios",
      "Facturas globales",
      "Facturación",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741126637/easysoft_sntkxd.png",
    ],
    categories: ["sistemas", "easysoft"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },

  //Kaspersky
  {
    id: generateProductIdFromName("KASPERSKY"),
    name: "KASPERSKY",
    description: [
      "Sistema operativo Ventanas",
      "Formato CD-ROM",
      "Modelo KSOS-V5-10U",
      "Tipo Seguridad de la pequeña oficina V5",
      "Usuarios Un servidor 10 Clientes y 10 Móviles Gratis",
      "Sistema de funcionamiento Windows XP / Vista / 7 / 8 / 8 / 8.1 / 10",
      "Requisitos de hardware Servidor, Computadora, Móvil, Portáforo",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741126639/kaspersky_dcslrw.png",
    ],
    categories: ["sistemas", "kaspersky"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "Kaspersky",
      logo: "/brands/kaspersky.png",
    },
  },

  //Impresora Compuprint
  {
    id: generateProductIdFromName("Impresora Compuprint SP40 PLUSS"),
    name: "Impresora Compuprint SP40 PLUSS",
    description: [
      "Tipo de impresión Matricial de impacto de 24 agujas",
      "Resolución máxima Hasta 360 x 360 dpi, ideal para documentos detallados y gráficos básicos",
      "Interfaces estándar:",
      "Puerto USB",
      "Puerto paralelo (Centronics)",
      "Puerto serial (RS-232)",
      "Velocidad de impresión Hasta 660 caracteres por segundo (cps) en modo de alta velocidad (10 cpi)",
      "Longitud de la línea de impresión",
      "94 columnas a 10 cpi",
      "112 columnas a 12 cpi",
      "141 columnas a 15 cpi",
      "Copias 1 original + 6 copias",
      "Consumo de energía 4 5 W en funcionamiento. Menos de 3 W en modo de suspensión",
      "Nivel de ruido Menos de 54 dB(A)",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449963/Impresora-Compuprint-Sp40-Plus_n5afbj.png",
    ],
    categories: ["impresoras", "impresoras-bancarias", "compuprint"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149834/ficha-Sp40-Plus_up1lpj.pdf",
    price: "20500",
    brand: {
      name: "Compuprint",
      logo: "/brands/compuprint.png",
    },
  },

  //Lectores y contadores de dinero
  {
    id: generateProductIdFromName("Orion | Classic Lector de Cheques"),
    name: "Orion | Classic Lector de Cheques",
    description: [
      "Dimensiones: 180 x 120 x 250 (mm) A x L x D",
      "Velocidad de transporte: 560 mm (22o)/seg",
      "300 x 300 dpi o 200 dpi o 100 x 100 dpi",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449963/Orion-Classic-Lector-de-Cheques_d3wzsa.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449964/Orion-Classic-Lector-de-Cheques-_b0oyfo.png",
    ],
    categories: ["complementos", "contador-dinero"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150163/ficha-Orion-Classic-Lector-de-Cheques_compressed_jtdylu.pdf",
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("Unitech | MS246"),
    name: "Unitech | MS246",
    description: [
      "Lector de banda magnética",
      "Deslizar hasta 1 millón de veces.",
      "Fiable para más de 1.000.000 de toallitas de cartas",
      "Lectura hasta 3 vías de información",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449978/Unitech-MS246_y599sg.png",
    ],
    categories: ["complementos", "contador-dinero"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150276/ficha-Unitech-MS246_w4umgg.pdf",
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("3nStar | BC1005"),
    name: "3nStar | BC1005",
    description: [
      "Cuenta 1,000 billetes por minuto",
      "Detecta billetes falsos, a través de los sistemas Ultravioleta y magnético",
      "3 pantallas LCD (2 integradas y una externa).",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449954/3nStar-BC1005_vpezxa.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449955/3nStar-BC1005-_v6now6.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449954/3nStar-BC1005--_xzzm0w.png",
    ],
    categories: ["complementos", "contador-dinero"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150206/ficha-3NSTAR-BC1005_jx7vi4.pdf",
    price: "4500",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },

  //Impresoras de Carnet
  {
    id: generateProductIdFromName("IDP | Smart 31D Simple"),
    name: "IDP | Smart 31D Simple",
    description: [
      "Impresión Imprime en una cara de la tarjeta",
      "Conectividad USB",
      "Resolución 300 ppi",
      "GARANTÍA 3 años",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449957/IDP-Smart_31D_ochost.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449957/IDP-Smart_31D-_xiczxl.png",
    ],
    categories: ["impresoras", "impresoras-carnet"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150256/ficha-IDP-Smart-31D_vtcjiz.pdf",
    price: "$0",
    brand: {
      name: "IDP",
      logo: "/brands/idp.png",
    },
  },
  {
    id: generateProductIdFromName("IDP | Smart 31S"),
    name: "IDP | Smart 31S",
    description: [
      "Resolución de impresión 300 ppi",
      "Conectividad USB 2.0",
      "Impresión Impresión a una cara (opcional de doble cara)",
      "GARANTÍA 3 años",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449957/IDP-Smart_31S_dgkave.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449957/IDP-Smart_31S-_ofzscx.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449962/IDP-Smart_31S--_drbblx.png",
    ],
    categories: ["impresoras", "impresoras-carnet"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150253/ficha-IDP-Smart_31S_nhcvic.pdf",
    price: "$0",
    brand: {
      name: "IDP",
      logo: "/brands/idp.png",
    },
  },
  {
    id: generateProductIdFromName("IDP | Smart 51D"),
    name: "IDP | Smart 51D",
    description: [
      "Conectividad USB 2.0, opcionalmente Ethernet",
      "Resolución 300 ppi ",
      "Impresión Impresión a una cara (opcional de doble cara).",
      "GARANTÍA 3 años",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449962/IDP-Smart-51D_ybza8c.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449963/IDP-Smart-51D-_w54sif.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449962/IDP-Smart-51D--_kri9ds.png",
    ],
    categories: ["impresoras", "impresoras-carnet"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150254/ficha-IDP-Smart_51D_ww3yqf.pdf",
    price: "44999.99",
    brand: {
      name: "IDP",
      logo: "/brands/idp.png",
    },
  },
  {
    id: generateProductIdFromName("IDP | Smart Bit"),
    name: "IDP | Smart Bit",
    description: [
      "Tipo de destrucción Cinta de seguridad, tarjetas defectuosas, y productos no deseados",
      "Tamaño Compacta",
      "Método de destrucción Corta en pedazos pequeños ",
      "GARANTÍA 3 años",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449963/IDP-Smart-Bit_vs8fqj.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449963/IDP-Smart-Bit-_nnjt1d.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449963/IDP-Smart-Bit--_uaaz50.png",
    ],
    categories: ["impresoras", "impresoras-carnet"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149818/ficha-IDP-Smart_BIT_mxxhgl.pdf",
    price: "16,956.52",
    brand: {
      name: "IDP",
      logo: "/brands/idp.png",
    },
  },

  //Etiquetas Electronicas
  {
    id: generateProductIdFromName("Opticon | EE213 | IP54, 2.1"),
    name: "Opticon | EE213 | IP54, 2.1",
    description: [
      "Pantalla Tecnología e-Ink, con una excelente visibilidad",
      "Certificación IP54 (resistencia al polvo y agua)",
      "Conectividad Soporta tecnologías inalámbricas como Wi-Fi o Bluetooth para la actualización remota de datos",
      "Automatización de Procesos Elimina la necesidad de cambiar etiquetas manualmente, reduciendo errores y costos operativos",
      "Frecuencia de operación: 2.4 GHz (2405 - 2480 MHz)",
      "Protocolo IEEE 802.15.4",
      "Velocidad de transmisión 250 kbps",
    ],
    images: [""],
    categories: ["suministros", "etiquetas"],
    pdfUrl: "",
    price: "539",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },

  //Botones de servicio MMCALL
  {
    id: generateProductIdFromName("MM CALL"),
    name: "MM CALL",
    description: [
      "Indicadores Luces LED o sonidos de alerta",
      "Instalación flexible",
      "Alcance de comunicación Hasta 100 metros sin obstáculos, garantizando una cobertura adecuada en áreas amplias.",
      "Frecuencia de operación 433,92 MHz, compatible con sistemas de comunicación estándar en entornos comerciales.",
      "Tasa de transmisión 20 kbps, asegurando una comunicación eficiente y rápida",
      "Alimentación Batería de litio de 3 V (CR2032)",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704444/MM-CALL_s9gssm.png",
    ],
    categories: ["complementos", "mmcall"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },

  //Impresoras de codigos de barras
  {
    id: generateProductIdFromName("TSC | TE200"),
    name: "TSC | TE200",
    description: [
      "Uso Impresora de etiquetas de escritorio",
      "Ancho máximo de impresión 104 mm",
      "Puerto USB 2.0.",
      "GARANTÍA 2 años",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449974/TSC-TE200_g28iw2.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449974/TSC-TE200-_kkglxi.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449975/TSC-TE200--_lwkmdx.png",
    ],
    categories: ["impresoras", "impresoras-codigo-barras"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150275/ficha-TSC-TE200_xxiylp.pdf",
    price: "6250",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName("3nStar | LTT204"),
    name: "3nStar | LTT204",
    description: [
      "Resolución de impresión 203 dpi",
      "Puerto USB 2.0",
      "Ancho máximo de rollo 127 mm",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449955/3nStar-LTT204_uorvrw.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449955/3nStar-LTT204-_nswx4y.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449956/3nStar-LTT204--_mshyfk.png",
    ],
    categories: ["impresoras", "impresoras-codigo-barras"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150211/ficha-3nStar-LTT204_c0vrvz.pdf",
    price: "$0",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName("GODEX | GE 300"),
    name: "GODEX | GE 300",
    description: [
      "Resolución 300 dpi ",
      "Velocidad máxima Hasta 127 mm/s",
      "Ancho máximo de impresión 106 mm",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704440/GODEX-GE-300_ffaabc.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704443/GODEX-GE-300-_tbrhij.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704443/GODEX-GE-300--_noxpis.png",
    ],
    categories: ["impresoras", "impresoras-codigo-barras"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149815/ficha-GODEX-GE-300_boupg7.pdf",
    price: "$0",
    brand: {
      name: "Godex",
      logo: "/brands/godex.png",
    },
  },
  {
    id: generateProductIdFromName("3nStar | LDT 114"),
    name: "3nStar | LDT 114",
    description: [
      "Tecnología de impresión Térmica directa",
      "Resolución de impresión 203 ppp",
      "Interfaz USB 2.0, RS232",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449955/3nStar-LDT-114_loldev.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449955/3nStar-LDT-114-_eshxln.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449955/3nStar-LDT-114--_ijqn9b.png",
    ],
    categories: ["impresoras", "impresoras-codigo-barras"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150209/ficha-3nStar-LDT_114_cc0g8p.pdf",
    price: "3750",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName("TSC | TX210"),
    name: "TSC | TX210",
    description: [
      "Resolución 300 dpi",
      "Velocidad máxima Hasta 127 mm/s",
      "Ancho máximo de impresión 106 mm",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449975/TSC-TX210_gjliht.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449978/TSC-TX210--_gwciii.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449976/TSC-TX210-_hlhaju.png",
    ],
    categories: ["impresoras", "impresoras-codigo-brras"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149843/ficha-TSC-TX210_fujifj.pdf",
    price: "16800.01",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },

  //Impresoras Industriales
  {
    id: generateProductIdFromName("TSC | T8000"),
    name: "TSC | T8000",
    description: [
      "Uso Impresora de etiquetas indusrial",
      "600 dpi (opcional)",
      "Ancho de impresión 104 mm",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449972/TSC-T8000--_zpykp9.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449971/TSC-T8000-_ajyscw.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449970/TSC-T8000_ws4ha1.png",
    ],
    categories: ["impresoras", "impresoras-industriales"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149841/ficha-TSC-T8000_jdh4ur.pdf",
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName("TSC | MH241"),
    name: "TSC | MH241",
    description: [
      "Ancho máximo de impresión 104 mm",
      "Wi-Fi (802.11 a/b/g/n)",
      "LCD táctil a color de 4.3 pulgadas",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449968/TSC-MH241_a0jybd.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449968/TSC-MH241-_fj8i3d.png",
    ],
    categories: ["impresoras", "impresoras-industriales"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150271/ficha-TSC-MH241_lmn4bq.pdf",
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName("GoDEX | ZX420i"),
    name: "GoDEX | ZX420i",
    description: [
      "Uso Impresora industrial compacta",
      "Tecnología Transferencia térmica y térmica directa.",
      "Velocidad máxima Hasta 152 mm/s",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449956/GoDEX-ZX420i_gi37uc.png",
    ],
    categories: ["impresoras", "impresoras-industriales"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149817/ficha-GoDEX-ZX420i_i7ys8x.pdf",
    price: "$0",
    brand: {
      name: "Godex",
      logo: "/brands/godex.png",
    },
  },
  {
    id: generateProductIdFromName("TSC |  MB241T"),
    name: "TSC |  MB241T",
    description: [
      "Resolución de impresión 203 ppp",
      "Interfaz USB 2.0, RS232",
      "Tecnología de impresión Térmica directa y por transferencia térmica",
    ],
    images: [""],
    categories: ["impresoras", "impresoras-industriales"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150268/ficha-TSC-MB241_vbdmki.pdf",
    price: "23500",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },



  
  //Impresoras Portatiles
  {
    id: generateProductIdFromName("TSC | ALPHA 3 R"),
    name: "TSC | Alpha 3R",
    description: [
      "Clasificación Portátil",
      "Ancho papel 50,8 / 80 mm",
      "Tecnología Térmica directa ",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449968/TSC-Alpha-3_kwiruf.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449968/TSC-Alpha-3-_tzrkzc.png",
    ],
    categories: ["impresoras", "impresoras-portatiles"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150273/ficha-TSC-Alpha_3_fvjrfg.pdf",
    price: "8500",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName("TSC | RE310"),
    name: "TSC | RE310",
    description: [
      "Clasificación Portátil",
      "Ancho de impresión 72 mm",
      "Tecnología Térmica directa ",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449969/TSC-RE310_jflqnu.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449970/TSC-RE310-_eyvl8x.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449970/TSC-RE310--_yxao5s.png",
    ],
    categories: ["impresoras", "impresoras-portatiles"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150272/ficha-TSC-RE310_rhbax4.pdf",
    price: "7250",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName("3nStar | PPT305"),
    name: "3nStar | PPT305",
    description: [
      "Clasificación Portátil",
      "Ancho papel 50,8 / 80 mm",
      "Tecnología Térmica directa",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449956/3nStar-PPT305_vfcqqp.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449956/3nStar-PPT305-_hudcyt.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449956/3nStar-PPT305--_ut7bco.png",
    ],
    categories: ["impresoras", "impresoras-portatiles"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150214/ficha-3nStar-PPT305_m86tcz.pdf",
    price: "4150.01",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName("TSC | Alpha 30L"),
    name: "TSC | Alpha 30L",
    description: [
      "Clasificación Portátil",
      "Ancho papel 80 mm",
      "Tecnología Térmica directa ",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704450/TSC-Alpha-30L_qbqcew.png",
    ],
    categories: ["impresoras", "impresoras-portatiles"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150267/ficha-TSC-Alpha_30L_m8gmh5.pdf",
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName("TSC | TDM 30"),
    name: "TSC | TDM 30",
    description: [
      "Clasificación Portátil",
      "Ancho papel 80 mm",
      "Tecnología Térmica directa",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449973/TSC-TDM-30-_p9cjm6.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449973/TSC-TDM-30_detxie.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449974/TSC-TDM-30--_li5svz.png",
    ],
    categories: ["impresoras", "impresoras-portatiles"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150275/ficha-TSC-TDM30_eu5awo.pdf",
    price: "12750",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName("TSC | A40L"),
    name: "TSC | A40L",
    description: [
      "Clasificación Portátil",
      "Ancho de etiquetas de 118 mm",
      "Tecnología Térmica directa",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449964/TSC-A40L_htuhno.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449967/TSC-A40L-_im3ezg.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741449967/TSC-A40L--_mxa5vl.png",
    ],
    categories: ["impresoras", "impresoras-portatiles"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150285/fivha-TSC-A40L_rdjm5b.pdf",
    price: "24000.01",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },




  //Accesorios de impresoras
  {
    id: generateProductIdFromName("3nStar | PPT305 | Funda Impresora"),
    name: "3nStar | PPT305 | Funda Impresora",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624839/PPT30-Funda-impresora_ypucfg.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "630",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName(
      "TSC Alpha-30L | Adaptador de montaje en vehículo"
    ),
    name: "TSC Alpha-30L | Adaptador de montaje en vehículo",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624790/Adaptador-de-montaje_en_veh%C3%ADculo-_Alpha-30L_bjzoru.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName(
      "TSC Alpha-30L | Base de acoplamiento de 1 ranura"
    ),
    name: "TSC Alpha-30L | Base de acoplamiento de 1 ranura",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624793/Base-de-acoplamiento_de-1-ranura-_Alpha-30L_pz16vv.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName(
      "TSC Alpha-30L | Base de acoplamiento de 4 ranuras"
    ),
    name: "TSC Alpha-30L | Base de acoplamiento de 4 ranuras",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624794/Base-de-acoplamiento-de-4_ranuras-_Alpha-30L_txvfps.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName(
      "TSC Alpha-30L | Batería inteligente de iones de litio"
    ),
    name: "TSC Alpha-30L | Batería inteligente de iones de litio",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624801/Bateria-inteligente-de-iones-de_litio-_Alpha-30L_cuxb0p.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName(
      "TSC Alpha-30L | Cargador de batería de 1 ranura"
    ),
    name: "TSC Alpha-30L | Cargador de batería de 1 ranura",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624806/Cargador-de-bateria-de-1-ranura-_Alpha-30L_yd5c3m.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/stc.png",
    },
  },
  {
    id: generateProductIdFromName(
      "TSC Alpha-30R | Cargador de batería de 1 ranura"
    ),
    name: "TSC Alpha-30R | Cargador de batería de 1 ranura",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624805/Cargador-de-bateria-de-1-ranura-_Alpha-3R_mn4mni.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName(
      "TSC Alpha-30L | Cargador de batería de 4 ranuras (Alpha-30L)"
    ),
    name: "TSC Alpha-30L | Cargador de batería de 4 ranuras (Alpha-30L)",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624807/Cargador-de-bateria-de-4-ranuras-_Alpha-30L_lxhyl0.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName("TSC Alpha-30L | Correa para el hombro"),
    name: "TSC Alpha-30L | Correa para el hombro",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624813/Correa-para-el-hombro-_Alpha-30L_njvat3.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName("TSC Alpha-30L | Clip para cinturón"),
    name: "TSC Alpha-30L | Clip para cinturón",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624810/Clip-para-cintur%C3%B3n-_Alpha-30L_pffbv5.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName(
      "TSC Alpha-30L | Estuche protector con correa para el hombro"
    ),
    name: "TSC Alpha-30L | Estuche protector con correa para el hombro",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624822/Estuche-protector-con-correa-para-el-hombro-_Alpha-30L_wkpeh9.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName("TSC Alpha-30L | Kit sin revestimiento"),
    name: "TSC Alpha-30L | Kit sin revestimiento",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624834/Kit-sin-revestimiento-_Alpha-30L_jmjqa4.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName(
      "Soporte externo para plegado en acordeón con kit de expansión"
    ),
    name: "Soporte externo para plegado en acordeón con kit de expansión",
    description: ["Compatible con:", "Alpha-30L", "Alpha-40L"],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624844/Soporte-externo-para-soporte-plegado-en-acordeon-con-kit-de-expansion_aicdku.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName(
      "Soporte externo para plegado en acordeón con kit de montaje en vehículo de liberación rápida"
    ),
    name: "Soporte externo para plegado en acordeón con kit de montaje en vehículo de liberación rápida",
    description: ["Compatible con:", "Alpha-30L", "Alpha-40L"],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624845/Soporte-externo-para-soporte-plegado-en-acordeon-con-kit-de-montaje-en-vehiculo-de-liberacion-rapida_vzmfmq.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("Paquete de baterías cable a cable"),
    name: "Paquete de baterías cable a cable",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624838/Paquete-de-baterias-cable-a-cable_azib8s.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName(
      "Fuente de alimentación de 12-48V DC con eliminador de batería"
    ),
    name: "Fuente de alimentación de 12-48V DC con eliminador de batería",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624823/Fuente-de-alimentacion-de-12-48V-DC-con-eliminador-de-bateria_nuq5th.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("Cable USB"),
    name: "Cable USB",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624804/cable-usb_cafesl.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName(
      "TSC Alpha-30R | Cable convertidor de USB a RS-232"
    ),
    name: "TSC Alpha-30R | Cable convertidor de USB a RS-232",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624803/Cable-convertidor-de-USB-a-RS-232-_Alpha-3R_c4uyef.png",
    ],
    categories: ["impresoras", "accesorios-impresoras"],
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },














  //Handheld & Smartphone Rugged
  {
    id: generateProductIdFromName("Unitech | HT330"),
    name: "Unitech | HT330",
    description: [
      "TSistema Operativo Android 12 con certificación GMS",
      "RAM 3 GB",
      "Batería 5,200 mAh (extraíble).",
      "Conectividad 4G LTE, Wi-Fi , Bluetooth 5.0 y GPS",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455114/Unitech-HT330_nthsvx.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455117/Unitech-HT330-_iuugsn.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455119/Unitech-HT330--_ex7ehi.png",
    ],
    categories: ["computadoras", "moviles", "handheld"], //No si es smartphe o handheld
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149845/ficha-Unitech-HT330_gwf91d.pdf",
    price: "12610",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Opticon | H-35"),
    name: "Opticon | H-35",
    description: [
      "Sistema Operativo Android 11 RAM: 4 GB",
      "Batería 4,420 mAh (extraíble)",
      "Conectividad 4G LTE, Wi-Fi, Bluetooth 5.1, NFC, USB tipo C y GPS",
      "GARANTÍA 2 años",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455069/Opticon-H-35_fxo2lq.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455071/Opticon-H-35-_junnse.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455075/Opticon-H-35--_wzweub.png",
    ],
    categories: ["computadoras", "moviles", "handheld"], //No si es smartphe o handheld
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149828/ficha-Opticon-H-35_mcu2w8.pdf",
    price: "18400",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech | EA520"),
    name: "Unitech | EA520",
    description: [
      "Sistema Operativo Android 11 (actualizable a Android 13)",
      "RAM 4 GB",
      "Batería 4,100 mAh (extraíble)",
      "Conectividad 4G LTE, Wi-Fi, Bluetooth 5.0 y GPS",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455107/Unitech-EA520_fnutzc.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455109/Unitech-EA520-_s6itsc.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455112/Unitech-EA520--_hlgs81.png",
    ],
    categories: ["computadoras", "moviles", "handheld"], //No si es smartphe o handheld
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149844/ficha-Unitech-EA520_asjnjn.pdf",
    price: "11750",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech | HT730"),
    name: "Unitech | HT730",
    description: [
      "Sistema Operativo Android 10 con certificación GMS.",
      "RAM 4 GB",
      "Batería 6,700 mAh (extraíble)",
      "Conectividad 4G LTE, Wi-Fi, Bluetooth 5.1 y GPS",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455123/Unitech-HT730_kuxhat.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455124/Unitech-HT730-_kuj2ts.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455127/Unitech-HT730--_mu7hbc.png",
    ],
    categories: ["computadoras", "moviles", "handheld"], //No si es smartphe o handheld
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149846/ficha-Unitech-HT730_wgajxp.pdf",
    price: "33250",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Cyrus | CS45XA"),
    name: "Cyrus | CS45XA",
    description: [
      "Sistema Operativo Android 9.0 Pie",
      "RAM 4 GB",
      "Batería 4,500 mAh",
      "Conectividad 4G LTE, Wi-Fi , Bluetooth 5.0 y GPS",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455000/Cyrus-CS45_imzzuv.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455002/Cyrus-CS45-_xxq03l.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455004/Cyrus-CS45--_wmseec.png",
    ],
    categories: ["computadoras", "moviles", "handheld"], //No si es smartphe o handheld
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150245/ficha-Cyrus-CS45_vcry9p.pdf",
    price: "12350",
    brand: {
      name: "Cyrus",
      logo: "/brands/cyrus.png",
    },
  },
  {
    id: generateProductIdFromName("TSC BLUEBIRD | S10"),
    name: "TSC BLUEBIRD | S10",
    description: [
      "Sistema Operativo Android 14",
      "Memoria RAM 6 GB",
      "Batería 4,000 mAh",
      "Conectividad Wi-Fi, Bluetooth, USB Tipo C, NFC, 4G LTE, GPS/GNSS y RS232",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455099/TSC-BLUEBIRD-S10_rxq2k5.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455101/TSC-BLUEBIRD-S10-_ejb7gq.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455104/TSC-BLUEBIRD-S10--_w0h9oo.png",
    ],
    categories: ["computadoras", "moviles", "handheld"], //No si es smartphe o handheld
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149841/ficha-TSC-BLUEBIRDS10_s28sa1.pdf",
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName("TSC BLUEBIRD | EK430"),
    name: "TSC BLUEBIRD | EK430",
    description: [
      "Sistema Operativo Android 10 ",
      "Memoria RAM 4 GB",
      "Batería 6,800 mAh",
      "Conectividad Wi-Fi, Bluetooth, Ethernet USB, Serial (RS232), HDMI yNFC",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455091/TSC-BLUEBIRDEK430_ntpwqh.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455094/TSC-BLUEBIRDEK430-_bauv8x.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455097/TSC-BLUEBIRDEK430--_w0dmiq.png",
    ],
    categories: ["computadoras", "moviles", "handheld"], //No si es smartphe o handheld
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149840/ficha-TSC-BLUEBIRD-EK430_htiih6.pdf",
    price: "$0",
    brand: {
      name: "TSC",
      logo: "/brands/tsc.png",
    },
  },
  {
    id: generateProductIdFromName("Imin |  LARK 1 8-128"),
    name: "Imin |  LARK 1 8-128",
    description: [
      "Sistema Operativo Android 13",
      "Memoria RAM 4 GB",
      "Batería 5,000 mAh",
      "Conectividad Wi-Fi, Bluetooth, USB, NFC, 4G LTE, y Ethernet",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455007/Imin-Lark-1_juijcd.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455065/Imin-Lark-1-_noh3ri.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455067/Imin-Lark-1--_smc1ji.png",
    ],
    categories: ["computadoras", "moviles", "handheld"], //No si es smartphe o handheld
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149824/ficha-Imin-Lark1_bw9crc.pdf",
    price: "13250",
    brand: {
      name: "Imin",
      logo: "/brands/imin.png",
    },
  },



  //Accesorios de Handheld
  {
    id: generateProductIdFromName("Unitech | Funda"),
    name: "Unitech | Funda",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624847/Unitech-FUNDA_ptp5dm.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Opticon H-35 | Centro de carga"),
    name: "Opticon H-35 | Centro de carga",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624808/CENTRO-DE-CARGA_OPTICON_mgky7o.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },
  {
    id: generateProductIdFromName("Opticon H-35 | Rubber Boot"),
    name: "Opticon H-35 | Rubber Boot",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624827/H-35-Rubber-boot_ogipza.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },
  {
    id: generateProductIdFromName("Opticon | pistols grip H-35"),
    name: "Opticon | pistols grip H-35",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624825/H-35-Pistolgrip-_tnhvut.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },
  {
    id: generateProductIdFromName("Opticon H-35 | Hand Strap"),
    name: "Opticon H-35 | Hand Strap",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624830/HAND-STRAP-OPTICON-H35_gvpxdk.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },
  {
    id: generateProductIdFromName("Opticon H-35 | Bumper"),
    name: "Opticon H-35 | Bumper",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624828/H-35-Rubber-bumper_vjjko9.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "800",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },
  {
    id: generateProductIdFromName("Opticon H-35 | Single charging Cradle"),
    name: "Opticon H-35 | Single charging Cradle",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624837/Opticon-H-35-Single-CHARGIN_CRADLE_tbei2y.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },
  {
    id: generateProductIdFromName("Opticon H-35 | Multi Charging Cradle"),
    name: "Opticon H-35 | Multi Charging Cradle",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624824/H-35-Multicradle_fbeqab.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech HT730 | Cable USB 3.0"),
    name: "Unitech HT730 | Cable USB 3.0",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624848/Unitech-HT730-Cable-USB_3.0_cthlxg.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech HT730 | Handstrap"),
    name: "Unitech HT730 | Handstrap",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624831/HT730-Handstrap_u33cpo.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech HT730 | Bateria"),
    name: "Unitech HT730 | Bateria",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624800/BATERIA-HT730_jab5wq.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech-HT730-accesorio"),
    name: "Unitech HT730",
    description: [
      "Correa de mano Batería 1400-900061G HT730 Base de carga de ranura única con ranura para batería de repuesto, incluye fuente de alimentación",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624811/Correa-de-mano-Bateria_xihpa5.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech HT730"),
    name: "Unitech HT730",
    description: [
      "Base de cargadorde 4 ranuras, incluye fuente de alimentación",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624797/Base-de-carga_HT730-de-4-ranuras-incluye-fuente-de-alimentaci%C3%B3n_ex5js4.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech HT730 | Protector de pantalla"),
    name: "Unitech HT730 | Protector de pantalla",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624843/protector-de-pantalla-ht730_fns48v.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName(
      "Unitech HT730 | Empuñadura de pistola estándar"
    ),
    name: "Unitech HT730 | Empuñadura de pistola estándar",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624821/Empunadura-de-pistola-estandar-HT730_b3wllp.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech EA520 | Lápiz"),
    name: "Unitech EA520 | Lápiz",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624836/LAPIZ-EA520_hjry3k.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech EA520 | Correa para lápiz"),
    name: "Unitech EA520 | Correa para lápiz",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624811/correa_para_l%C3%A1piz_EA520_sxv59d.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech EA520 | Bateria"),
    name: "Unitech EA520 | Bateria",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624798/BATERIA-EA520_gplcvw.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName(
      "Unitech EA520 | Empuñadura de pistola estándar"
    ),
    name: "Unitech EA520 | Empuñadura de pistola estándar",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624820/Empunadura-de-pistola-est%C3%A1ndar-EA520_cqg3ho.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech EA520 | Base de carga de 1 ranura"),
    name: "Unitech EA520 | Base de carga de 1 ranura",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624796/Base-de-carga_EA520-de-1-ranura_dleaht.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech EA520 | Adaptador de corriente"),
    name: "Unitech EA520 | Adaptador de corriente",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624790/adaptador-de-correiente-EA520_p3bl2v.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech EA520 | Hand Strap"),
    name: "Unitech EA520 | Hand Strap",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624829/Hand-Strap-520_afoogk.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName(
      "Unitech AE520 | Protector de pantalla de cristal"
    ),
    name: "Unitech AE520 | Protector de pantalla de cristal",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624842/Protector-de-pantalla-de-cristal_EA520_ymkzk5.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech EA520 | Base USB de 1 ranura"),
    name: "Unitech EA520 | Base USB de 1 ranura",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624797/Base-USB-EA520_de-1-ranura_tb9k4h.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },
  {
    id: generateProductIdFromName("Unitech EA520 | Boot Case"),
    name: "Unitech EA520 | Boot Case",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624801/BOOT-CASE-EA520_ybcijs.png",
    ],
    categories: ["computadoras", "moviles", "handheld", "accesorios-handheld"],
    price: "$0",
    brand: {
      name: "Unitech",
      logo: "/brands/unitech.png",
    },
  },








  //Tablets Robustas
  {
    id: generateProductIdFromName("CUSTOM | T Ranger"),
    name: "CUSTOM | T Ranger",
    description: [
      "Disco Duro (almacenamiento) 64 GB, ampliable con tarjeta microSD.",
      "Tamaño de Pantalla 10.1 pulgadas, resolución 1920 x 1200 píxeles.",
      "Memoria RAM 4 GB.",
      "Procesador MediaTek MT8788 de 8 núcleos a 2.0 GHz.",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741454994/CUSTOM-T-Ranger_vap6rf.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741454995/CUSTOM-T-Ranger-_fe35qo.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741454998/CUSTOM-T-Ranger--_silm3p.png",
    ],
    categories: ["computadoras", "moviles", "tablets-robustas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149800/ficha-CUSTOM-T-Ranger_joyqq1.pdf",
    price: "25000",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("Touch Dynamic | Casino Tablet"),
    name: "Touch Dynamic | Casino Tablet",
    description: [
      "Disco Duro (almacenamiento) 32 GB eMMC. Expandible con tarjeta MicroSD hasta 128 GB",
      "Tamaño de Pantalla 10.1 pulgadas",
      "Memoria RAM 6 GB LPDDR4",
      "Procesador Qualcomm Snapdragon 450 de 1.8 GHz ",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455077/Touch-Dynamic-Casino-Tablet_czyx2h.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455079/Touch-Dynamic-Casino-Tablet-_mdiavv.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455081/Touch-Dynamic-Casino-Tablet--_ytrcm6.png",
    ],
    categories: ["computadoras", "moviles", "tablets-robustas"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "Touch Dynamic",
      logo: "/brands/touchdynamic.png",
    },
  },
  {
    id: generateProductIdFromName("Touch Dynamic | Quest VIII"),
    name: "Touch Dynamic | Quest VIII",
    description: [
      "Disco Duro (almacenamiento) 64 GB eMMC, ampliable con tarjeta microSD",
      "Tamaño de Pantalla 8 pulgadas, resolución 1920 x 1200 píxeles",
      "Memoria RAM 3 GB (Android) o 4 GB/8 GB (Windows)",
      "Procesador Android Qualcomm Snapdragon 450 hasta 1.8 GHz Windows Intel Elkhart Lake N6415 hasta 3.0 GHz",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704449/Touch-Dynamic-Quest-VIII_zhwtlm.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704450/Touch-Dynamic-Quest-VIII-_hlnepx.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704450/Touch-Dynamic-Quest-VIII--_fhdrcs.png",
    ],
    categories: ["computadoras", "moviles", "tablets-robustas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149838/ficha-Touch-Dynamic-Quest-VIII_osktyx.pdf",
    price: "7750",
    brand: {
      name: "Touch Dynamic",
      logo: "/brands/touchdynamic.png",
    },
  },
  {
    id: generateProductIdFromName("Touch Dynamic | Fusion"),
    name: "Touch Dynamic | Fusion",
    description: [
      "Disco Duro (almacenamiento) 128 GB SSD eMMC",
      "Tamaño de Pantalla 11.6 pulgadas",
      "Memoria RAM 8 GB DDR4",
      "Procesador Intel™ Elkhart Lake Celeron™ J6412 hasta 2.6 GHz",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455084/Touch-Dynamic-Fusion_wi5zfq.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455087/Touch-Dynamic-Fusion-_wyaxgz.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741455089/Touch-Dynamic-Fusion--_omcn2j.png",
    ],
    categories: ["computadoras", "moviles", "tablets-robustas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149834/ficha-Touch-Dynamic-Fusion_zfv53q.pdf",
    price: "$0",
    brand: {
      name: "Touch Dynamic",
      logo: "/brands/touchdynamic.png",
    },
  },

  //Accesorio de tablets
  {
    id: generateProductIdFromName("Chargin Cradle"),
    name: "Chargin Cradle",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624809/Chargin-Cradle_w4airb.png",
    ],
    categories: [
      "computadoras",
      "moviles",
      "tablets-robustas",
      "accesorios-tablets",
    ],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("Ingenico | RP457"),
    name: "Ingenico | RP457",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624833/Ingenico_-RP457_jmkc1o.png",
    ],
    categories: [
      "computadoras",
      "moviles",
      "tablets-robustas",
      "accesorios-tablets",
    ],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("5 Bay Charger"),
    name: "5 Bay Charger",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624789/5-BAY_CHARGER_imh7js.png",
    ],
    categories: [
      "computadoras",
      "moviles",
      "tablets-robustas",
      "accesorios-tablets",
    ],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("Q-HOLSTER 2"),
    name: "Q-HOLSTER 2",
    description: [],
    images: [""],
    categories: [
      "computadoras",
      "moviles",
      "tablets-robustas",
      "accesorios-tablets",
    ],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("5 Bay Tablet Charger"),
    name: "5 Bay Tablet Charger",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624791/5-BAY_TABLET_CHARGER-_sbn1w3.png",
    ],
    categories: [
      "computadoras",
      "moviles",
      "tablets-robustas",
      "accesorios-tablets",
    ],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("IDTECH AUGUSTA READER"),
    name: "IDTECH AUGUSTA READER",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624792/AUGUSTA_READER_rwk9sn.png",
    ],
    categories: [
      "computadoras",
      "moviles",
      "tablets-robustas",
      "accesorios-tablets",
    ],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("IDTECH MINISMART II"),
    name: "IDTECH MINISMART II",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624832/IDTECH-MINISMART-II_zqe277.png",
    ],
    categories: [
      "computadoras",
      "moviles",
      "tablets-robustas",
      "accesorios-tablets",
    ],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("Q-HOLSTER & 10B"),
    name: "Q-HOLSTER & 10B",
    description: [],
    images: [""],
    categories: [
      "computadoras",
      "moviles",
      "tablets-robustas",
      "accesorios-tablets",
    ],
    price: "1730.39",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("INGENICO LANE 2500"),
    name: "INGENICO LANE 2500",
    description: [],
    images: [""],
    categories: [
      "computadoras",
      "moviles",
      "tablets-robustas",
      "accesorios-tablets",
    ],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("IDTECH VP | 3300"),
    name: "IDTECH VP | 3300",
    description: [],
    images: [""],
    categories: [
      "computadoras",
      "moviles",
      "tablets-robustas",
      "accesorios-tablets",
    ],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("PREMIUM DOCK"),
    name: "PREMIUM DOCK",
    description: [],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624840/PREMIUM-DOCK-_o2th7f.png",
    ],
    categories: [
      "computadoras",
      "moviles",
      "tablets-robustas",
      "accesorios-tablets",
    ],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("Q-HOLSTER STRAP-01"),
    name: "Q-HOLSTER STRAP-01",
    description: [],
    images: [""],
    categories: [
      "computadoras",
      "moviles",
      "tablets-robustas",
      "accesorios-tablets",
    ],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },

  //ScaleFusion MDM
  {
    id: generateProductIdFromName("ScaleFusion | MDM"),
    name: "ScaleFusion | MDM",
    description: [
      "Gestiona diversos endpoints de un entorno empresarial, incluyendo smartphones y tabletas, para acelerar la productividad de los empleados.",
      "Mejora la visibilidad del negocio gestionando los sistemas de punto de venta basados en Android y la señalización digital de Android. ",
      "Transforma las operaciones de primera línea con dispositivos robustos y dispositivos montados en vehículos.",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704444/ScaleFusion-MDM_ovrnmm.png",
    ],
    categories: ["sistemas", "gestion-empresarial-mdm", "scalefusion"],
    price: "$0",
    brand: {
      name: "ScaleFusion",
      logo: "/brands/scalefusion.png",
    },
  },

  //Escaneres inalambricos rugged
  {
    id: generateProductIdFromName("Opticon | 3002"),
    name: "Opticon | 3002",
    description: [
      "Tecnología de escaneo Láser 1D",
      "Interfaz USB",
      "Velocidad de escaneo Hasta 200 lecturas por segundo.",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704445/Opticon-3002_myvuos.png",
    ],
    categories: ["escaneres", "escaneres-inalambricos-rugged"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },
  {
    id: generateProductIdFromName("3nStar | SC610BT"),
    name: "3nStar | SC610BT",
    description: [
      "Tecnología de lectura Imager 2D",
      "Códigos admitidos Códigos 1D y 2D",
      "Conectividad Bluetooth, USB (base receptora).",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622472/3nStar-SC610BT_qeyjhv.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622473/3nStar-SC610BT-_yijnny.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622473/3nStar-SC610BT--_mw3lxi.png",
    ],
    categories: ["escaneres", "escaneres-inalambricos-rugged"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150224/ficha-3nStar-SC610BT_bkppt2.pdf",
    price: "8750",
    brand: {
      name: "3nStar",
      logo: "/brands/3nstar.png",
    },
  },
  {
    id: generateProductIdFromName("Opticon | PX20"),
    name: "Opticon | PX20",
    description: [
      "Tecnología de escaneo Imager 2D",
      "Capacidad de lectura Códigos 1D y 2D",
      "Peso 250 gramos",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622488/Opticon-PX20_qxbpno.png",
    ],
    categories: ["escaneres", "escaneres-inalambricos-rugged"],
    pdfUrl: "",
    price: "7500",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },
  {
    id: generateProductIdFromName("Opticon | RS-3000"),
    name: "Opticon | RS-3000",
    description: [
      "Diseño Wearable Manos libres",
      "Tecnología de escaneo Imager 2D",
      "Interfaz Bluetooth y USB",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622488/Opticon-RS-3000_jljxnd.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622489/Opticon-RS-3000-_mrwnii.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622489/Opticon-RS-3000--_zire22.png",
    ],
    categories: ["escaneres", "escaneres-inalambricos-rugged"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149829/ficha-Opticon-RS-3000_aw48ig.pdf",
    price: "8750",
    brand: {
      name: "Opticon",
      logo: "/brands/opticon.png",
    },
  },

  //App Moviles
  {
    id: generateProductIdFromName("Suite Mobile Pos"),
    name: "Suite Mobile Pos",
    description: [],
    images: [""],
    categories: ["sistemas", "apps-moviles", "suite-mobile"],
    price: "$0",
    brand: {
      name: "Suite Mobile Pos",
      logo: "/brands/suitemobilepos.png",
    },
  },
  {
    id: generateProductIdFromName("Tecno Ventas Lite"),
    name: "Tecno Ventas Lite",
    description: [],
    images: [""],
    categories: ["sistemas", "apps-mviles", "tecno-ventas"],
    price: "$0",
    brand: {
      name: "Tecno Ventas Lite",
      logo: "/brands/tecnoventas.png",
    },
  },






  //Seguridad EAS Dahua --- Falta asiganarles una categoria
  {
    id: generateProductIdFromName("EAS-DH-C218-P"),
    name: "EAS-DH-C218-P",
    description: [
      "Tecnología Antena Acousto-Magnetic",
      "Frecuencia de detección 58 kHz",
      "Detección Distancia de EAS Etiquetas 2.0 x 2,4 m ",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622475/EAS-DH-C218-P_shoacw.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622482/EAS-DH-C218-P-_ei548j.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622483/EAS-DH-C218-P--_mqqtsy.png",
    ],
    categories: ["seguridad-eas", "antenas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149811/ficha-EAS-DH-C218-P_tafjdc.pdf",
    price: "19000",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("EAS-DH-C201-R"),
    name: "EAS-DH-C201-R",
    description: [
      "Frecuencia de detección 58 kilociclos",
      "Tecnología Antena acousto-magnetic",
      "Volumen de alarma Max 90 dB (Ajustable)",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622475/EAS-DH-C201-R_vuikd6.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622475/EAS-DH-C201-R-_ffmtmw.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622475/EAS-DH-C201-R--_dywqkv.png",
    ],
    categories: ["seguridad-eas", "antenas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149809/ficha-EAS-DH-C201-R_swwul1.pdf",
    price: "14000",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("EAS-DH-ISC-C218-P"),
    name: "EAS-DH-ISC-C218-P",
    description: [
      "Tecnología Antena Acousto-Magnetic",
      "Banda de Frecuencia de Detección 58 kHz",
      "Volumen de alarma Max 90 dB (Ajustable)",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622483/EAS-DH-ISC-C218-P_e4uhbg.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622483/EAS-DH-ISC-C218-P-_jttfe6.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622483/EAS-DH-ISC-C218-P--_ucj7ou.png",
    ],
    categories: ["seguridad-eas", "antenas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740156362/ficha-EAS-DH-ISC-C218-P_awadww.pdf",
    price: "10,217.39",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("EAS-DH-XX2-C218-P"),
    name: "EAS-DH-XX2-C218-P",
    description: [
      "Volumen de alarma Max 90 dB (Ajustable) ",
      "Software de apoyo DSS Pro, Configtool",
      "Protocolo de la Red de Comunicación HTTP, TCP/IP ",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622484/EAS-DH-XX2-C218-P_o1rw4o.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622484/EAS-DH-XX2-C218-P-_nqbzza.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622484/EAS-DH-XX2-C218-P--_yfaus9.png",
    ],
    categories: ["seguridad-eas", "antenas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740156187/ficha-EAS-DH-ISC-C218-P_wzyk8g.pdf",
    price: "18000",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("EAS-PRO"),
    name: "EAS-PRO",
    description: [
      "Rango de frecuencia 902 MHz a 928 MHz",
      "Protección IP66 Resistente al polvo y al agua",
      "Frecuencia de operación UHF RFID ",
    ],
    images: [""],
    categories: ["seguridad-eas", "antenas"],
    pdfUrl: "",
    price: "1299.99",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },

  //Tags y Label EAS
  {
    id: generateProductIdFromName("DHI-ISC-ETA1-R111"),
    name: "DHI-ISC-ETA1-R111",
    description: ["Etiqueta Blanda Am Caja de 20 Unidades (Caja Master)"],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622474/DHI-ISC-ETA1-R111_mij7fu.png",
    ],
    categories: ["seguridad-eas", "tags-etiquetas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149802/ficha-DHI-ISC-ETA1-R111_gayohe.pdf",
    price: "$0",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("DHI-ISC-ETA5-T010C"),
    name: "DHI-ISC-ETA5-T010C",
    description: ["Diseño exquisito y ligero, alto rendimiento de detección."],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622474/DHI-ISC-ETA5-T010C_ysb5nm.png",
    ],
    categories: ["seguridad-eas", "tags-etiquetas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149804/ficha-DHI-ISC-ETA5-T010C_iwnchi.pdf",
    price: "$0",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("DHI-ISC-ETA5-T904"),
    name: "DHI-ISC-ETA5-T904",
    description: ["Detencion de 1 Mts hacia la antena "],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622474/DHI-ISC-ETA5-T904_rekj5p.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622474/DHI-ISC-ETA5-T904-_qo8aet.png",
    ],
    categories: ["seguridad-eas", "tags-etiquetas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149806/ficha-DHI-ISC-ETA5-T904_rvgp9j.pdf",
    price: "$0",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("DHI-ISC-ETA5-B038-cinturon"),
    name: "DHI-ISC-ETA5-B038",
    description: ["Tag AM para Botella de Cinturon "],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622474/DHI-ISC-ETA5-B038-_bhltp2.png",
    ],
    categories: ["seguridad-eas", "tags-etiquetas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149803/ficha-DHI-ISC-ETA5-B038_ch8qaj.pdf",
    price: "$0",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("DHI-ISC-ETA5-B038"),
    name: "DHI-ISC-ETA5-B038",
    description: ["Tag AM para Tapa de Botella"],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622474/DHI-ISC-ETA5-B038_veznc1.png",
    ],
    categories: ["seguridad-eas", "tags-etiquetas"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("DHI-ISC-ETA5-T040"),
    name: "DHI-ISC-ETA5-T040",
    description: ["Adopte un diseño de cordón, fácil de usar."],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624819/DHI-ISC-ETA5-T040_kw3j4s.png",
    ],
    categories: ["seguridad-eas", "tags-etiquetas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149805/ficha-DHI-ISC-ETA5-T040_wcgmha.pdf",
    price: "$0",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },

  //Accesorios EAS
  {
    id: generateProductIdFromName("DHI-ISC-EDA-110"),
    name: "DHI-ISC-EDA-110",
    description: ["Desactivador electrico Am para Label "],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622474/DHI-ISC-EDA-110_fd9hug.png",
    ],
    categories: ["seguridad-eas", "desactivadores"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149801/ficha-DHI-ISC-EDA-110_nngrra.pdf",
    price: "$0",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("DHI-ISC-ED0001"),
    name: "DHI-ISC-ED0001",
    description: ["Separador de Tag"],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622473/DHI-ISC-ED0001_tnqfqp.png",
    ],
    categories: ["seguridad-eas", "accesorios-eas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149800/ficha-DHI-ISC-ED0001_jgbhpa.pdf",
    price: "$0",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("DHI-ISC-ETD5-T810"),
    name: "DHI-ISC-ETD5-T810",
    description: [
      "Tag Am de Leche diametro 110 mm",
      "Es separado por el DHI-ISC-ED-0919",
      "Latas de leche con diametro de 110 mm",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622475/DHI-ISC-ETD5-T810_qjh0a4.png",
    ],
    categories: ["seguridad-eas", "accesorios-eas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149807/ficha-DHI-ISC-ETD5-T810_vvdqpf.pdf",
    price: "$0",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("DHI-ISC-ED-0101"),
    name: "DHI-ISC-ED-0101",
    description: ["Pistola Desactivadora de Super Tags"],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622473/DHI-ISC-ED-0101_hwwol2.png",
    ],
    categories: ["seguridad-eas", "desactivadores"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("DHI-ISC-ESD-MHA25"),
    name: "DHI-ISC-ESD-MHA25",
    description: ["Ganchera para Blister "],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624817/DHI-ISC-ESD-MHA25_f8qyjy.png",
    ],
    categories: ["seguridad-eas", "accesorios-eas"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("DHI-ISC-ED-103"),
    name: "DHI-ISC-ED-103",
    description: ["Separador electrico de Super Tags Am y RF "],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624814/DHI-ISC-ED-103_h5gfrm.png",
    ],
    categories: ["seguridad-eas", "desactivadores"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("DHI-ISC-ESD-A330"),
    name: "DHI-ISC-ESD-A330",
    description: ["Llave Imanada para Ganchera"],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741624817/DHI-ISC-ESD-A330_pza755.png",
    ],
    categories: ["seguridad-eas", "accesorios-eas"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },
  {
    id: generateProductIdFromName("DHI-ISC-ED-0919"),
    name: "DHI-ISC-ED-0919",
    description: ["Super Separador D919"],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741622473/DHI-ISC-ED-0919_zhhzhw.png",
    ],
    categories: ["seguridad-eas", "desactivadores"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149800/ficha-DHI-ISC-ED-0919_y3gkri.pdf",
    price: "$0",
    brand: {
      name: "Dahua",
      logo: "/brands/dahua.png",
    },
  },

  //Eco Flow
  {
    id: generateProductIdFromName("Eco Flow River 2"),
    name: "Eco Flow River 2",
    description: [
      "Capacidad de batería 256 Wh",
      "Carga 0 % a 100 % en solo 1 hora",
      "Hasta 5 puertos para conectar dispositivos ",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740429466/River2_is4ucy.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740429467/River2-_u7nfih.png",
    ],
    categories: ["energia", "eco-flow"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740158148/ficha-eco-flow-River2_aq0fjl.pdf",
    price: "7250",
    brand: {
      name: "Eco Flow",
      logo: "/brands/ecoflow.png",
    },
  },
  {
    id: generateProductIdFromName("Eco Flow River 2 max"),
    name: "Eco Flow River 2 max",
    description: [
      "Capacidad de batería 768 Wh",
      "Carga 0 % al 100 % en solo 1 hora",
      "Hasta 7 puertos de salida",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740429467/River2Max-_qicewi.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740431898/River2Max-_ddhknl.png",
    ],
    categories: ["energia", "eco-flow"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740158155/ficha-eco-flow-River2-max_zosxff.pdf",
    price: "12500.01",
    brand: {
      name: "Eco Flow",
      logo: "/brands/ecoflow.png",
    },
  },
  {
    id: generateProductIdFromName("Eco Flow River 2 Pro"),
    name: "Eco Flow River 2 Pro",
    description: [
      "Capacidad de batería 768 Wh",
      "Carga 0 % a 100 % en solo 70 minutos",
      "Hasta 10 salidas para conectar varios dispositivos",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740429467/River2Pro_rilk9f.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740429467/River2Pro-_tnr7e6.png",
    ],
    categories: ["energia", "eco-flow"],
    price: "16600",
    brand: {
      name: "Eco Flow",
      logo: "/brands/ecoflow.png",
    },
  },
  {
    id: generateProductIdFromName("Eco Flow Delta"),
    name: "Eco Flow Delta",
    description: [
      "Carga 0 a 80 % en tan solo una hora",
      "Capacidad de la batería 1260 Wh",
      "Hasta 6 puertos de salida ",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740436215/Delta2_jdzbwu.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740436216/Delta2-_i5ugad.png",
    ],
    categories: ["energia", "eco-flow"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740158160/ficha-eco-flow-delta_tuw9or.pdf",
    price: "24500.00",
    brand: {
      name: "Eco Flow",
      logo: "/brands/ecoflow.png",
    },
  },
  {
    id: generateProductIdFromName("Eco Flow Delta 2 Max"),
    name: "Eco Flow Delta 2 Max",
    description: [
      "Capacidad de batería 2048 Wh",
      "Carga 0 % a 100 % en solo 1 hora",
      "Hasta 13 puertos de salida ",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740436216/Delta2Max_yhxgzr.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740436216/Delta2Max-_arg8wf.png",
    ],
    categories: ["energia", "eco-flow"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150249/ficha-Delta2max_lypbyg.pdf",
    price: "44999.99",
    brand: {
      name: "Eco Flow",
      logo: "/brands/ecoflow.png",
    },
  },
  {
    id: generateProductIdFromName("Eco Flow Delta Pro Ultra"),
    name: "Eco Flow Delta Pro Ultra",
    description: [
      "Capacidad de batería 3600 Wh",
      "Carga 0 % a 100 % en solo 2 horas",
      "Hasta 14 puertos de salida",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740436218/Delta2ProUltra_ku2klj.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740436219/Delta2ProUltra-_rzxiez.png",
    ],
    categories: ["energia", "eco-flow"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740149799/ficha-Delta-Pro-Ultra_uzxuem.pdf",
    price: "78000",
    brand: {
      name: "Eco Flow",
      logo: "/brands/ecoflow.png",
    },
  },

  //UPS/Reguladores de voltaje
  {
    id: generateProductIdFromName("Ups Regulador | FORZA 500VA"),
    name: "Ups Regulador | FORZA 500VA",
    description: [
      "MPN NT-511",
      "Capacidad 500VA/250W",
      "Topología Interactiva",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704450/Ups-Regulador-Forza-500_jxw1mv.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704450/Ups-Regulador-Forza-500-_kb1smf.png",
    ],
    categories: ["energia", "ups-reguladores"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150279/ficha-Ups-Regulador-Forza_jcw7eo.pdf",
    price: "1546.35",
    brand: {
      name: "Forza",
      logo: "/brands/forza.png",
    },
  },
  {
    id: generateProductIdFromName("Ups Regulador | Forza 750"),
    name: "Ups Regulador | Forza 750",
    description: [
      "MPN NT-751",
      "Capacidad 750VA/375W",
      "Topología Interactiva",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740437712/Ups-Regulador-Forza-500_i4hozv.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740437714/Ups-Regulador-Forza-500-_xwrnej.png",
    ],
    categories: ["energia", "ups-reguladores"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150286/forza-Ups-Regulador-Forza_qcrrrq.pdf",
    price: "2400",
    brand: {
      name: "Forza",
      logo: "/brands/forza.png",
    },
  },
  {
    id: generateProductIdFromName("Forza | Zion Pack Protector de voltaje"),
    name: "Forza | Zion Pack Protector de voltaje",
    description: [
      "MPN FVP-1201 3PK",
      "Capacidad 1800W",
      "Voltaje 120V",
      "Tipo de entrada NEMA 5-15P",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740437711/Forza-Zion-Pack-Protector-voltaje-_ciupss.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740437711/Forza-Zion-Pack-Protector-voltaje_xsowoy.png",
    ],
    categories: ["energia", "ups-reguladores"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150249/ficha-Forza-Zion-Pack-Protector_rnbdjp.pdf",
    price: "$0",
    brand: {
      name: "Forza",
      logo: "/brands/forza.png",
    },
  },
  {
    id: generateProductIdFromName("UPS | XTech 500"),
    name: "UPS | XTech 500",
    description: [
      "Capacidad 700VA/375W",
      "Tensión nominal 115V",
      "Número total de salidas 8 (NEMA 5-15R)",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704450/UPS-XTech-500_spodzo.png",
    ],
    categories: ["energia", "ups-reguladores"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150280/ficha-UPS-XTech500_cdold4.pdf",
    price: "1200",
    brand: {
      name: "XTech",
      logo: "/brands/xtech.png",
    },
  },
  {
    id: generateProductIdFromName("UPS | XTech 751"),
    name: "UPS | XTech 751",
    description: [
      "Capacidad 700VA/375W",
      "Tensión nominal 115V",
      "Número total de salidas 8 (NEMA 5-15R)",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740437714/UPS-XTech-751_azg5uj.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740437715/UPS-XTech-751-_xdgr8g.png",
    ],
    categories: ["energia", "ups-reguladores"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150282/ficha-UPS-Xtech751_nq23sl.pdf",
    price: "1350",
    brand: {
      name: "XTech",
      logo: "/brands/xtech.png",
    },
  },

  //Balanzas y escaneres Datalogic
  {
    id: generateProductIdFromName("Datalogic | 9300I"),
    name: "Datalogic | 9300I",
    description: [
      "Tecnología Imager omnidireccional.",
      "Láser y captura de imágenes Lee códigos de barras 1D y 2D desde cualquier ángulo.",
      "Capacidad de pesaje Disponible en versiones de hasta 15 kg o más, dependiendo de la configuración.",
      "Tecnología Imager omnidireccional.",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704439/Datalogic-9300I_w3atmy.png",
    ],
    categories: ["escaneres", "escaneres-balanzas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150242/ficha-Datalogic-9300I_pr5smb.pdf",
    price: "0",
    brand: {
      name: "Datalogic",
      logo: "/brands/datalogic.png",
    },
  },
  {
    id: generateProductIdFromName("Datalogic | 9800I"),
    name: "Datalogic | 9800I",
    description: [
      "Tipo de escaneo Omnidireccional 1D/2D",
      "Interfaz USB, RS232, PS/2",
      "Resolución de escaneo 0.125 mm",
      "Velocidad de escaneo 500 lecturas por segundo",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704440/Datalogic-9800I_y3hztv.png",
    ],
    categories: ["escaneres", "escaneres-balanzas"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150244/ficha-Datalogic-9800I_zauax2.pdf",
    price: "$0",
    brand: {
      name: "Datalogic",
      logo: "/brands/datalogic.png",
    },
  },

  //Balanzas Marques
  {
    id: generateProductIdFromName("BM5 Junior Plana"),
    name: "BM5 Junior Plana",
    description: [
      "Capacidad de peso Rango comúnmente entre 1 kg a 15 kg",
      "Puertos USB o RS-232 para conexión con impresoras de recibos o sistemas POS",
      "Display LCD grande con dígitos bien definidos, lo que facilita la lectura del peso",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704438/BM5-Junior-Plana_tculub.png",
    ],
    categories: ["balanzas", "balanzas-marques"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150231/ficha-BM5-Junior-Plana_dzudru.pdf",
    price: "43500",
    brand: {
      name: "Marques",
      logo: "/brands/marques.png",
    },
  },
  {
    id: generateProductIdFromName("Balanzas BM5 ARM Doble Cuerpo Label"),
    name: "Balanzas BM5 ARM Doble Cuerpo Label",
    description: [
      "Lector de tarjetas RFID",
      "Batería de litio externa",
      "ETPOS - Módulo de etiquetado",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704433/Balanza-BM5-Junior-Doble-Cuerpo-Label_vt2t2k.png",
    ],
    categories: ["balanzas", "balanzas-marques"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "Marques",
      logo: "/brands/marques.png",
    },
  },
  {
    id: generateProductIdFromName("BM5 ARM Colgante"),
    name: "BM5 ARM Colgante",
    description: [
      "Tamaño estándar De 15 pulgadas con resolución Full HD",
      "Sistema operativo Compatible con Android  o Linux",
      "Opciones de Wi-Fi y Bluetooth Para integrarse con dispositivos móviles o periféricos inalámbricos",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704434/BM5-ARM-Colgante_ovkqha.png",
    ],
    categories: ["balanzas", "balanzas-marques"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150228/ficha-BM5-ARM-Colgante_g35qan.pdf",
    price: "80994.99",
    brand: {
      name: "Marques",
      logo: "/brands/marques.png",
    },
  },
  {
    id: generateProductIdFromName("BM5 Junior Tower Label"),
    name: "BM5 Junior Tower Label",
    description: [
      "Lector de tarjetas RFID",
      "Batería de litio externa",
      "ETPOS - Módulo de etiquetado",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704439/BM5-Junior-Tower-Label_ozcrs8.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704438/BM5-Junior-Tower-Label-_cdlrqe.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704439/BM5-Junior-Tower-Label--_qbbm0o.png",
    ],
    categories: ["balanzas", "balanzas-marques"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150233/ficha-BM5-Junior-Tower-Label_q8vduv.pdf",
    price: "$0",
    brand: {
      name: "Marques",
      logo: "/brands/marques.png",
    },
  },
  {
    id: generateProductIdFromName("Balanza BM5 Junior Doble Cuerpo Label"),
    name: "Balanza BM5 Junior Doble Cuerpo Label",
    description: [
      "Conexiones Equipado con puertos RS232 o USB",
      "Precisión Alta resolución con precisión de 1 g",
      "Pantalla LED",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704433/Balanza-BM5-Junior-Doble-Cuerpo-Label_vt2t2k.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704434/Balanza-BM5-Junior-Doble-Cuerpo-Label-_dbty24.png",
    ],
    categories: ["balanzas", "balanzas-marques"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "Marques",
      logo: "/brands/marques.png",
    },
  },
  {
    id: generateProductIdFromName("BM5 ARM DC 3 Label"),
    name: "BM5 ARM DC 3 Label",
    description: [
      "Escáner 2D",
      "Lector de tarjetas RFID",
      "Batería de litio externa",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704434/BM5-ARM-DC-3-Label_i8lvr2.png",
    ],
    categories: ["balanzas", "balanzas-marques"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150230/ficha-BM5-ARM-DC3-Label_wv524d.pdf",
    price: "$0",
    brand: {
      name: "Marques",
      logo: "/brands/marques.png",
    },
  },
  {
    id: generateProductIdFromName("BM5 ARM Colgante 3 Label"),
    name: "BM5 ARM Colgante 3 Label",
    description: [
      "Diseño Colgante",
      "Pantalla LCD o LED con retroiluminación",
      "Capacidad de Pesaje 30 kg",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704434/BM5-ARM-Colgante-3-Label_nr5hin.png",
    ],
    categories: ["balanzas", "balanzas-marques"],
    pdfUrl: "",
    price: "$0",
    brand: {
      name: "Marques",
      logo: "/brands/marques.png",
    },
  },

  //Balanza T-30
  {
    id: generateProductIdFromName("Star micronics | mG-T 30"),
    name: "Star micronics | mG-T 30",
    description: [
      "Rango máximo 30 kg",
      "Precisión Incrementos de 5 g (dependiendo del rango)",
      "Pantalla Pantalla LCD de alto contraste para una lectura fácil. Indicadores separados para el operador y el cliente",
      "Conectividad USB RS232 (Serial)",
      "Energía Alimentación a través de un adaptador de corriente o mediante conexión USB para una integración sencilla con sistemas POS.",
      "Software y Controladores Incluye software de configuración y controladores compatibles con Windows, macOS y algunos sistemas Linux",
    ],
    images: [
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704445/Star-micronics-mG-T-30_pdrcjl.png",
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1741704445/Star-micronics-mG-T-30-_bl097d.png",
    ],
    categories: ["balanzas", "balanza-t30"],
    pdfUrl:
      "https://res.cloudinary.com/ddrl7h6xt/image/upload/v1740150263/ficha-Star-micronics-mG-T_30_lfitpj.pdf",
    price: "$0",
    brand: {
      name: "Star Micronics",
      logo: "/brands/starmicronics.png",
    },
  },

  //Suministros
  {
    id: generateProductIdFromName("Rollos papel térmico"),
    name: "Rollos papel térmico",
    description: [],
    images: [""],
    categories: ["suministros", "papel-termico"],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("Etiquetas adhesivas"),
    name: "Etiquetas adhesivas",
    description: [],
    images: [""],
    categories: ["suministros", "etiquetas"],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("Ribbon"),
    name: "Ribbon",
    description: [],
    images: [""],
    categories: ["suministros", "ribbons"],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
  {
    id: generateProductIdFromName("Cintas de impresoras"),
    name: "Cintas de impresoras",
    description: [],
    images: [""],
    categories: ["suministros"],
    price: "$0",
    brand: {
      name: "",
      logo: "",
    },
  },
];
