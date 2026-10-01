<script lang="ts">
  import { blogPosts } from '$lib/data/blogPosts';
</script>

<section class="py-18 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-headings font-bold text-primary mb-3">
        Blog de viajes en autocaravana y camper
      </h2>
      <p class="text-base sm:text-lg text-primary/80 max-w-3xl mx-auto font-medium leading-relaxed">
        Inspírate con nuestras guías, consejos prácticos y experiencias para viajar en autocaravana. Descubre rutas recomendadas, áreas de pernocta y todo lo que necesitas saber para disfrutar al máximo de tu próxima aventura sobre ruedas.
      </p>
    </div>

    <!-- Blog Posts Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each blogPosts.slice(0, 4) as post}
        <a
          href="/blog/{post.slug}"
          class="group block bg-white border border-[#e0e0e0] rounded-xl overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 h-full flex flex-col"
        >
          <!-- Image with exact aspect ratio 676/380 -->
          <div class="aspect-[676/380] w-full overflow-hidden bg-gray-100">
            <img
              src={post.coverImage}
              alt={post.title}
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- Body -->
          <div class="p-5 flex flex-col flex-1">
            <h3 class="font-body font-bold text-base text-primary text-center group-hover:text-accent transition-colors line-clamp-3">
              {post.title}
            </h3>
          </div>
        </a>
      {/each}
    </div>

    <!-- CTA Button -->
    <div class="text-center mt-12">
      <a
        href="/blog-sobre-ruedas"
        class="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-base px-8 py-3 rounded-full transition-all duration-300"
      >
        Ir al blog y ver todas las entradas
      </a>
    </div>
  </div>
</section>
