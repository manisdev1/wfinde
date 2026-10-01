import { k as head, a as attr } from "../../../chunks/index.js";
function _page($$renderer) {
  let email = "";
  let password = "";
  head("1x05zx6", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Iniciar Sesión | Van &amp; Camp</title>`);
    });
  });
  $$renderer.push(`<div class="max-w-md mx-auto px-4 py-16"><div class="bg-white rounded-2xl p-8 shadow-card border border-gray-100 text-primary"><div class="text-center mb-8"><img src="/assets/LOGO.webp" alt="Van &amp; Camp" class="h-12 w-auto mx-auto mb-4"/> <h1 class="font-headings font-bold text-2xl">Iniciar sesión</h1> <p class="text-xs text-gray-500 mt-1">Accede a tu panel de reservas y viajes</p></div> `);
  {
    $$renderer.push(`<!--[0--><form class="space-y-4 text-xs sm:text-sm"><div><label for="login-email" class="block font-bold mb-1">Correo electrónico</label> <input id="login-email" type="email" required=""${attr("value", email)} class="w-full border border-gray-300 rounded-lg p-2.5 text-primary focus:outline-none focus:border-accent"/></div> <div><label for="login-password" class="block font-bold mb-1">Contraseña</label> <input id="login-password" type="password" required=""${attr("value", password)} class="w-full border border-gray-300 rounded-lg p-2.5 text-primary focus:outline-none focus:border-accent"/></div> <button type="submit" class="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm">Acceder</button></form>`);
  }
  $$renderer.push(`<!--]--> <div class="mt-6 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">¿No tienes una cuenta aún? <a href="/register" class="text-accent font-bold hover:underline ml-1">Regístrate</a></div></div></div>`);
}
export {
  _page as default
};
