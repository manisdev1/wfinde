import { d as ensure_array_like, c as attr_class, m as clsx, e as escape_html, j as attr_style, a as attr, h as stringify } from "./index.js";
import "clsx";
function ClaimsSection($$renderer) {
  const claims = [
    {
      icon: "fas fa-map",
      title: "No solo alquiler",
      text: "Planificamos tu viaje completo contigo"
    },
    {
      icon: "fas fa-euro-sign",
      title: "Precios claros",
      text: "Olvídate de costes ocultos, pagas solo lo que ves."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Solo los mejores proveedores",
      text: "Empresas seleccionadas por su calidad y seguridad."
    },
    {
      icon: "fas fa-file-contract",
      title: "Seguro incluido",
      text: "Sin letra pequeña, total transparencia en tu viaje."
    }
  ];
  let currentMobileIndex = 0;
  $$renderer.push(`<section class="py-14 sm:py-18 bg-[#f8f9fa]"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
  const each_array = ensure_array_like(claims);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let claim = each_array[$$index];
    $$renderer.push(`<div class="bg-primary border border-[#e0e0e0] rounded-xl p-8 text-center flex flex-col justify-center items-center shadow-card hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300"><div class="text-3xl sm:text-4xl text-accent mb-4"><i${attr_class(clsx(claim.icon))}></i></div> <h3 class="text-xl font-bold text-white mb-2 font-body">${escape_html(claim.title)}</h3> <p class="text-white/90 text-sm leading-relaxed">${escape_html(claim.text)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div> <div class="md:hidden"><div class="overflow-hidden rounded-xl"><div class="flex transition-transform duration-300 ease-out"${attr_style(`transform: translateX(-${stringify(currentMobileIndex * 100)}%);`)}><!--[-->`);
  const each_array_1 = ensure_array_like(claims);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let claim = each_array_1[$$index_1];
    $$renderer.push(`<div class="w-full shrink-0 px-2"><div class="bg-primary border border-[#e0e0e0] rounded-xl p-7 text-center flex flex-col justify-center items-center shadow-md"><div class="text-4xl text-accent mb-4"><i${attr_class(clsx(claim.icon))}></i></div> <h3 class="text-xl font-bold text-white mb-2 font-body">${escape_html(claim.title)}</h3> <p class="text-white/90 text-sm">${escape_html(claim.text)}</p></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div> <div class="flex justify-center items-center gap-2 mt-4"><!--[-->`);
  const each_array_2 = ensure_array_like(claims);
  for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
    each_array_2[i];
    $$renderer.push(`<button type="button"${attr("aria-label", `Ir a diapositiva ${stringify(i + 1)}`)}${attr_class(`w-2.5 h-2.5 rounded-full transition-all duration-200 ${currentMobileIndex === i ? "bg-primary w-6" : "bg-gray-300"}`)}></button>`);
  }
  $$renderer.push(`<!--]--></div></div></div></section>`);
}
function AboutFeatureSection($$renderer) {
  $$renderer.push(`<section class="py-16 md:py-20 bg-white overflow-hidden"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"><div class="relative flex items-center justify-center p-4"><div class="absolute inset-0 m-auto w-[95%] h-[105%] bg-primary about-shape-bg z-0"></div> <img src="/assets/acompanamiento-camper.webp" alt="Ruta de viaje camper" width="611" height="611" loading="lazy" class="relative z-10 w-[90%] h-auto about-shape-img shadow-[0_15px_35px_rgba(0,0,0,0.15)] object-cover"/></div> <div class="space-y-6"><h2 class="text-2xl sm:text-3xl lg:text-4xl font-headings font-bold text-primary leading-tight">Asesoramiento personalizado incluido en el alquiler</h2> <p class="text-base sm:text-lg text-primary leading-relaxed font-normal">En Van&amp;Camp no solo te ayudamos a alquilar una autocaravana o camper, también te acompañamos a planificar tu aventura. En el precio del alquiler está incluida una asesoría personalizada para diseñar tu ruta perfecta, con recomendaciones de destinos, pernoctas y experiencias únicas.</p> <p class="text-base sm:text-lg text-primary leading-relaxed font-normal">Queremos que disfrutes del viaje sin preocuparte por nada: <strong class="font-bold">nosotros nos encargamos de los detalles, tú solo de vivir la carretera.</strong></p></div></div></div></section>`);
}
export {
  AboutFeatureSection as A,
  ClaimsSection as C
};
