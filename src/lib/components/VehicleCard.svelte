<script lang="ts">
  import type { Vehicle } from '$lib/types';

  export let vehicle: Vehicle;

  let currentImageIndex = 0;

  function prevImage(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    currentImageIndex =
      currentImageIndex > 0 ? currentImageIndex - 1 : vehicle.images.length - 1;
  }

  function nextImage(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    currentImageIndex =
      currentImageIndex < vehicle.images.length - 1 ? currentImageIndex + 1 : 0;
  }
</script>

<div
  class="group relative bg-white border border-[#3E5F4A]/20 rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.05)] hover:-translate-y-1.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col overflow-hidden h-full"
>
  <!-- Photo Carousel Container (200px height) -->
  <div class="relative w-full h-[200px] overflow-hidden bg-gray-100">
    <a href="/vehiculo/{vehicle.id}" class="block w-full h-full">
      <img
        src={vehicle.images[currentImageIndex] || vehicle.images[0]}
        alt={vehicle.title}
        loading="lazy"
        class="w-full h-full object-cover transition-opacity duration-300"
      />
    </a>

    <!-- Prev/Next Controls (visible if more than 1 image) -->
    {#if vehicle.images.length > 1}
      <button
        type="button"
        on:click={prevImage}
        aria-label="Foto anterior"
        class="absolute left-2 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity z-20"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button
        type="button"
        on:click={nextImage}
        aria-label="Siguiente foto"
        class="absolute right-2 top-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity z-20"
      >
        <i class="fas fa-chevron-right"></i>
      </button>

      <!-- Carousel Bullets Indicator -->
      <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20">
        {#each vehicle.images.slice(0, 5) as _, idx}
          <span
            class="w-1.5 h-1.5 rounded-full transition-all {currentImageIndex === idx ? 'bg-[#79C9B8] w-3' : 'bg-white/70'}"
          ></span>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Card Details Body -->
  <div class="p-4 flex flex-col flex-1">
    <h3 class="font-headings font-bold text-base sm:text-lg text-[#1E4E6C] truncate mb-2">
      <a href="/vehiculo/{vehicle.id}" class="hover:text-[#79C9B8] transition-colors">
        {vehicle.title}
      </a>
    </h3>

    <div class="space-y-1 text-[#1E4E6C] text-xs font-semibold mb-4 flex-1">
      <div class="flex items-center gap-2">
        <i class="fas fa-map-marker-alt text-[#3E5F4A]/70 w-4"></i>
        <span class="truncate">{vehicle.location}</span>
      </div>
      <div class="flex items-center gap-2">
        <i class="fas fa-users text-[#3E5F4A]/70 w-4"></i>
        <span>{vehicle.seats} plazas</span>
      </div>
    </div>

    <!-- Price Row -->
    <div class="pt-3 border-t border-[#3E5F4A]/10 flex items-center justify-between mt-auto">
      <div class="text-[#1E4E6C] text-sm font-medium">
        Desde <span class="font-black text-lg text-[#1E4E6C]">{vehicle.dailyPrice}€</span>/día
      </div>
      <a
        href="/vehiculo/{vehicle.id}"
        class="text-xs bg-[#1E4E6C] hover:bg-[#79C9B8] text-white font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm"
      >
        Ver vehículo
      </a>
    </div>
  </div>
</div>
