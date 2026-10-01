import { j as attr_style, d as ensure_array_like, e as escape_html, h as stringify, a as attr, k as head } from "../../chunks/index.js";
import "clsx";
import { C as ClaimsSection, A as AboutFeatureSection } from "../../chunks/AboutFeatureSection.js";
import { e as experiences } from "../../chunks/experiences.js";
import { E as ExperienceCard } from "../../chunks/ExperienceCard.js";
import { v as vehicles } from "../../chunks/vehicles.js";
import { V as VehicleCard } from "../../chunks/VehicleCard.js";
import { b as blogPosts } from "../../chunks/blogPosts.js";
function Hero($$renderer) {
  $$renderer.push(`<section class="relative h-[90vh] md:h-[85vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden"><img src="/assets/vanandcamp.webp" alt="Alquiler autocaravanas" class="absolute inset-0 w-full h-full object-cover md:hidden" loading="eager"/> <video playsinline="" autoplay="" muted="" loop="" poster="/assets/hero-poster.webp" class="absolute inset-0 w-full h-full object-cover hidden md:block"><source src="https://vanandcamp.com/assets/7967008-uhd_3840_2160_25fps-1.mp4" type="video/mp4"/></video> <div class="absolute inset-0 bg-primary/60 z-10"></div> <div class="relative z-20 max-w-4xl mx-auto px-4 py-8"><h1 class="font-headings text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-white leading-tight mb-4 drop-shadow-[2px_2px_10px_rgba(0,0,0,0.5)] uppercase">Alquiler de Autocaravanas y Campers</h1> <p class="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-8 font-medium">Tu viaje, tus historias: nosotros ponemos la calidad y el cuidado, tú pones los recuerdos</p> <a href="/explorar" class="btn-hero shadow-lg"><i class="fas fa-search mr-2"></i> Alquila tu Camper o Autocaravana</a></div></section>`);
}
const reviews = [
  {
    id: "1",
    author: "carlos de la morena",
    rating: 5,
    relativeTime: "Hace 3 meses",
    text: "Aunque no tenían como ubicación Asturias, les escribimos un mensaje a Van & Camp y nos dieron 3 precios de alquiler de empresas que están allí. Cogímos la camper en Oviedo y estuvimos sobre todo por la zona de Llanes y alrededores. Mucho frío y lluvia algún día, pero aun así el viaje fue una pasada. Poca gente, pueblos tranquilos y el equipo de Van & Camp, especialmente Ainhoa, muy majetes"
  },
  {
    id: "2",
    author: "jorge Grado",
    rating: 5,
    relativeTime: "Hace 4 meses",
    text: "Viendo el poco tiempo que llevan nos la jugamos un poco, porque no sabíamos que tal íba a ser. Solamente puedo decir que brutal, nos fuimos mi chica y yo 5 días a hacer una ruta por Cataluña, parte de la costa de Girona y nos flipó. Habíamos alquilado una vez con otra empresa y tuvimos una mala experiencia porque tardaban mucho en darnos respuestas, tuvimos también problemas con el vehículo, pero con estos chicos la verdad que muy bien. Alquilamos con una empresa que tienen ellos publicada en Barcelona y literalmente quitamos los plásticos de los colchones, a estrenar todo. Ahora he reservado un vehículo para irnos con otra pareja en semana santa a Galicia"
  },
  {
    id: "3",
    author: "aitor garcia",
    rating: 5,
    relativeTime: "Hace 5 meses",
    text: "Nos fuimos toda la familia en un autocaravana capuchina muy amplia y con mucho espacio. La verdad que con Van & Camp muy contentos porque nos ayudaron a planificar la ruta, ya que teníamos dudas de si visitar una zona de Cadiz u otra. Hemos alquilado otras campers bastantes veces y este servicio no lo había visto nunca, que estuvieran contigo planificando, ayudándote en donde pernoctar, etc. Muy contentos, a pesar que en el viaje nos hizo malo."
  },
  {
    id: "4",
    author: "Gonzalo Velilla",
    rating: 5,
    relativeTime: "Hace 6 meses",
    text: "Experiencia muy buena, nos lo recomendaron unos amigos que habían alquilado con ellos. Nuestra experiencia: Alquilamos una camper en navidades en Madrid para ir a la sierra y la experiencia fue de 10 desde el primer momento. Nos ayudaron a elegir el vehículo porque teníamos dudas entre una camper grande o una más pequeña. Estuvieron todo el viaje pendientes de nosotros y nos asesoraron con la ruta y varios sitios para dormir que no conocíamos. Lo que más me gustó es que hay alguien detrás, tienen un equipo humano siempre pendiente."
  },
  {
    id: "5",
    author: "ABB",
    rating: 5,
    relativeTime: "Hace 7 meses",
    text: "Nos fuimos 3 amigos a esquiar a formigal. La verdad que acojonados, porque nos cayó una nevada tremenda. Son una pasada estos vehículos lo calientes que son por dentro. Nos quedamos en el área de Sabiñánigo y muy bien. No pudimos esquiar mucho, pero el pueblo es muy bonito y nos pudimos acercar a Lanuza que también es muy chulo."
  },
  {
    id: "6",
    author: "Itziar Uriarte",
    rating: 5,
    relativeTime: "Hace 8 meses",
    text: "Equipazo Van & Camp, trato cercano y siempre pendientes. Alquilamos una camper para recorrer la zona norte (País Vasco y Cantabria) y la experiencia fue muy buena. Habiamos alquilado antes con otra empresa y no tiene nada que ver. Estos chicos lo están haciendo muy bien porque se preocupan en que el viajero tenga una buena experiencia. Seguro que les va a ir fenomenal. Estuvimos viendo algunos mercados de navidad y el viaje fue super chulo. Ellos nos ayudaron a elegir sitios de pernocta que tenían localizados que estaban de cine. Repetiremos sin duda"
  }
];
function ReviewsCarousel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentIndex = 0;
    $$renderer2.push(`<section class="py-16 bg-[#fafafa]"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-2xl sm:text-3xl lg:text-4xl font-headings font-bold text-primary mb-2">Comentarios de nuestros viajeros</h2> <div class="w-16 h-1 bg-accent mx-auto mb-3 rounded-full"></div> <p class="text-base sm:text-lg text-primary font-medium">¿Por qué nos eligen?</p></div> <div class="relative"><div class="overflow-hidden"><div class="flex transition-transform duration-300 ease-out -mx-3"${attr_style(`transform: translateX(-${stringify(currentIndex * (100 / 1))}%) md:transform: none;`)}></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
    const each_array = ensure_array_like(reviews.slice(0, 3));
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let review = each_array[$$index_1];
      $$renderer2.push(`<div class="bg-white rounded-xl p-7 shadow-[0_5px_15px_rgba(0,0,0,0.04)] border border-gray-100 h-[340px] flex flex-col relative hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300"><svg class="absolute top-6 right-6 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path></svg> <div class="text-accent text-base flex gap-1 mb-3"><!--[-->`);
      const each_array_1 = ensure_array_like(Array(5));
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        each_array_1[$$index];
        $$renderer2.push(`<i class="fas fa-star"></i>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="flex-1 overflow-y-auto pr-2 mb-4 relative"><p class="text-primary text-[0.92rem] leading-relaxed italic line-clamp-5">"${escape_html(review.text)}"</p></div> <div class="mt-auto pt-3 border-t border-primary/10 flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary text-xl shrink-0"><i class="fas fa-user-circle"></i></div> <div><h4 class="font-headings font-bold text-primary text-sm capitalize">${escape_html(review.author)}</h4> `);
      if (review.relativeTime) {
        $$renderer2.push(`<!--[0--><span class="text-xs text-gray-500">${escape_html(review.relativeTime)}</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div> <div class="text-center mt-12"><a href="https://g.page/r/Ceq26CLeNRGUEAE/review" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-headings font-bold text-base px-8 py-3 rounded-full shadow-sm hover:-translate-y-0.5 transition-all duration-300"><i class="fab fa-google"></i> Ver todas las reseñas</a></div></div></section>`);
  });
}
function ExperiencesGrid($$renderer) {
  $$renderer.push(`<section class="py-20 bg-[#f8f9fa]"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-2xl sm:text-3xl lg:text-4xl font-headings font-bold text-primary mb-3">Viaja en camper con experiencias incluidas</h2> <p class="text-base sm:text-lg text-primary max-w-2xl mx-auto font-medium">Alquila tu camper y disfruta de rutas, actividades y pernoctas ya organizadas, todo en un solo pack a precio cerrado</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
  const each_array = ensure_array_like(experiences);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let exp = each_array[$$index];
    $$renderer.push(`<div>`);
    ExperienceCard($$renderer, { exp });
    $$renderer.push(`<!----></div>`);
  }
  $$renderer.push(`<!--]--></div> <div class="text-center mt-12"><a href="/experiencias" class="btn-ver">Ver todos los paquetes y experiencias</a></div></div></section>`);
}
function VehiclesShowcase($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section class="py-18 bg-primary"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-2xl sm:text-3xl lg:text-4xl font-headings font-bold text-accent mb-3">Novedades en alquiler de autocaravanas y campers</h2> <p class="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-medium">Descubre los últimos modelos de autocaravanas y campers disponibles para que elijas la que mejor se adapta a tu viaje.</p></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"><!--[-->`);
    const each_array = ensure_array_like(vehicles.slice(0, 4));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let vehicle = each_array[$$index];
      $$renderer2.push(`<div>`);
      VehicleCard($$renderer2, { vehicle });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="text-center mt-12"><a href="/explorar" class="btn-hero shadow-lg">Ver todos los vehículos disponibles</a></div></div></section>`);
  });
}
function BlogSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section class="py-18 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-2xl sm:text-3xl lg:text-4xl font-headings font-bold text-primary mb-3">Blog de viajes en autocaravana y camper</h2> <p class="text-base sm:text-lg text-primary/80 max-w-3xl mx-auto font-medium leading-relaxed">Inspírate con nuestras guías, consejos prácticos y experiencias para viajar en autocaravana. Descubre rutas recomendadas, áreas de pernocta y todo lo que necesitas saber para disfrutar al máximo de tu próxima aventura sobre ruedas.</p></div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
    const each_array = ensure_array_like(blogPosts.slice(0, 4));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let post = each_array[$$index];
      $$renderer2.push(`<a${attr("href", `/blog/${stringify(post.slug)}`)} class="group block bg-white border border-[#e0e0e0] rounded-xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 h-full flex flex-col"><div class="aspect-[676/380] w-full overflow-hidden bg-gray-100"><img${attr("src", post.coverImage)}${attr("alt", post.title)} loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/></div> <div class="p-5 flex flex-col flex-1"><h3 class="font-body font-bold text-base text-primary text-center group-hover:text-accent transition-colors line-clamp-3">${escape_html(post.title)}</h3></div></a>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="text-center mt-12"><a href="/blog-sobre-ruedas" class="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-base px-8 py-3 rounded-full transition-all duration-300">Ir al blog y ver todas las entradas</a></div></div></section>`);
  });
}
function ShopCtaSection($$renderer) {
  const shopItems = [
    {
      img: "/assets/1.webp",
      alt: "Producto 1 de Van & Camp Shop",
      url: "https://vanandcamp.com/tienda/"
    },
    {
      img: "/assets/2.webp",
      alt: "Producto 2 de Van & Camp Shop",
      url: "https://vanandcamp.com/tienda/"
    },
    {
      img: "/assets/3.webp",
      alt: "Producto 3 de Van & Camp Shop",
      url: "https://vanandcamp.com/tienda/"
    }
  ];
  $$renderer.push(`<section class="py-20 bg-primary text-center text-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="font-headings text-2xl sm:text-3xl lg:text-4xl font-bold mb-12">Descubre todo lo que necesitas en nuestra <a href="https://vanandcamp.com/tienda/" target="_blank" rel="noopener noreferrer" class="text-accent hover:text-white transition-colors underline decoration-2 decoration-accent hover:decoration-white">Van &amp; Camp shop</a></h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"><!--[-->`);
  const each_array = ensure_array_like(shopItems);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$renderer.push(`<a${attr("href", item.url)} target="_blank" rel="noopener noreferrer" class="group block bg-white rounded-xl overflow-hidden shadow-card hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300"><img${attr("src", item.img)}${attr("alt", item.alt)} loading="lazy" class="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"/></a>`);
  }
  $$renderer.push(`<!--]--></div> <div><a href="https://vanandcamp.com/tienda/" target="_blank" rel="noopener noreferrer" class="btn-hero text-lg shadow-lg">Van &amp; Camp Shop</a></div></div></section>`);
}
function OrganizedTripsSection($$renderer) {
  const trips = [
    {
      title: "El Camino de Santiago en Camper o en Autocaravana",
      img: "/assets/camino-santiago.webp",
      url: "/contacto?interes=camino-de-santiago"
    },
    {
      title: "Viaje a Marruecos en Camper o en Autocaravana",
      img: "/assets/viaje-marruecos.webp",
      url: "/contacto?interes=viaje-marruecos"
    }
  ];
  $$renderer.push(`<section class="py-20 bg-white"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-2xl sm:text-3xl lg:text-4xl font-headings font-bold text-primary mb-3">Viajes únicos en autocaravana o camper</h2> <p class="text-base sm:text-lg text-accent font-medium max-w-xl mx-auto">Apúntate a viajar en grupo o por tu cuenta en autocaravana o camper</p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"><!--[-->`);
  const each_array = ensure_array_like(trips);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let trip = each_array[$$index];
    $$renderer.push(`<a${attr("href", trip.url)} class="group block bg-white border border-[#e0e0e0] rounded-xl overflow-hidden shadow-card hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300 flex flex-col h-full"><div class="w-full h-[220px] overflow-hidden bg-gray-100"><img${attr("src", trip.img)}${attr("alt", trip.title)} loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/></div> <div class="p-6 text-center flex-1 flex items-center justify-center"><h3 class="font-headings font-bold text-xl text-primary group-hover:text-accent transition-colors">${escape_html(trip.title)}</h3></div></a>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
function _page($$renderer) {
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Van &amp; Camp | Alquiler de Autocaravanas y Campers</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Tu próxima aventura comienza aquí. Alquiler de autocaravanas y campers con asesoramiento personalizado y seguro a todo riesgo. ¡Reserva tu viaje hoy!"/> <link rel="canonical" href="https://vanandcamp.com/"/>`);
  });
  Hero($$renderer);
  $$renderer.push(`<!----> `);
  ClaimsSection($$renderer);
  $$renderer.push(`<!----> `);
  ReviewsCarousel($$renderer);
  $$renderer.push(`<!----> `);
  ExperiencesGrid($$renderer);
  $$renderer.push(`<!----> `);
  AboutFeatureSection($$renderer);
  $$renderer.push(`<!----> `);
  VehiclesShowcase($$renderer);
  $$renderer.push(`<!----> `);
  BlogSection($$renderer);
  $$renderer.push(`<!----> `);
  ShopCtaSection($$renderer);
  $$renderer.push(`<!----> `);
  OrganizedTripsSection($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
