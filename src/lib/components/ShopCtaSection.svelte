<script lang="ts">
  const shopItems = [
    {
      img: '/assets/1.webp',
      alt: 'Producto 1 de Van & Camp Shop',
      url: 'https://vanandcamp.com/tienda/'
    },
    {
      img: '/assets/2.webp',
      alt: 'Producto 2 de Van & Camp Shop',
      url: 'https://vanandcamp.com/tienda/'
    },
    {
      img: '/assets/3.webp',
      alt: 'Producto 3 de Van & Camp Shop',
      url: 'https://vanandcamp.com/tienda/'
    }
  ];
</script>

<!-- COLOR UPDATE: Background set to Principal Mint Color (#79C9B8) -->
<section class="py-20 bg-[#79C9B8] text-center text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="font-headings text-2xl sm:text-3xl lg:text-4xl font-bold mb-12">
      Descubre todo lo que necesitas en nuestra
      <!-- COLOR UPDATE: Text styled with Forest Green (#3E5F4A) shifting to Deep Blue (#1E4E6C) on hover -->
      <a
        href="https://vanandcamp.com/tienda/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-[#3E5F4A] hover:text-[#1E4E6C] transition-colors underline decoration-2 decoration-[#3E5F4A] hover:decoration-[#1E4E6C]"
      >
        Van &amp; Camp shop
      </a>
    </h2>

    <!-- Shop Product Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {#each shopItems as item}
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          class="group block bg-white rounded-xl overflow-hidden shadow-card hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300"
        >
          <img
            src={item.img}
            alt={item.alt}
            loading="lazy"
            class="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </a>
      {/each}
    </div>

    <!-- Shop Final CTA Button -->
    <div>
      <!-- COLOR UPDATE: Button styled with Deep Blue (#1E4E6C) base and Forest Green (#3E5F4A) hover interaction -->
      <a
        href="https://vanandcamp.com/tienda/"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center bg-[#1E4E6C] hover:bg-[#3E5F4A] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-98"
      >
        Van &amp; Camp Shop
      </a>
    </div>
  </div>
</section>
