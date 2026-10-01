import { a as attr, h as stringify, d as ensure_array_like, c as attr_class, e as escape_html, b as bind_props } from "./index.js";
function VehicleCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let vehicle = $$props["vehicle"];
    let currentImageIndex = 0;
    $$renderer2.push(`<div class="group relative bg-white border border-[#e0e0e0] rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col overflow-hidden h-full"><div class="relative w-full h-[200px] overflow-hidden bg-gray-100"><a${attr("href", `/vehiculo/${stringify(vehicle.id)}`)} class="block w-full h-full"><img${attr("src", vehicle.images[currentImageIndex] || vehicle.images[0])}${attr("alt", vehicle.title)} loading="lazy" class="w-full h-full object-cover transition-opacity duration-300"/></a> `);
    if (vehicle.images.length > 1) {
      $$renderer2.push(`<!--[0--><button type="button" aria-label="Foto anterior" class="absolute left-2 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity z-20"><i class="fas fa-chevron-left"></i></button> <button type="button" aria-label="Siguiente foto" class="absolute right-2 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity z-20"><i class="fas fa-chevron-right"></i></button> <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20"><!--[-->`);
      const each_array = ensure_array_like(vehicle.images.slice(0, 5));
      for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
        each_array[idx];
        $$renderer2.push(`<span${attr_class(`w-1.5 h-1.5 rounded-full transition-all ${currentImageIndex === idx ? "bg-accent w-3" : "bg-white/70"}`)}></span>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="p-4 flex flex-col flex-1"><h3 class="font-headings font-bold text-base sm:text-lg text-primary truncate mb-2"><a${attr("href", `/vehiculo/${stringify(vehicle.id)}`)} class="hover:text-accent transition-colors">${escape_html(vehicle.title)}</a></h3> <div class="space-y-1 text-primary text-xs font-semibold mb-4 flex-1"><div class="flex items-center gap-2"><i class="fas fa-map-marker-alt text-primary/70 w-4"></i> <span class="truncate">${escape_html(vehicle.location)}</span></div> <div class="flex items-center gap-2"><i class="fas fa-users text-primary/70 w-4"></i> <span>${escape_html(vehicle.seats)} plazas</span></div></div> <div class="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto"><div class="text-primary text-sm font-medium">Desde <span class="font-black text-lg text-primary">${escape_html(vehicle.dailyPrice)}€</span>/día</div> <a${attr("href", `/vehiculo/${stringify(vehicle.id)}`)} class="text-xs bg-primary hover:bg-primary-dark text-white font-bold px-3 py-1.5 rounded-lg transition-colors">Ver vehículo</a></div></div></div>`);
    bind_props($$props, { vehicle });
  });
}
export {
  VehicleCard as V
};
