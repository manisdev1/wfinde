import { l as store_get, k as head, e as escape_html, d as ensure_array_like, c as attr_class, a as attr, u as unsubscribe_stores, h as stringify } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { e as experiences } from "../../../../chunks/experiences.js";
import { h as html } from "../../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let slug, experience;
    let activeModalSlide = 0;
    slug = store_get($$store_subs ??= {}, "$page", page).params.slug;
    experience = experiences.find((e) => e.slug === slug) || experiences[0];
    head("1uzuju6", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(experience.title)} | Van &amp; Camp</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", `Reserva ${stringify(experience.title)} en ${stringify(experience.location)}. Alquiler de camper y actividades incluidas.`)}/>`);
    });
    $$renderer2.push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="mb-6"><h1 class="font-headings text-2xl sm:text-4xl font-bold text-primary mb-3 leading-tight">${escape_html(experience.title)}</h1> <div class="flex items-center text-primary font-medium text-sm sm:text-base flex-wrap gap-2 sm:gap-4"><span class="flex items-center gap-1.5"><i class="fas fa-map-marker-alt text-accent"></i> ${escape_html(experience.location)}</span> <span>•</span> <span class="flex items-center gap-1.5"><i class="fas fa-clock text-accent"></i> ${escape_html(experience.durationDays)} días</span> <span>•</span> <span class="flex items-center gap-1.5"><i class="fas fa-users text-accent"></i> Hasta ${escape_html(experience.maxTravelers)} personas</span></div></div> <div class="mb-8"><div class="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[460px] rounded-2xl overflow-hidden relative"><!--[-->`);
    const each_array = ensure_array_like(experience.images.slice(0, 5));
    for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
      let img = each_array[idx];
      $$renderer2.push(`<div${attr_class(`h-full overflow-hidden cursor-pointer group ${idx === 0 ? "col-span-2 row-span-2" : ""}`)} role="presentation"><img${attr("src", img)}${attr("alt", `Foto ${stringify(idx + 1)}`)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>`);
    }
    $$renderer2.push(`<!--]--> <button type="button" class="absolute bottom-4 right-4 bg-white/95 hover:bg-white text-primary font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 z-10"><i class="fas fa-th text-accent"></i> Ver todas las fotos (${escape_html(experience.images.length)})</button></div> <div class="md:hidden rounded-2xl overflow-hidden relative"><img${attr("src", experience.images[activeModalSlide])}${attr("alt", experience.title)} class="w-full h-72 object-cover"/> <div class="flex gap-2 overflow-x-auto p-2 bg-gray-100"><!--[-->`);
    const each_array_1 = ensure_array_like(experience.images);
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let img = each_array_1[i];
      $$renderer2.push(`<button type="button"${attr_class(`w-16 h-12 shrink-0 rounded overflow-hidden border-2 ${activeModalSlide === i ? "border-accent" : "border-transparent"}`)}><img${attr("src", img)} alt="" class="w-full h-full object-cover"/></button>`);
    }
    $$renderer2.push(`<!--]--></div></div></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"><div class="lg:col-span-7"><div class="flex border-b border-gray-200 gap-8 mb-6"><button type="button"${attr_class(`pb-3 text-base font-bold transition-all border-b-2 ${"border-primary text-primary opacity-100"}`)}>Itinerario</button> <button type="button"${attr_class(`pb-3 text-base font-bold transition-all border-b-2 ${"border-transparent text-gray-400 hover:text-gray-600"}`)}>Qué Incluye</button> <button type="button"${attr_class(`pb-3 text-base font-bold transition-all border-b-2 ${"border-transparent text-gray-400 hover:text-gray-600"}`)}>Políticas</button></div> <div class="text-primary leading-relaxed text-sm sm:text-base space-y-4 font-normal">`);
    {
      $$renderer2.push(`<!--[0--><div class="prose max-w-none text-primary">${html(experience.itineraryHtml)}</div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="lg:col-span-5"><div class="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 shadow-card space-y-5">`);
    if (experience.discountPercentage && !experience.isSoldOut) {
      $$renderer2.push(`<!--[0--><div class="bg-primary text-white text-center py-2.5 px-4 rounded-lg font-bold text-sm uppercase tracking-wider pulse-offer shadow-sm">¡OFERTA ESPECIAL -${escape_html(experience.discountPercentage)}%!</div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="text-center py-2 border-b border-gray-100">`);
    if (experience.originalPrice > experience.discountedPrice) {
      $$renderer2.push(`<!--[0--><span class="text-accent font-bold text-base line-through block">${escape_html(experience.originalPrice.toFixed(2))}€</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="font-black text-3xl sm:text-4xl text-primary">${escape_html(experience.discountedPrice.toFixed(2))}€</div> <span class="text-xs text-gray-500 font-medium">Precio total por paquete</span></div> <div class="space-y-3 text-xs text-primary font-medium"><div class="flex justify-between py-1 border-b border-gray-100"><span class="text-gray-500">Fechas fijadas</span> <span class="font-bold">${escape_html(experience.dates)}</span></div> <div class="flex justify-between py-1 border-b border-gray-100"><span class="text-gray-500">Duración</span> <span class="font-bold">${escape_html(experience.durationDays)} días / 2 noches</span></div> <div class="flex justify-between py-1 border-b border-gray-100"><span class="text-gray-500">Ocupantes</span> <span class="font-bold">Hasta ${escape_html(experience.maxTravelers)} viajeros</span></div></div> `);
    if (!experience.isSoldOut) {
      $$renderer2.push(`<!--[0--><button type="button" class="w-full bg-accent hover:bg-accent-hover text-white font-headings font-bold text-base py-3.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5">Reservar Experiencia</button>`);
    } else {
      $$renderer2.push(`<!--[-1--><button type="button" disabled="" class="w-full bg-gray-300 text-gray-500 font-headings font-bold text-base py-3.5 rounded-xl cursor-not-allowed">No Disponible</button>`);
    }
    $$renderer2.push(`<!--]--> <div class="bg-gray-50 rounded-xl p-3.5 text-xs text-gray-600 text-center space-y-1"><p class="font-bold text-primary"><i class="fas fa-lock text-green-600 mr-1"></i> Reserva segura sin pago inicial</p> <p>Solo pagarás el 30% tras confirmar plazas con el anfitrión.</p></div></div></div></div></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
