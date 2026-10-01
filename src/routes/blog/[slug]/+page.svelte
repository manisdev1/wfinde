<script lang="ts">
  import { page } from '$app/stores';
  import { blogPosts } from '$lib/data/blogPosts';

  $: slug = $page.params.slug;
  $: post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];
</script>

<svelte:head>
  <title>{post.title} | Blog Van &amp; Camp</title>
  <meta name="description" content={post.summary} />
</svelte:head>

<article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <!-- Breadcrumbs -->
  <nav class="text-xs text-gray-500 mb-6 flex items-center gap-2">
    <a href="/" class="hover:text-primary">Inicio</a>
    <span>/</span>
    <a href="/blog-sobre-ruedas" class="hover:text-primary">Blog sobre ruedas</a>
    <span>/</span>
    <span class="text-primary truncate">{post.title}</span>
  </nav>

  <!-- Title & Meta Header -->
  <header class="mb-8">
    <h1 class="font-headings text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
      {post.title}
    </h1>
    <div class="flex items-center gap-4 text-xs sm:text-sm text-gray-500 font-medium">
      <span>Por <strong class="text-primary">{post.author}</strong></span>
      <span>•</span>
      <span>{post.date}</span>
      {#if post.readTime}
        <span>•</span>
        <span>{post.readTime}</span>
      {/if}
    </div>
  </header>

  <!-- Featured Image -->
  <div class="rounded-2xl overflow-hidden shadow-lg mb-10 aspect-[16/9] bg-gray-100">
    <img
      src={post.coverImage}
      alt={post.title}
      class="w-full h-full object-cover"
    />
  </div>

  <!-- Content -->
  <div class="prose prose-lg max-w-none text-primary space-y-6 text-base sm:text-lg leading-relaxed">
    {#if post.contentHtml}
      {@html post.contentHtml}
    {:else}
      <p class="lead font-medium text-lg">{post.summary}</p>
      <p>
        Viajar en autocaravana o camper es una de las formas más gratificantes de conectar con la naturaleza y disfrutar de la libertad que solo la carretera puede ofrecer.
      </p>
      <p>
        En Van &amp; Camp seleccionamos los mejores vehículos y anfitriones para que solo tengas que preocuparte de coleccionar recuerdos y compartir momentos únicos.
      </p>
    {/if}
  </div>

  <!-- Share & Back -->
  <div class="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
    <a
      href="/blog-sobre-ruedas"
      class="inline-flex items-center gap-2 text-primary hover:text-accent font-bold text-sm transition-colors"
    >
      <i class="fas fa-arrow-left"></i> Volver al blog
    </a>

    <div class="flex items-center gap-3">
      <span class="text-xs font-bold text-gray-500 uppercase">Compartir:</span>
      <a
        href="https://wa.me/?text={encodeURIComponent(post.title)}"
        target="_blank"
        rel="noopener noreferrer"
        class="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm"
        aria-label="Compartir en WhatsApp"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  </div>
</article>
