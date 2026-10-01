<script lang="ts">
</script>

<section class="relative h-[90vh] md:h-[85vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
  <!-- Mobile Image Background -->
  <img
    src="/assets/vanandcamp.webp"
    alt="Alquiler autocaravanas"
    class="absolute inset-0 w-full h-full object-cover md:hidden"
    loading="eager"
  />

  <!-- Desktop Video Background / Poster -->
  <video
    playsinline
    autoplay
    muted
    loop
    poster="/assets/hero-poster.webp"
    class="absolute inset-0 w-full h-full object-cover hidden md:block"
  >
    <source src="https://vanandcamp.com/assets/7967008-uhd_3840_2160_25fps-1.mp4" type="video/mp4" />
  </video>

  <!-- COLOR UPDATE: Changed Navy Overlay to Deep Blue (#1E4E6C) with 60% opacity -->
  <div class="absolute inset-0 bg-[#1E4E6C]/60 z-10"></div>

  <!-- Hero Content -->
  <div class="relative z-20 max-w-4xl mx-auto px-4 py-8">
    <h1
      class="font-headings text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-white leading-tight mb-4 drop-shadow-[2px_2px_10px_rgba(0,0,0,0.5)] uppercase"
    >
      Alquiler de Autocaravanas y Campers
    </h1>
    <p class="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-8 font-medium">
      Tu viaje, tus historias: nosotros ponemos la calidad y el cuidado, tú pones los recuerdos
    </p>
    
    <!-- COLOR UPDATE: Replaced abstract class with explicit Deep Blue (#1E4E6C) base and Principal Mint (#79C9B8) hover effect -->
    <a 
      href="/explorar" 
      class="inline-flex items-center justify-center bg-[#1E4E6C] hover:bg-[#79C9B8] text-white font-bold text-base sm:text-lg px-6 py-3.5 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-98"
    >
      <i class="fas fa-search mr-2"></i> Alquila tu Camper o Autocaravana
    </a>
  </div>
</section>
