import type { Product } from "@/types";

function generateProductIdFromName(name: string): string {
  // Eliminamos caracteres especiales y convertimos a minúsculas
  return name.replace(/\s+/g, "-").toLowerCase();
}

export const products: Product[] = [



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
