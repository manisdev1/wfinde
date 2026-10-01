import { k as head, d as ensure_array_like, e as escape_html, c as attr_class } from "../../../chunks/index.js";
const faqs = [
  {
    id: "1",
    category: "Requisitos y Conducción",
    question: "¿Qué carnet necesito para conducir una autocaravana o camper?",
    answer: "Todas nuestras autocaravanas y campers tienen una Masa Máxima Autorizada (MMA) de hasta 3.500 kg, por lo que se pueden conducir con el carnet de conducir B tradicional de coche en vigor."
  },
  {
    id: "2",
    category: "Requisitos y Conducción",
    question: "¿Cuál es la edad mínima para alquilar un vehículo?",
    answer: "Por norma general y requerimiento de las compañías aseguradoras, el conductor principal debe tener al menos 25 años y contar con al menos 2 años de antigüedad en el carnet de conducir tipo B."
  },
  {
    id: "3",
    category: "Reservas y Pagos",
    question: "¿Cómo funciona la reserva y los pagos?",
    answer: "Al solicitar la reserva no pagas nada. Una vez el anfitrión confirma la disponibilidad del vehículo, abonas solo el 30% del alquiler en concepto de señal. El 70% restante se abona 30 días antes de la recogida del vehículo de manera cómoda desde tu panel de usuario."
  },
  {
    id: "4",
    category: "Seguro y Fianza",
    question: "¿Cómo funciona el seguro y la fianza?",
    answer: "Todos los alquileres incluyen seguro a todo riesgo con franquicia y asistencia en carretera 24/7 en toda Europa. La fianza (generalmente entre 800 € y 900 €) se deposita en el momento del check-in mediante tarjeta de crédito y se reembolsa íntegramente tras comprobar el estado del vehículo a su devolución."
  },
  {
    id: "5",
    category: "Servicios Van & Camp",
    question: "¿Qué es el asesoramiento personalizado incluido en el alquiler?",
    answer: "En Van & Camp no solo conectamos con los mejores anfitriones y flotas de campers, sino que nuestro equipo experto te acompaña antes y durante el viaje diseñando tu ruta a medida: recomendaciones de calas, pueblos, áreas de pernocta tranquilas y consejos de viaje."
  },
  {
    id: "6",
    category: "Viaje y Confort",
    question: "¿Se admiten mascotas en las autocaravanas y campers?",
    answer: '¡Sí! Gran parte de nuestra flota es pet-friendly. Puedes marcar la casilla de "Viajo con mascota" al solicitar la reserva para que el anfitrión prepare el vehículo con su suplemento correspondiente de limpieza extra.'
  },
  {
    id: "7",
    category: "Viaje y Confort",
    question: "¿Dónde puedo pernoctar legalmente con la autocaravana?",
    answer: "En España puedes pernoctar (dormir dentro del vehículo) en cualquier lugar donde esté permitido el estacionamiento, siempre que no despliegues elementos exteriores (toldos, mesas, calzos). Además, dispones de una red enorme de áreas de autocaravanas públicas y privadas con servicios y campings."
  },
  {
    id: "8",
    category: "Seguro y Asistencia",
    question: "¿Qué ocurre si tengo una avería o duda técnica durante el viaje?",
    answer: "Dispones de un servicio de asistencia en carretera 24 horas al día los 7 días de la semana, además de la línea de atención de Van & Camp y del anfitrión para cualquier duda sobre el funcionamiento del gas, calefacción o depósitos."
  }
];
function _page($$renderer) {
  let openFaqId = "1";
  head("f0sio3", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Preguntas Frecuentes | Van &amp; Camp</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Encuentra respuestas a tus preguntas más comunes sobre el alquiler de autocaravanas y campers con Van &amp; Camp."/>`);
  });
  $$renderer.push(`<section class="bg-primary text-white py-16 text-center"><div class="max-w-4xl mx-auto px-4"><h1 class="font-headings text-3xl sm:text-5xl font-black mb-4">Preguntas Frecuentes</h1> <p class="text-base sm:text-lg text-white/90 max-w-xl mx-auto">Todo lo que necesitas saber antes, durante y después de tu aventura en autocaravana o camper.</p></div></section> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"><div class="space-y-4"><!--[-->`);
  const each_array = ensure_array_like(faqs);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let faq = each_array[$$index];
    $$renderer.push(`<div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-colors"><button type="button" class="w-full p-5 text-left flex items-center justify-between gap-4 font-headings font-bold text-base sm:text-lg text-primary hover:text-accent transition-colors"><span class="flex items-center gap-3"><i class="fas fa-question-circle text-accent shrink-0"></i> <span>${escape_html(faq.question)}</span></span> <i${attr_class(`fas fa-chevron-down text-sm text-gray-400 transform transition-transform duration-200 shrink-0 ${openFaqId === faq.id ? "rotate-180 text-accent" : ""}`)}></i></button> `);
    if (openFaqId === faq.id) {
      $$renderer.push(`<!--[0--><div class="px-5 pb-5 text-sm sm:text-base text-primary/80 leading-relaxed border-t border-gray-100 pt-4"><span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary mb-3">${escape_html(faq.category)}</span> <p>${escape_html(faq.answer)}</p></div>`);
    } else {
      $$renderer.push("<!--[-1-->");
    }
    $$renderer.push(`<!--]--></div>`);
  }
  $$renderer.push(`<!--]--></div> <div class="mt-16 bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-card space-y-4"><div class="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto text-xl"><i class="fas fa-headset"></i></div> <h3 class="font-headings font-bold text-xl text-primary">¿No has encontrado la respuesta que buscabas?</h3> <p class="text-sm text-gray-600 max-w-md mx-auto">Estamos disponibles para resolver cualquier duda técnica o de planificación sobre tu viaje.</p> <div class="flex flex-wrap justify-center gap-4 pt-2"><a href="https://wa.me/34613010059" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-2.5 rounded-full text-sm shadow-sm transition-colors"><i class="fab fa-whatsapp"></i> Hablar por WhatsApp</a> <a href="/contacto" class="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-2.5 rounded-full text-sm shadow-sm transition-colors"><i class="fas fa-envelope"></i> Formulario de contacto</a></div></div></div>`);
}
export {
  _page as default
};
