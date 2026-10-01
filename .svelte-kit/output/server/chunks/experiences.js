const experiences = [
  {
    id: "exp-1",
    title: "🌊 Escapada Camper & Viento en la Costa Brava: Libertad y Mar 🚐🏄‍♂️",
    slug: "-escapada-camper-viento-en-la-costa-brava-libertad-y-mar-",
    location: "Sant Pere del Pescador - Girona",
    dates: "25/09/2026 - 27/09/2026",
    maxTravelers: 4,
    durationDays: 3,
    originalPrice: 405,
    discountedPrice: 324,
    discountPercentage: 20,
    isSoldOut: false,
    images: [
      "https://vanandcamp.com/uploads/paquetes/pack_6aa97ca57dbb9_1789492389.webp",
      "https://vanandcamp.com/uploads/paquetes/pack_6aa97ca59d854_1789492389.webp",
      "https://vanandcamp.com/uploads/paquetes/pack_6aa97ca5b20fe_1789492389.webp",
      "https://vanandcamp.com/uploads/paquetes/pack_6aa97ca5c9eb0_1789492389.webp",
      "https://vanandcamp.com/uploads/paquetes/pack_6aa97ca6459ec_1789492390.webp",
      "https://vanandcamp.com/uploads/paquetes/pack_6aa97ca66792e_1789492390.webp",
      "https://vanandcamp.com/uploads/paquetes/pack_6aa97ca6cc5ee_1789492390.webp"
    ],
    itineraryHtml: `
      <p>Recoges tu autocaravana 🚐 en Camallera (con parking gratuito 🅿️ para dejar tu coche personal y la estación de tren R11 a un paso 🚆) y te lanzas a explorar la Costa Brava a tu aire.</p>
      <p>Tu campo base estará en el <strong>entorno de Sant Pere Pescador</strong> y las calas de la zona 🌊, donde podrás desconectar y sentir la brisa del mar 🌿.</p>
      <p>Allí te espera la escuela por si te apetece <strong>añadirle adrenalina</strong> al fin de semana 🏄‍♂️:<br>
      • Podrás deslizarte en Stand Up Paddle 🧘‍♀️<br>
      • Volar sobre el agua en E-Foil ⚡<br>
      • Iniciarte en el Kitesurf 🪁.</p>
      <p>Tú decides el ritmo: puedes apretar con deportes acuáticos 💪 o simplemente <strong>relajarte al sol y disfrutar</strong> del paisaje mediterráneo 😌.</p>
      <p>Lo mejor es la sensación 🤍: despertarte frente al mar 🌅, sin prisas ⏰❌, organizar la jornada sobre la marcha 🧭 y volver al atardecer a descansar en tu casa sobre ruedas 🌌.</p>
      <p><strong>👉 Plazas limitadas según disponibilidad de vehículos y fechas.</strong></p>
      <p><strong>👉 Posibilidad de personalizar tu viaje y modificar las fechas, escribiéndonos.</strong></p>
    `,
    includesHtml: `
      <ul>
        <li><strong>1º Alquiler de Autocaravana Laika Kosmo</strong> (gama alta, motor Fiat Ducato 140cv) durante 3 días.</li>
        <li><strong>2º Punto de recogida en Camallera</strong> con espacio para dejar gratis tu vehículo particular 🅿️.</li>
        <li><strong>3º Equipamiento completo del vehículo</strong>: Aire acondicionado en cabina, CarPlay/Android Auto, placa solar, toldo extensible, cámara de marcha atrás, cierres de seguridad y alarma, botellas de gas, alzas y cables.</li>
        <li><strong>4º Kit de camping y cocina incluidos</strong>: Almohadas, edredones, vajilla y menaje, mesa de picnic, 4 sillas de exterior.</li>
        <li><strong>5º Seguro a todo riesgo</strong> con franquicia (fianza de 750 € mediante tarjeta o transferencia).</li>
        <li><strong>6º Kilometraje incluido</strong>: 200 km/día.</li>
      </ul>
    `,
    policiesHtml: `
      <h5 class="font-bold text-primary mb-2">Reserva y pagos</h5>
      <p><strong>Pago inicial:</strong> Abonas solo el 30% correspondiente al alquiler del vehículo.</p>
      <p><strong>Restante:</strong> El 70% del alquiler se realiza 30 días antes de la salida desde tu panel de usuario. Las actividades opcionales se abonan directamente en el establecimiento.</p>
      <h5 class="font-bold text-primary mt-4 mb-2">Políticas de cancelaciones</h5>
      <ul>
        <li><strong>+30 días antes:</strong> Devolución del 100% de lo aportado.</li>
        <li><strong>Entre 30 y 16 días antes:</strong> Se retendrá el 30% del total aportado y se devolverá el restante.</li>
        <li><strong>Menos de 16 días antes:</strong> Sin derecho a devolución.</li>
      </ul>
    `
  },
  {
    id: "exp-2",
    title: "Autocaravana + Bici en Castellon",
    slug: "autocaravana-bicicletas-castell-n",
    location: "Castellón",
    dates: "Fechas a consultar",
    maxTravelers: 4,
    durationDays: 7,
    originalPrice: 1155,
    discountedPrice: 924,
    discountPercentage: 20,
    isSoldOut: true,
    images: [
      "https://vanandcamp.com/uploads/paquetes/pack_69c3d6e3e574c_1774442211.webp"
    ],
    itineraryHtml: `
      <p>Combina la libertad del caravaning con las mejores rutas cicloturistas de la provincia de Castellón y la Vía Verde del Mar.</p>
      <p>Disfruta de 7 días completos explorando calas escondidas, parques naturales como la Sierra de Irta y pueblos medievales como Morella.</p>
    `,
    includesHtml: `
      <ul>
        <li>Alquiler de autocaravana equipada 7 días</li>
        <li>Portabicicletas para 4 bicis</li>
        <li>Rutas GPS recomendadas y puntos de pernocta</li>
        <li>Seguro a todo riesgo incluido</li>
      </ul>
    `,
    policiesHtml: `
      <p>Cancelación gratuita hasta 30 días antes de la fecha fijada.</p>
    `
  },
  {
    id: "exp-3",
    title: "Alquiler Camper + Pernocta - Valle de Ordesa",
    slug: "alquiler-camper-pernocta---valle-de-ordesa",
    location: "Ordesa - Pirineos",
    dates: "Fechas a consultar",
    maxTravelers: 2,
    durationDays: 3,
    originalPrice: 393.25,
    discountedPrice: 314.6,
    discountPercentage: 20,
    isSoldOut: true,
    images: [
      "https://vanandcamp.com/uploads/paquetes/pack_69f20dd2a7304_1777470930.webp"
    ],
    itineraryHtml: `
      <p>Escapada romántica y de montaña al corazón del Parque Nacional de Ordesa y Monte Perdido.</p>
      <p>3 días en camper compacta de fácil conducción con pernocta asegurada y asesoría de senderos naturales.</p>
    `,
    includesHtml: `
      <ul>
        <li>Alquiler camper 3 días equipada con calefacción estacionaria</li>
        <li>Pernocta en camping/área concertada de montaña</li>
        <li>Guía de senderos y consejos locales</li>
        <li>Seguro a todo riesgo</li>
      </ul>
    `,
    policiesHtml: `
      <p>Cancelación flexible con aviso previo de 20 días.</p>
    `
  }
];
export {
  experiences as e
};
