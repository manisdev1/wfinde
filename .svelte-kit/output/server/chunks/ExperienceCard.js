import { c as attr_class, e as escape_html, a as attr, h as stringify, b as bind_props } from "./index.js";
function ExperienceCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let exp = $$props["exp"];
    $$renderer2.push(`<div${attr_class(`group bg-white rounded-2xl border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col overflow-hidden h-full ${exp.isSoldOut ? "is-soldout" : ""}`)}><div class="relative h-[220px] overflow-hidden">`);
    if (exp.discountPercentage && !exp.isSoldOut) {
      $$renderer2.push(`<!--[0--><span class="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 shadow-sm">-${escape_html(exp.discountPercentage)}% de descuento</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (exp.isSoldOut) {
      $$renderer2.push(`<!--[0--><div class="soldout-ribbon">NO DISPONIBLE</div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <a${attr("href", `/experiencia/${stringify(exp.slug)}`)} class="block w-full h-full"><img${attr("src", exp.images[0])}${attr("alt", exp.title)} loading="lazy"${attr_class(`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${exp.isSoldOut ? "grayscale opacity-80" : ""}`)}/></a></div> <div class="p-5 flex flex-col flex-1"><a${attr("href", `/experiencia/${stringify(exp.slug)}`)} class="text-accent hover:text-accent-hover font-headings font-bold text-lg mb-4 line-clamp-2 hover:underline transition-colors">${escape_html(exp.title)}</a> <div class="space-y-2 text-primary text-sm font-medium mb-4"><div class="flex items-center gap-2.5"><i class="fas fa-map-marker-alt w-5 text-primary/70"></i> <span class="truncate">${escape_html(exp.location)}</span></div> <div class="flex items-center gap-2.5"><i class="fas fa-calendar-alt w-5 text-primary/70"></i> <span>${escape_html(exp.dates)}</span></div> <div class="flex items-center gap-2.5"><i class="fas fa-user-friends w-5 text-primary/70"></i> <span>Máximo ${escape_html(exp.maxTravelers)} viajeros</span></div> <div class="flex items-center gap-2.5"><i class="fas fa-clock w-5 text-primary/70"></i> <span>${escape_html(exp.durationDays)} días</span></div></div> <div class="mt-auto pt-4 border-t border-gray-100"><div class="flex items-baseline gap-2 mb-3">`);
    if (exp.originalPrice > exp.discountedPrice) {
      $$renderer2.push(`<!--[0--><span class="text-accent font-bold text-sm line-through">${escape_html(exp.originalPrice.toFixed(2))}€</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <span class="text-primary font-black text-2xl">${escape_html(exp.discountedPrice.toFixed(2))}€</span></div> <a${attr("href", `/experiencia/${stringify(exp.slug)}`)} class="block w-full text-center bg-accent hover:bg-accent-hover text-white font-bold py-2.5 rounded-lg transition-colors duration-200">Más información</a></div></div></div>`);
    bind_props($$props, { exp });
  });
}
export {
  ExperienceCard as E
};
