<script lang="ts">
  import { experiences } from '$lib/data/experiences';
  import ExperienceCard from './ExperienceCard.svelte';
</script>

<!-- COLOR UPDATE: Changed standard bg-[#f8f9fa] to a custom soft Forest Green tint (#3E5F4A at 5% opacity) -->
<section class="py-20 bg-[#3E5F4A]/5">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <!-- COLOR UPDATE: Replaced text-primary with Deep Blue (#1E4E6C) -->
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-headings font-bold text-[#1E4E6C] mb-3">
        Viaja en camper con experiencias incluidas
      </h2>
      <!-- COLOR UPDATE: Replaced text-primary with Deep Blue (#1E4E6C) -->
      <p class="text-base sm:text-lg text-[#1E4E6C]/90 max-w-2xl mx-auto font-medium">
        Alquila tu camper y disfruta de rutas, actividades y pernoctas ya organizadas, todo en un solo pack a precio cerrado
      </p>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each experiences as exp}
        <div>
          <ExperienceCard {exp} />
        </div>
      {/each}
    </div>

    <!-- Bottom CTA Button -->
    <div class="text-center mt-12">
      <!-- COLOR UPDATE: Replaced placeholder abstract class with explicit Deep Blue (#1E4E6C) base and Principal Mint (#79C9B8) hover interaction -->
      <a 
        href="/experiencias" 
        class="inline-flex items-center justify-center bg-[#1E4E6C] hover:bg-[#79C9B8] text-white font-bold text-base px-6 py-3.5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 active:scale-98"
      >
        Ver todos los paquetes y experiencias
      </a>
    </div>
  </div>
</section>
