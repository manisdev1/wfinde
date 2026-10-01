import { a as attr, b as bind_props, f as fallback, c as attr_class, d as ensure_array_like, h as stringify, e as escape_html, i as slot } from "../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils2.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
import "clsx";
const locations = [
  { name: "Álava", slug: "alava" },
  { name: "Alicante - Torrevieja", slug: "alicante-torrevieja" },
  { name: "Barcelona", slug: "barcelona" },
  { name: "Cáceres", slug: "caceres" },
  { name: "Cantabria", slug: "cantabria" },
  { name: "Castellón", slug: "castellon" },
  { name: "Girona - Camallera", slug: "girona-camallera" },
  { name: "Girona - Viladamat", slug: "girona-viladamat" },
  { name: "Granada", slug: "granada" },
  { name: "Lleida", slug: "lleida" },
  { name: "Madrid", slug: "madrid" },
  { name: "Pontevedra - Tui", slug: "pontevedra-tui" },
  { name: "Zaragoza", slug: "zaragoza" }
];
function IntelligentSearchBar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let isMobile = fallback($$props["isMobile"], false);
    let locationQuery = "";
    let datesText = "";
    locations.filter((loc) => loc.name.toLowerCase().includes(locationQuery.toLowerCase()));
    if (!isMobile) {
      $$renderer2.push(`<!--[0--><form class="flex items-center bg-white rounded-full p-1 border-[3px] border-[#ffb300] shadow-search hover:border-[#ff9800] hover:shadow-search-hover focus-within:border-[#ff9800] focus-within:shadow-search-hover transition-all duration-300 relative text-left"><div class="relative px-4 py-1 border-r border-gray-200 flex flex-col justify-center"><label for="search-location-desktop" class="block text-[0.7rem] font-bold text-primary mb-0 leading-none">¿Dónde?</label> <input type="text" id="search-location-desktop"${attr("value", locationQuery)} placeholder="Añadir lugar" autocomplete="off" class="border-none outline-none bg-transparent text-[0.95rem] font-semibold text-primary w-44 placeholder:text-gray-400 placeholder:font-normal leading-tight"/> `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="relative px-4 py-1 flex flex-col justify-center"><label for="search-dates-desktop" class="block text-[0.7rem] font-bold text-primary mb-0 leading-none">¿Cuándo?</label> <input type="text" id="search-dates-desktop"${attr("value", datesText)} placeholder="Añadir fechas" readonly="" class="border-none outline-none bg-transparent text-[0.95rem] font-semibold text-primary w-40 cursor-pointer placeholder:text-gray-400 placeholder:font-normal leading-tight"/> `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <button type="submit" aria-label="Buscar autocaravanas" class="bg-accent hover:bg-accent-hover text-white rounded-full w-9 h-9 flex items-center justify-center ml-1 shrink-0 transition-transform active:scale-95 cursor-pointer shadow-sm"><i class="fas fa-search text-sm"></i></button></form>`);
    } else {
      $$renderer2.push(`<!--[-1--><form class="flex items-center bg-white rounded-full px-3 py-1.5 shadow-sm border-[2.5px] border-[#ffb300] gap-2 w-full max-w-md mx-auto relative"><div class="flex-1 relative border-r border-gray-200 pr-2"><input type="text"${attr("value", locationQuery)} placeholder="¿Dónde?" autocomplete="off" class="border-none outline-none bg-transparent text-sm font-semibold text-primary w-full py-1 placeholder:text-primary/70 placeholder:font-semibold"/> `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="flex-1 relative"><input type="text"${attr("value", datesText)} placeholder="¿Cuándo?" readonly="" class="border-none outline-none bg-transparent text-sm font-semibold text-primary w-full py-1 cursor-pointer placeholder:text-primary/70 placeholder:font-semibold"/> `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <button type="submit" aria-label="Buscar" class="bg-accent hover:bg-accent-hover text-white rounded-full w-9 h-9 flex items-center justify-center shrink-0 transition-transform active:scale-95"><i class="fas fa-search text-sm"></i></button></form>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { isMobile });
  });
}
function Header($$renderer) {
  $$renderer.push(`<header class="sticky top-0 z-40 bg-primary shadow-md"><nav class="hidden lg:block"><div class="max-w-[1400px] mx-auto px-4 lg:px-8 py-2.5 flex items-center justify-between relative"><a href="/" class="flex items-center shrink-0"><img src="/assets/LOGO.webp" alt="Van &amp; Camp Logo" width="263" height="79" class="h-[55px] w-auto object-contain"/></a> <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">`);
  IntelligentSearchBar($$renderer, { isMobile: false });
  $$renderer.push(`<!----></div> <div class="flex items-center gap-3"><a href="/login" class="text-white/90 hover:text-accent font-semibold text-sm px-3 py-1.5 transition-colors">Iniciar sesión</a> <a href="/register" class="border border-white/80 hover:border-white hover:bg-white hover:text-primary text-white font-semibold text-sm px-4 py-1.5 rounded-full transition-all duration-200">Registro</a> <button type="button" aria-label="Abrir menú" class="text-white/80 hover:text-white p-2 rounded transition-colors text-xl ml-1"><i class="fas fa-bars"></i></button></div></div></nav> <nav class="lg:hidden bg-primary px-4 py-2 flex items-center justify-between"><button type="button" aria-label="Abrir menú" class="text-accent text-2xl p-1 focus:outline-none"><i class="fas fa-bars"></i></button> <a href="/" class="flex items-center"><img src="/assets/LOGO.webp" alt="Van &amp; Camp Logo" width="263" height="79" class="h-10 w-auto object-contain"/></a> <div class="w-8"></div></nav> <div class="lg:hidden bg-white p-2 shadow-sm border-b border-gray-100">`);
  IntelligentSearchBar($$renderer, { isMobile: true });
  $$renderer.push(`<!----></div></header> `);
  {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <aside${attr_class(`fixed top-0 bottom-0 left-0 w-[280px] bg-primary text-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${"-translate-x-full"}`)}><div class="p-4 border-b border-white/20 flex items-center justify-between"><span class="font-headings text-lg text-white font-bold">Menú</span> <button type="button" class="text-white/80 hover:text-white text-xl p-1" aria-label="Cerrar menú"><i class="fas fa-times"></i></button></div> <div class="p-4 flex-1 overflow-y-auto space-y-2"><a href="/register" class="block px-3 py-2 text-white/90 hover:text-accent hover:bg-white/5 rounded-lg text-base font-medium transition-colors">Registro</a> <a href="/login" class="block px-3 py-2 text-white/90 hover:text-accent hover:bg-white/5 rounded-lg text-base font-medium transition-colors">Iniciar sesión</a> <hr class="border-white/15 my-2"/> <a href="/explorar" class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-accent hover:bg-white/5 rounded-lg text-base font-medium transition-colors"><i class="fas fa-search w-5 text-accent"></i> <span>Explorar Vehículos</span></a> <a href="/experiencias" class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-accent hover:bg-white/5 rounded-lg text-base font-medium transition-colors"><i class="fas fa-route w-5 text-accent"></i> <span>Experiencias</span></a> <a href="/blog-sobre-ruedas" class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-accent hover:bg-white/5 rounded-lg text-base font-medium transition-colors"><i class="fas fa-newspaper w-5 text-accent"></i> <span>Blog sobre ruedas</span></a> <a href="https://vanandcamp.com/tienda/" target="_blank" rel="noreferrer" class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-accent hover:bg-white/5 rounded-lg text-base font-medium transition-colors"><i class="fas fa-shopping-bag w-5 text-accent"></i> <span>Van &amp; Camp shop</span></a> <hr class="border-white/15 my-2"/> <a href="/preguntas-frecuentes" class="flex items-center gap-3 px-3 py-2 text-white/90 hover:text-accent hover:bg-white/5 rounded-lg text-base font-medium transition-colors"><i class="fas fa-question-circle w-5 text-accent"></i> <span>Preguntas Frecuentes</span></a> <a href="/contacto" class="flex items-center gap-3 px-3 py-2 text-white/90 hover:text-accent hover:bg-white/5 rounded-lg text-base font-medium transition-colors"><i class="fas fa-envelope w-5 text-accent"></i> <span>Contacto</span></a></div></aside> <aside${attr_class(`fixed top-0 bottom-0 right-0 w-[280px] bg-primary text-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col ${"translate-x-full"}`)}><div class="p-4 border-b border-white/20 flex items-center justify-between"><span class="font-headings text-lg text-white font-bold">Navegación</span> <button type="button" class="text-white/80 hover:text-white text-xl p-1" aria-label="Cerrar menú"><i class="fas fa-times"></i></button></div> <div class="p-4 flex-1 overflow-y-auto space-y-2"><a href="/explorar" class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-accent hover:bg-white/5 rounded-lg text-base font-medium transition-colors"><i class="fas fa-search w-5 text-accent"></i> <span>Explorar Vehículos</span></a> <a href="/experiencias" class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-accent hover:bg-white/5 rounded-lg text-base font-medium transition-colors"><i class="fas fa-route w-5 text-accent"></i> <span>Experiencias</span></a> <a href="/blog-sobre-ruedas" class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-accent hover:bg-white/5 rounded-lg text-base font-medium transition-colors"><i class="fas fa-newspaper w-5 text-accent"></i> <span>Blog sobre ruedas</span></a> <a href="https://vanandcamp.com/tienda/" target="_blank" rel="noreferrer" class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-accent hover:bg-white/5 rounded-lg text-base font-medium transition-colors"><i class="fas fa-shopping-bag w-5 text-accent"></i> <span>Van &amp; Camp shop</span></a> <hr class="border-white/15 my-3"/> <a href="/preguntas-frecuentes" class="flex items-center gap-3 px-3 py-2 text-white/90 hover:text-accent hover:bg-white/5 rounded-lg text-base font-medium transition-colors"><i class="fas fa-question-circle w-5 text-accent"></i> <span>Preguntas Frecuentes</span></a> <a href="/contacto" class="flex items-center gap-3 px-3 py-2 text-white/90 hover:text-accent hover:bg-white/5 rounded-lg text-base font-medium transition-colors"><i class="fas fa-envelope w-5 text-accent"></i> <span>Contacto</span></a></div></aside>`);
}
function Footer($$renderer) {
  $$renderer.push(`<footer class="bg-primary text-white pt-16 pb-8 border-t border-white/10 mt-auto"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12"><div class="lg:col-span-4 text-center md:text-left"><a href="/" class="inline-block mb-4"><img src="/assets/LOGO.webp" alt="Van &amp; Camp Logo" width="263" height="79" class="h-16 w-auto object-contain mx-auto md:mx-0"/></a> <p class="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">Tu próxima aventura sobre ruedas empieza aquí. Conectamos a viajeros con anfitriones de campers y autocaravanas.</p> <div class="flex items-center justify-center md:justify-start gap-4"><a href="https://wa.link/f3zdeq" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="w-10 h-10 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center text-lg transition-colors"><i class="fab fa-whatsapp"></i></a> <a href="https://www.instagram.com/vanandcamp_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-10 h-10 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center text-lg transition-colors"><i class="fab fa-instagram"></i></a> <a href="https://www.tiktok.com/@vanandcamp" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="w-10 h-10 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center text-lg transition-colors"><i class="fab fa-tiktok"></i></a></div></div> <div class="lg:col-span-2"><h4 class="font-headings text-white font-bold text-lg mb-4">Páginas</h4> <ul class="space-y-2.5 text-sm text-white/80"><li><a href="/explorar" class="hover:text-accent transition-colors">Explorar vehículos</a></li> <li><a href="/experiencias" class="hover:text-accent transition-colors">Experiencias</a></li> <li><a href="/blog-sobre-ruedas" class="hover:text-accent transition-colors">Blog sobre ruedas</a></li> <li><a href="https://vanandcamp.com/tienda/" target="_blank" rel="noreferrer" class="hover:text-accent transition-colors">Van &amp; Camp Shop</a></li> <li><a href="/contacto" class="hover:text-accent transition-colors">Contacto</a></li> <li><a href="/login" class="hover:text-accent transition-colors">Iniciar sesión</a></li> <li><a href="/register" class="hover:text-accent transition-colors">Registro</a></li></ul></div> <div class="lg:col-span-2"><h4 class="font-headings text-white font-bold text-lg mb-4">Acerca de</h4> <ul class="space-y-2.5 text-sm text-white/80"><li><a href="/que-es-van-camp" class="hover:text-accent transition-colors">Sobre nosotros</a></li> <li><a href="/preguntas-frecuentes" class="hover:text-accent transition-colors">Preguntas Frecuentes</a></li> <li><a href="/contacto" class="hover:text-accent transition-colors">Política de Privacidad</a></li> <li><a href="/contacto" class="hover:text-accent transition-colors">Términos de Servicio</a></li> <li><a href="/contacto" class="hover:text-accent transition-colors">Política de Cookies</a></li> <li><a href="/contacto" class="hover:text-accent transition-colors">Envíos y Devoluciones</a></li></ul></div> <div class="lg:col-span-4"><h4 class="font-headings text-white font-bold text-lg mb-4">Alquiler de Autocaravanas en:</h4> <div class="flex flex-wrap gap-2"><!--[-->`);
  const each_array = ensure_array_like(locations);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let loc = each_array[$$index];
    $$renderer.push(`<a${attr("href", `/explorar?zona=${stringify(encodeURIComponent(loc.name))}`)} class="inline-block px-3 py-1.5 bg-white/10 hover:bg-accent border border-white/15 rounded-full text-xs font-medium text-white transition-all duration-200">${escape_html(loc.name)}</a>`);
  }
  $$renderer.push(`<!--]--></div></div></div> <div class="pt-8 border-t border-white/10 text-center text-xs text-white/60">© 2026 Van &amp; Camp. Todos los derechos reservados.</div></div></footer>`);
}
function WhatsAppFloatingWidget($$renderer) {
  $$renderer.push(`<div class="fixed bottom-10 right-4 z-50 flex flex-col items-end" role="region" aria-label="Atención al cliente WhatsApp">`);
  {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <a href="https://wa.me/34613010059?text=Hola,%20me%20gustaría%20información%20sobre%20el%20alquiler%20de%20autocaravanas" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" class="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-3xl shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"><i class="fab fa-whatsapp"></i></a></div>`);
}
function CookieConsent($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function _layout($$renderer, $$props) {
  let data = $$props["data"];
  $$renderer.push(`<div class="min-h-screen flex flex-col bg-[#f8f9fa] selection:bg-accent selection:text-white">`);
  Header($$renderer);
  $$renderer.push(`<!----> <main class="flex-grow"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main> `);
  Footer($$renderer);
  $$renderer.push(`<!----> `);
  WhatsAppFloatingWidget($$renderer);
  $$renderer.push(`<!----> `);
  CookieConsent($$renderer);
  $$renderer.push(`<!----></div>`);
  bind_props($$props, { data });
}
export {
  _layout as default
};
