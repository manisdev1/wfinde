<script lang="ts">
  import { vehicles } from '$lib/data/vehicles';
  import VehicleCard from './VehicleCard.svelte';
</script>

<!-- COLOR UPDATE: Background set to Principal Mint Color (#79C9B8) -->
<section class="py-18 bg-[#79C9B8]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <!-- COLOR UPDATE: Header changed to Deep Blue (#1E4E6C) for high contrast readability -->
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-headings font-bold text-[#1E4E6C] mb-3">
        Novedades en alquiler de autocaravanas y campers
      </h2>
      <p class="text-base sm:text-lg text-white max-w-2xl mx-auto font-medium">
        Descubre los últimos modelos de autocaravanas y campers disponibles para que elijas la que mejor se adapta a tu viaje.
      </p>
    </div>

    <!-- Vehicles Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {#each vehicles.slice(0, 4) as vehicle}
        <div>
          <VehicleCard {vehicle} />
        </div>
      {/each}
    </div>

    <!-- CTA Button -->
    <div class="text-center mt-12">
      <!-- COLOR UPDATE: Button styled with Deep Blue (#1E4E6C) base and Forest Green (#3E5F4A) hover interaction -->
      <a 
        href="/explorar" 
        class="inline-flex items-center justify-center bg-[#1E4E6C] hover:bg-[#3E5F4A] text-white font-bold text-base px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-98"
      >
        Ver todos los vehículos disponibles
      </a>
    </div>
  </div>
</section>
