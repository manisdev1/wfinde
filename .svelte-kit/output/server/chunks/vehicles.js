const vehicles = [
  {
    id: 100,
    title: "Adria Twin 640 SGX",
    type: "Camper",
    typeId: 1,
    location: "Girona - Viladamat",
    zone: "Girona - Viladamat",
    seats: 4,
    beds: 4,
    dailyPrice: 140,
    images: [
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_58_1782025686_6a378dd656c8f.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_58_1782025686_6a378dd6c3294.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_58_1782025687_6a378dd73ed7f.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_58_1782025687_6a378dd778048.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_58_1782025687_6a378dd7e712a.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_58_1782025688_6a378dd84dd49.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_58_1782025688_6a378dd8a0252.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_58_1782025689_6a378dd92ea10.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_58_1782025690_6a378dda795c0.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_58_1782025690_6a378ddad5acf.webp"
    ],
    description: `Te presentamos nuestra nueva Adria Twin 640 SGX con cambio automático para hasta 4 personas.

Una autocaravana premium pensada para viajeros activos, familias (Isofix para hasta 2 niños), ciclistas y amantes de la aventura que buscan espacio, autonomía y máximo confort. Su innovador diseño con cama elevable y su enorme garaje interior la convierten en una de las campers más versátiles de su categoría.

Perfecta para viajar con bicicletas, equipamiento deportivo o incluso con un perro grande, sin renunciar a la comodidad de una auténtica camper de alto nivel.`,
    conditions: {
      minAge: 25,
      licenseYears: 2,
      deposit: 900,
      insuranceExcess: 900,
      mileage: "Limitado a 200 km/día (0.30 €/km adicional)",
      roadAssistance: true
    },
    equipment: {
      interior: [
        "Cocina Equipada",
        "Menaje Completo",
        "Baño WC",
        "Ducha Interior",
        "Agua Caliente",
        "Calefacción Estacionaria",
        "Depósitos Agua",
        "Almacenamiento Amplio"
      ],
      exterior: [
        "Toldo Lateral",
        "Mesa y Sillas Camping",
        "Cable Corriente 220V",
        "Manguera Agua",
        "Calzos Niveladores",
        "Panel Solar",
        "Portabicicletas"
      ],
      included: [
        "Ropa de Cama",
        "Toallas",
        "Kit Limpieza Básico",
        "Bombona(s) de Gas",
        "Manual y Asistencia"
      ]
    }
  },
  {
    id: 98,
    title: "Autocaravana grande Perfilada en Zaragoza",
    type: "Perfilada",
    typeId: 2,
    location: "Zaragoza",
    zone: "Zaragoza",
    seats: 6,
    beds: 6,
    dailyPrice: 195,
    images: [
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763629_69e742ed9a0dc.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763629_69e742edbdf58.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763629_69e742edd4078.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763629_69e742edea6c6.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763630_69e742ee11037.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763630_69e742ee1d059.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763630_69e742ee30b12.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763630_69e742ee4534b.webp"
    ],
    description: `Autocaravana de grandes dimensiones perfecta para grupos y familias numerosas. Amplio salón, distribución inteligente con camas gemelas convertibles y cama basculante en techo. Totalmente equipada para disfrutar de las mejores rutas por Aragón y Pirineos.`,
    conditions: {
      minAge: 25,
      licenseYears: 2,
      deposit: 900,
      insuranceExcess: 900,
      mileage: "Limitado a 250 km/día",
      roadAssistance: true
    },
    equipment: {
      interior: ["Cocina 3 fuegos", "Nevera grande 140L", "Baño con ducha separada", "Agua Caliente", "Calefacción Truma"],
      exterior: ["Toldo Thule", "Mesa y 4 sillas", "Portabicis 4 bicis", "Placa solar 150W"],
      included: ["Kit de cocina completo", "Ropa de cama opcional", "Seguro a todo riesgo"]
    }
  },
  {
    id: 97,
    title: "Autocaravana grande Perfilada en Barcelona",
    type: "Perfilada",
    typeId: 2,
    location: "Barcelona",
    zone: "Barcelona",
    seats: 6,
    beds: 6,
    dailyPrice: 195,
    images: [
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763629_69e742ed9a0dc.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763629_69e742edbdf58.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763629_69e742edd4078.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763629_69e742edea6c6.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763630_69e742ee11037.webp"
    ],
    description: `Disfruta del caravaning desde Barcelona con este vehículo de última generación. Alta autonomía, motor de 160cv y máximo confort para largas travesías tanto en costa como en montaña.`,
    conditions: {
      minAge: 25,
      licenseYears: 2,
      deposit: 900,
      insuranceExcess: 900,
      mileage: "Limitado a 250 km/día",
      roadAssistance: true
    },
    equipment: {
      interior: ["Cocina completa", "Nevera automática", "Baño con ducha independiente", "Calefacción estacionaria"],
      exterior: ["Toldo exterior", "Mesa de picnic y sillas", "Portabicis", "Cámara trasera"],
      included: ["Manguera de llenado", "Cable 220V", "Líquidos químicos WC"]
    }
  },
  {
    id: 96,
    title: "Autocaravana grande Perfilada en Lleida",
    type: "Perfilada",
    typeId: 2,
    location: "Lleida",
    zone: "Lleida",
    seats: 6,
    beds: 6,
    dailyPrice: 195,
    images: [
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763629_69e742ed9a0dc.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763629_69e742edbdf58.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763629_69e742edd4078.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763629_69e742edea6c6.webp"
    ],
    description: `Punto de partida estratégico hacia los Pirineos y la Vall d'Aran. Vehículo muy cuidado con motor potente y bajo consumo, dotado de todos los extras de seguridad y habitabilidad.`,
    conditions: {
      minAge: 25,
      licenseYears: 2,
      deposit: 900,
      insuranceExcess: 900,
      mileage: "Limitado a 200 km/día",
      roadAssistance: true
    },
    equipment: {
      interior: ["Cocina de tres fuegos", "Fregadero inox", "Baño completo", "Calefacción y agua caliente"],
      exterior: ["Toldo de 4m", "Luz exterior LED", "Set de camping"],
      included: ["Kit de inicio", "Seguro todo riesgo", "Asistencia 24h"]
    }
  },
  {
    id: 95,
    title: "Capuchina Familiar Confort en Madrid",
    type: "Capuchina",
    typeId: 3,
    location: "Madrid",
    zone: "Madrid",
    seats: 6,
    beds: 6,
    dailyPrice: 165,
    images: [
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763629_69e742ed9a0dc.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_58_1782025686_6a378dd656c8f.webp"
    ],
    description: `La clásica y espaciosa autocaravana capuchina, ideal para escapadas familiares desde Madrid hacia cualquier rincón de la península. Amplitud superior y techos altos.`,
    conditions: {
      minAge: 25,
      licenseYears: 2,
      deposit: 800,
      insuranceExcess: 800,
      mileage: "Limitado a 300 km/día",
      roadAssistance: true
    },
    equipment: {
      interior: ["Cama capuchina 160x200", "Literas traseras", "Salón convertible", "Baño completo"],
      exterior: ["Toldo", "Portabicis", "Luz de avance"],
      included: ["Seguro internacional", "Menaje para 6"]
    }
  },
  {
    id: 94,
    title: "Integral Luxury Voyage en Alicante",
    type: "Integral",
    typeId: 4,
    location: "Alicante - Torrevieja",
    zone: "Alicante - Torrevieja",
    seats: 4,
    beds: 4,
    dailyPrice: 210,
    images: [
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_58_1782025686_6a378dd656c8f.webp",
      "https://vanandcamp.com/assets/uploads/anuncios/anuncio_36_1776763629_69e742ed9a0dc.webp"
    ],
    description: `Experimenta el máximo lujo sobre ruedas con esta autocaravana integral de gama alta. Visión panorámica inigualable desde cabina, acabados premium y aislamiento térmico de primer nivel.`,
    conditions: {
      minAge: 28,
      licenseYears: 3,
      deposit: 1200,
      insuranceExcess: 1200,
      mileage: "Ilimitado a partir de 7 días",
      roadAssistance: true
    },
    equipment: {
      interior: ["Salón face-to-face", "Cama en isla", "Climatizador en habitáculo", "Inversor 2000W"],
      exterior: ["Garaje XXL para moto", "Ducha exterior caliente", "Toldo eléctrico"],
      included: ["Ropa de cama de algodón egipcio", "Set de café espresso"]
    }
  }
];
export {
  vehicles as v
};
