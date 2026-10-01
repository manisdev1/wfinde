import { k as head, a as attr } from "../../../chunks/index.js";
function _page($$renderer) {
  let name = "";
  let email = "";
  let password = "";
  let acceptTerms = false;
  head("52fghe", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Registro | Van &amp; Camp</title>`);
    });
  });
  $$renderer.push(`<div class="max-w-md mx-auto px-4 py-16"><div class="bg-white rounded-2xl p-8 shadow-card border border-gray-100 text-primary"><div class="text-center mb-8"><img src="/assets/LOGO.webp" alt="Van &amp; Camp" class="h-12 w-auto mx-auto mb-4"/> <h1 class="font-headings font-bold text-2xl">Crear una cuenta</h1> <p class="text-xs text-gray-500 mt-1">Únete a la mayor comunidad de viajes sobre ruedas</p></div> `);
  {
    $$renderer.push(`<!--[0--><form class="space-y-4 text-xs sm:text-sm"><div><label for="reg-name" class="block font-bold mb-1">Nombre completo</label> <input id="reg-name" type="text" required=""${attr("value", name)} class="w-full border border-gray-300 rounded-lg p-2.5 text-primary focus:outline-none focus:border-accent"/></div> <div><label for="reg-email" class="block font-bold mb-1">Correo electrónico</label> <input id="reg-email" type="email" required=""${attr("value", email)} class="w-full border border-gray-300 rounded-lg p-2.5 text-primary focus:outline-none focus:border-accent"/></div> <div><label for="reg-password" class="block font-bold mb-1">Contraseña</label> <input id="reg-password" type="password" required="" minlength="6"${attr("value", password)} class="w-full border border-gray-300 rounded-lg p-2.5 text-primary focus:outline-none focus:border-accent"/></div> <label class="flex items-start gap-2 text-xs text-gray-600 cursor-pointer pt-1"><input type="checkbox" required=""${attr("checked", acceptTerms, true)} class="mt-0.5 accent-accent"/> <span>Acepto los términos de servicio y la política de privacidad.</span></label> <button type="submit" class="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm">Crear cuenta</button></form>`);
  }
  $$renderer.push(`<!--]--> <div class="mt-6 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">¿Ya tienes cuenta? <a href="/login" class="text-accent font-bold hover:underline ml-1">Inicia sesión</a></div></div></div>`);
}
export {
  _page as default
};
