import { l as store_get, k as head, e as escape_html, a as attr, h as stringify, u as unsubscribe_stores } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { b as blogPosts } from "../../../../chunks/blogPosts.js";
import { h as html } from "../../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let slug, post;
    slug = store_get($$store_subs ??= {}, "$page", page).params.slug;
    post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];
    head("1teoznn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(post.title)} | Blog Van &amp; Camp</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", post.summary)}/>`);
    });
    $$renderer2.push(`<article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><nav class="text-xs text-gray-500 mb-6 flex items-center gap-2"><a href="/" class="hover:text-primary">Inicio</a> <span>/</span> <a href="/blog-sobre-ruedas" class="hover:text-primary">Blog sobre ruedas</a> <span>/</span> <span class="text-primary truncate">${escape_html(post.title)}</span></nav> <header class="mb-8"><h1 class="font-headings text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">${escape_html(post.title)}</h1> <div class="flex items-center gap-4 text-xs sm:text-sm text-gray-500 font-medium"><span>Por <strong class="text-primary">${escape_html(post.author)}</strong></span> <span>•</span> <span>${escape_html(post.date)}</span> `);
    if (post.readTime) {
      $$renderer2.push(`<!--[0--><span>•</span> <span>${escape_html(post.readTime)}</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></header> <div class="rounded-2xl overflow-hidden shadow-lg mb-10 aspect-[16/9] bg-gray-100"><img${attr("src", post.coverImage)}${attr("alt", post.title)} class="w-full h-full object-cover"/></div> <div class="prose prose-lg max-w-none text-primary space-y-6 text-base sm:text-lg leading-relaxed">`);
    if (post.contentHtml) {
      $$renderer2.push(`<!--[0-->${html(post.contentHtml)}`);
    } else {
      $$renderer2.push(`<!--[-1--><p class="lead font-medium text-lg">${escape_html(post.summary)}</p> <p>Viajar en autocaravana o camper es una de las formas más gratificantes de conectar con la naturaleza y disfrutar de la libertad que solo la carretera puede ofrecer.</p> <p>En Van &amp; Camp seleccionamos los mejores vehículos y anfitriones para que solo tengas que preocuparte de coleccionar recuerdos y compartir momentos únicos.</p>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4"><a href="/blog-sobre-ruedas" class="inline-flex items-center gap-2 text-primary hover:text-accent font-bold text-sm transition-colors"><i class="fas fa-arrow-left"></i> Volver al blog</a> <div class="flex items-center gap-3"><span class="text-xs font-bold text-gray-500 uppercase">Compartir:</span> <a${attr("href", `https://wa.me/?text=${stringify(encodeURIComponent(post.title))}`)} target="_blank" rel="noopener noreferrer" class="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm" aria-label="Compartir en WhatsApp"><i class="fab fa-whatsapp"></i></a></div></div></article>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
