import { k as head, e as escape_html, d as ensure_array_like } from "../../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils2.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
import { v as vehicles } from "../../../chunks/vehicles.js";
import { V as VehicleCard } from "../../../chunks/VehicleCard.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredVehicles;
    let maxPrice = 500;
    let travelers = 1;
    let selectedTypes = [];
    let selectedZone = "";
    filteredVehicles = vehicles.filter((v) => {
      if (v.dailyPrice > maxPrice) return false;
      if (selectedTypes.length > 0 && !selectedTypes.includes(v.type)) return false;
      return true;
    });
    head("1evmtbc", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Explorar Vehículos | Van &amp; Camp</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Encuentra y alquila autocaravanas y campers en toda España con seguro a todo riesgo y asesoramiento de ruta personalizado."/>`);
    });
    $$renderer2.push(`<section class="relative py-20 bg-cover bg-center text-white" style="background-image: url('/assets/explore-hero.jpg');"><div class="absolute inset-0 bg-primary/65 z-10"></div> <div class="relative z-20 max-w-4xl mx-auto px-4 text-center"><h1 class="font-headings text-3xl sm:text-5xl font-black text-white mb-4">Alquiler de Autocaravanas y Campers con <span class="text-accent">Confianza Total</span></h1> <p class="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">En Van &amp; Camp cuidamos cada detalle para que tu viaje sea seguro, cómodo y sin complicaciones. Te acompañamos desde la elección del vehículo hasta la planificación de tu ruta.</p></div></section> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"><div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8"><div class="flex flex-wrap items-center gap-3"><div class="relative"><button type="button" class="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-primary transition-colors"><i class="fas fa-euro-sign text-accent"></i> <span>Precio: hasta ${escape_html(maxPrice)}€/día</span> <i class="fas fa-chevron-down text-xs text-gray-400"></i></button> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="relative"><button type="button" class="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-primary transition-colors"><i class="fas fa-users text-accent"></i> <span>Viajeros: ${escape_html(travelers)} ${escape_html("persona")}</span> <i class="fas fa-chevron-down text-xs text-gray-400"></i></button> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="relative"><button type="button" class="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-primary transition-colors"><i class="fas fa-caravan text-accent"></i> <span>Tipo ${escape_html(selectedTypes.length > 0 ? `(${selectedTypes.length})` : "")}</span> <i class="fas fa-chevron-down text-xs text-gray-400"></i></button> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="relative"><button type="button" class="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-primary transition-colors"><i class="fas fa-map-marker-alt text-accent"></i> <span>${escape_html("Todas las zonas")}</span> <i class="fas fa-chevron-down text-xs text-gray-400"></i></button> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    if (selectedTypes.length > 0 || selectedZone) {
      $$renderer2.push(`<!--[0--><button type="button" class="text-xs text-accent hover:underline font-bold px-3 py-2"><i class="fas fa-undo me-1"></i> Limpiar filtros</button>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div class="flex items-center justify-between mb-6"><p class="text-sm font-semibold text-primary">Mostrando <span class="font-bold text-accent">${escape_html(filteredVehicles.length)}</span> ${escape_html(filteredVehicles.length === 1 ? "vehículo" : "vehículos")} disponibles</p></div> `);
    if (filteredVehicles.length > 0) {
      $$renderer2.push(`<!--[0--><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
      const each_array_2 = ensure_array_like(filteredVehicles);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let vehicle = each_array_2[$$index_2];
        $$renderer2.push(`<div>`);
        VehicleCard($$renderer2, { vehicle });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push(`<!--[-1--><div class="bg-white border-2 border-dashed border-primary rounded-2xl p-10 text-center max-w-2xl mx-auto my-8 space-y-4"><div class="text-4xl text-accent"><i class="fas fa-search-location"></i></div> <h3 class="font-headings font-bold text-2xl text-primary">¿No encuentras el vehículo que buscas?</h3> <p class="text-primary text-sm max-w-md mx-auto leading-relaxed">Cuéntanos tu destino y fechas soñadas y nuestro equipo buscará la mejor opción disponible en nuestra red de anfitriones y colaboradores.</p> <div><a href="https://wa.me/34613010059?text=Hola,%20busco%20un%20vehículo%20en%20otra%20ubicación" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-full text-sm shadow-md hover:-translate-y-0.5 transition-all"><i class="fab fa-whatsapp text-lg"></i> Consultar por WhatsApp</a></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
