import { k as head, d as ensure_array_like, a as attr, h as stringify, e as escape_html } from "../../../chunks/index.js";
import { b as blogPosts } from "../../../chunks/blogPosts.js";
function _page($$renderer) {
  head("wvf1g", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Blog sobre ruedas | Van &amp; Camp</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Guías, consejos y artículos prácticos sobre viajar en autocaravana y furgoneta camper."/>`);
  });
  $$renderer.push(`<section class="relative py-24 md:py-32 bg-cover bg-center text-center text-white" style="background-image: url('/assets/blog-hero-bg.webp');"><div class="absolute inset-0 bg-black/50 z-10"></div> <div class="relative z-20 max-w-4xl mx-auto px-4"><h1 class="font-headings text-4xl sm:text-6xl font-black text-white mb-3">Blog sobre ruedas</h1> <p class="text-lg sm:text-xl text-white/90 font-medium">Visita nuestros planes y explora tu propio camino.</p></div></section> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
  const each_array = ensure_array_like(blogPosts);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let post = each_array[$$index];
    $$renderer.push(`<div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col h-full"><a${attr("href", `/blog/${stringify(post.slug)}`)} class="block aspect-[16/9] overflow-hidden bg-gray-100"><img${attr("src", post.coverImage)}${attr("alt", post.title)} loading="lazy" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/></a> <div class="p-6 flex flex-col flex-1"><h2 class="font-headings font-bold text-lg sm:text-xl text-primary mb-2 line-clamp-2 hover:text-accent transition-colors"><a${attr("href", `/blog/${stringify(post.slug)}`)}>${escape_html(post.title)}</a></h2> <div class="text-xs text-gray-500 mb-3">Por ${escape_html(post.author)} | ${escape_html(post.date)}</div> <p class="text-sm text-gray-600 line-clamp-3 mb-6 leading-relaxed flex-1">${escape_html(post.summary)}</p> <div class="mt-auto pt-2"><a${attr("href", `/blog/${stringify(post.slug)}`)} class="inline-block bg-accent hover:bg-accent-hover text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg transition-colors shadow-sm">Leer Más</a></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div>`);
}
export {
  _page as default
};
