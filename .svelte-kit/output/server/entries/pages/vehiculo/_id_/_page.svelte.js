import { l as store_get, k as head, e as escape_html, a as attr, h as stringify, d as ensure_array_like, c as attr_class, u as unsubscribe_stores } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { v as vehicles } from "../../../../chunks/vehicles.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let vehicleId, vehicle, daysCount, baseTotal, petFee, finalTotal;
    let selectedStartDate = "";
    let selectedEndDate = "";
    let withPet = false;
    let activeModalImageIndex = 0;
    vehicleId = store_get($$store_subs ??= {}, "$page", page).params.id;
    vehicle = vehicles.find((v) => String(v.id) === String(vehicleId)) || vehicles[0];
    daysCount = /* @__PURE__ */ (() => {
      return 3;
    })();
    baseTotal = vehicle.dailyPrice * daysCount;
    petFee = 0;
    finalTotal = baseTotal + petFee;
    head("1u8sk84", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(vehicle.title)} | Van &amp; Camp</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", `Alquila ${stringify(vehicle.title)} en ${stringify(vehicle.location)} con Van & Camp. Seguro a todo riesgo y asesoramiento de ruta.`)}/>`);
    });
    $$renderer2.push(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="mb-6"><h1 class="font-headings text-2xl sm:text-4xl font-bold text-primary mb-2">${escape_html(vehicle.title)}</h1> <p class="text-sm font-semibold text-primary/80 flex items-center gap-2"><i class="fas fa-map-marker-alt text-accent"></i> <span>${escape_html(vehicle.location)}</span></p></div> <div class="mb-8"><div class="hidden lg:grid grid-cols-3 gap-3 h-[420px] rounded-2xl overflow-hidden relative"><div class="col-span-2 h-full cursor-pointer overflow-hidden group" role="presentation"><img${attr("src", vehicle.images[0])}${attr("alt", `${stringify(vehicle.title)} - Foto 1`)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div> <div class="grid grid-rows-2 gap-3 h-full"><!--[-->`);
    const each_array = ensure_array_like(vehicle.images.slice(1, 3));
    for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
      let img = each_array[idx];
      $$renderer2.push(`<div class="h-full cursor-pointer overflow-hidden group" role="presentation"><img${attr("src", img)}${attr("alt", `${stringify(vehicle.title)} - Foto ${stringify(idx + 2)}`)} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>`);
    }
    $$renderer2.push(`<!--]--></div> <button type="button" class="absolute bottom-4 right-4 bg-white/95 hover:bg-white text-primary font-bold text-xs px-4 py-2.5 rounded-lg shadow-md flex items-center gap-2 transition-all hover:scale-105 z-10"><i class="fas fa-th text-accent"></i> Ver todas las fotos (${escape_html(vehicle.images.length)})</button></div> <div class="lg:hidden rounded-xl overflow-hidden relative"><img${attr("src", vehicle.images[activeModalImageIndex] || vehicle.images[0])}${attr("alt", vehicle.title)} class="w-full h-64 object-cover"/> <div class="flex gap-2 overflow-x-auto p-2 bg-gray-100"><!--[-->`);
    const each_array_1 = ensure_array_like(vehicle.images);
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let img = each_array_1[i];
      $$renderer2.push(`<button type="button"${attr_class(`w-16 h-12 shrink-0 rounded overflow-hidden border-2 ${activeModalImageIndex === i ? "border-accent" : "border-transparent"}`)}><img${attr("src", img)} alt="" class="w-full h-full object-cover"/></button>`);
    }
    $$renderer2.push(`<!--]--></div></div></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"><div class="lg:col-span-7 space-y-8"><div class="border-b border-gray-200 pb-4"><h2 class="font-headings font-bold text-xl text-primary mb-2">${escape_html(vehicle.type)}</h2> <div class="flex items-center gap-4 text-primary text-sm font-semibold"><span class="flex items-center gap-1.5"><i class="fas fa-users text-accent"></i> ${escape_html(vehicle.seats)} plazas para viajar</span> <span>•</span> <span class="flex items-center gap-1.5"><i class="fas fa-bed text-accent"></i> ${escape_html(vehicle.beds)} plazas para dormir</span></div></div> <div class="text-primary text-base leading-relaxed whitespace-pre-line font-normal">${escape_html(vehicle.description)}</div> <hr class="border-gray-200"/> <div><h3 class="font-headings font-bold text-lg text-primary mb-4 pb-1 border-b-2 border-accent inline-block">Condiciones Generales</h3> <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-primary font-medium"><li class="flex items-center gap-2"><i class="fas fa-check text-green-600"></i> Mayor de ${escape_html(vehicle.conditions?.minAge || 25)} años</li> <li class="flex items-center gap-2"><i class="fas fa-check text-green-600"></i> Carnet B (>${escape_html(vehicle.conditions?.licenseYears || 2)} años)</li> <li class="flex items-center gap-2"><i class="fas fa-check text-green-600"></i> Tarjeta Crédito (Fianza)</li></ul></div> `);
    if (vehicle.equipment) {
      $$renderer2.push(`<!--[0--><div><h3 class="font-headings font-bold text-lg text-primary mb-4 pb-1 border-b-2 border-accent inline-block">Equipamiento Interior</h3> <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-primary font-medium"><!--[-->`);
      const each_array_2 = ensure_array_like(vehicle.equipment.interior || []);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let item = each_array_2[$$index_2];
        $$renderer2.push(`<li class="flex items-center gap-2"><i class="fas fa-check text-green-600"></i> ${escape_html(item)}</li>`);
      }
      $$renderer2.push(`<!--]--></ul></div> <div><h3 class="font-headings font-bold text-lg text-primary mb-4 pb-1 border-b-2 border-accent inline-block">Equipamiento Exterior y Técnico</h3> <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-primary font-medium"><!--[-->`);
      const each_array_3 = ensure_array_like(vehicle.equipment.exterior || []);
      for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
        let item = each_array_3[$$index_3];
        $$renderer2.push(`<li class="flex items-center gap-2"><i class="fas fa-check text-green-600"></i> ${escape_html(item)}</li>`);
      }
      $$renderer2.push(`<!--]--></ul></div> <div><h3 class="font-headings font-bold text-lg text-primary mb-4 pb-1 border-b-2 border-accent inline-block">Incluye</h3> <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-primary font-medium"><!--[-->`);
      const each_array_4 = ensure_array_like(vehicle.equipment.included || []);
      for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
        let item = each_array_4[$$index_4];
        $$renderer2.push(`<li class="flex items-center gap-2"><i class="fas fa-check text-green-600"></i> ${escape_html(item)}</li>`);
      }
      $$renderer2.push(`<!--]--></ul></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div><h3 class="font-headings font-bold text-lg text-primary mb-4 pb-1 border-b-2 border-accent inline-block">Condiciones Económicas</h3> <div class="space-y-2 text-sm text-primary font-medium"><p class="flex items-center gap-2"><i class="fas fa-euro-sign text-accent w-5"></i> <strong>Fianza:</strong> ${escape_html(vehicle.conditions?.deposit || 900)} €</p> <p class="flex items-center gap-2"><i class="fas fa-shield-alt text-accent w-5"></i> <strong>Franquicia Seguro:</strong> ${escape_html(vehicle.conditions?.insuranceExcess || 900)} €</p> <p class="flex items-center gap-2"><i class="fas fa-road text-accent w-5"></i> <strong>Kilometraje:</strong> ${escape_html(vehicle.conditions?.mileage || "200 km/día")}</p> <p class="flex items-center gap-2"><i class="fas fa-headset text-accent w-5"></i> <span>Asistencia en Carretera 24/7 en toda Europa</span></p></div></div></div> <div class="lg:col-span-5"><div class="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 shadow-card space-y-5"><div class="flex items-baseline justify-between border-b border-gray-100 pb-4"><div class="text-primary text-base font-medium">A partir de <span class="font-black text-3xl text-primary">${escape_html(vehicle.dailyPrice)}€</span> / día</div> <span class="text-xs bg-accent/10 text-accent font-bold px-2.5 py-1 rounded-full">Mejor precio online</span></div> <form class="space-y-4"><div class="space-y-2"><label class="block text-xs font-bold text-primary uppercase tracking-wider">Fechas de tu viaje <span class="text-red-500">*</span></label> <div class="grid grid-cols-2 gap-2"><div><span class="block text-[11px] text-gray-500 font-medium">Recogida</span> <input type="date" required=""${attr("value", selectedStartDate)} class="w-full border border-gray-300 rounded-lg p-2 text-xs font-semibold text-primary focus:outline-none focus:border-accent"/></div> <div><span class="block text-[11px] text-gray-500 font-medium">Devolución</span> <input type="date" required=""${attr("value", selectedEndDate)}${attr("min", selectedStartDate)} class="w-full border border-gray-300 rounded-lg p-2 text-xs font-semibold text-primary focus:outline-none focus:border-accent"/></div></div></div> <label class="flex items-center gap-2.5 p-3 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100/70 transition-colors"><input type="checkbox"${attr("checked", withPet, true)} class="w-4 h-4 accent-accent rounded"/> <span class="text-xs text-primary font-bold">Viajo con mascota (+50.00 € tarifa única)</span></label> <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 space-y-2 text-xs text-primary"><div class="flex justify-between"><span>${escape_html(vehicle.dailyPrice)}€ x ${escape_html(daysCount)} ${escape_html(daysCount === 1 ? "día" : "días")}</span> <span class="font-bold">${escape_html(baseTotal.toFixed(2))}€</span></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="pt-2 border-t border-gray-200 flex justify-between text-sm font-bold"><span>Total estimado</span> <span class="text-base text-primary font-black">${escape_html(finalTotal.toFixed(2))}€</span></div></div> <button type="submit" class="w-full bg-accent hover:bg-accent-hover text-white font-headings font-bold text-base py-3.5 rounded-xl shadow-md transition-colors uppercase tracking-wide">Solicitar Reserva</button> <div class="bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs text-gray-600 text-center space-y-1"><p class="font-bold text-primary flex items-center justify-center gap-1.5"><i class="fas fa-shield-alt text-green-600"></i> Pagas ahora: 0,00 €</p> <p>Se enviará una solicitud al anfitrión. El pago del 30% se requerirá únicamente cuando confirme disponibilidad.</p></div></form></div></div></div></div> `);
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
