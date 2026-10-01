<script lang="ts">
  import { experiences } from '$lib/data/experiences';
  import ExperienceCard from '$lib/components/ExperienceCard.svelte';

  let selectedTravelers = '';
  let selectedDuration = '';
  let maxPrice = 1500;

  $: filteredExperiences = experiences.filter((exp) => {
    if (selectedTravelers && exp.maxTravelers < parseInt(selectedTravelers)) return false;
    if (selectedDuration && exp.durationDays < parseInt(selectedDuration)) return false;
    if (exp.discountedPrice > maxPrice) return false;
    return true;
  });

  function resetFilters() {
    selectedTravelers = '';
    selectedDuration = '';
    maxPrice = 1500;
  }
</script>

<svelte:head>
  <title>Experiencias en Camper | Van &amp; Camp</title>
  <meta name="description" content="Packs de viaje en autocaravana con actividades y pernocta incluidas. Precios cerrados y la mejor asesoría." />
</svelte:head>

<!-- Hero Section -->
<section class="relative h-[380px] md:h-[450px] flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center" style="background-image: url('/assets/experiencias.webp');">
  <div class="absolute inset-0 bg-primary/40 z-10"></div>
  <div class="relative z-20 max-w-4xl mx-auto px-4">
    <h1 class="font-headings text-3xl sm:text-5xl font-black text-white mb-4 drop-shadow-md">
      Viaja en camper con experiencias incluidas
    </h1>
    <p class="text-base sm:text-xl text-white/95 font-medium max-w-2xl mx-auto">
      Alquila tu camper y disfruta de rutas, actividades y pernoctas ya organizadas, todo en un solo pack a precio cerrado
    </p>
  </div>
</section>

<!-- Main Container with Sidebar Filters -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
    <!-- Sidebar Filters (3 Cols) -->
    <aside class="lg:col-span-3">
      <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm sticky top-24 space-y-6">
        <div class="flex items-center justify-between border-b border-gray-100 pb-4">
          <h2 class="font-headings font-bold text-lg text-primary flex items-center gap-2">
            <i class="fas fa-sliders-h text-accent"></i> Filtros
          </h2>
          {#if selectedTravelers || selectedDuration || maxPrice < 1500}
            <button
              type="button"
              on:click={resetFilters}
              class="text-xs text-accent hover:underline font-bold"
            >
              Reset
            </button>
          {/if}
        </div>

        <!-- Travelers Filter -->
        <div>
          <label class="block text-xs font-bold text-primary mb-2 flex items-center gap-2">
            <i class="fas fa-user-friends text-primary/70"></i> Viajeros
          </label>
          <select
            bind:value={selectedTravelers}
            class="w-full border border-gray-200 rounded-lg p-2.5 text-sm font-medium text-primary focus:outline-none focus:border-primary"
          >
            <option value="">Cualquier cantidad</option>
            <option value="2">2 personas</option>
            <option value="3">3 personas</option>
            <option value="4">4 personas</option>
            <option value="5">5 o más personas</option>
          </select>
        </div>

        <!-- Duration Filter -->
        <div>
          <label class="block text-xs font-bold text-primary mb-2 flex items-center gap-2">
            <i class="fas fa-clock text-primary/70"></i> Duración del Viaje
          </label>
          <select
            bind:value={selectedDuration}
            class="w-full border border-gray-200 rounded-lg p-2.5 text-sm font-medium text-primary focus:outline-none focus:border-primary"
          >
            <option value="">Cualquier duración</option>
            <option value="3">Desde 3 días</option>
            <option value="5">Desde 5 días</option>
            <option value="7">Desde 7 días</option>
          </select>
        </div>

        <!-- Price Range Slider -->
        <div>
          <div class="flex justify-between items-center mb-2 text-xs font-bold text-primary">
            <span>Precio máximo</span>
            <span class="text-accent text-sm">{maxPrice}€</span>
          </div>
          <input
            type="range"
            min="200"
            max="1500"
            step="50"
            bind:value={maxPrice}
            class="w-full accent-primary"
          />
        </div>
      </div>
    </aside>

    <!-- Packages List (9 Cols) -->
    <main class="lg:col-span-9">
      <div class="mb-6 flex justify-between items-center">
        <p class="text-sm font-bold text-primary">
          Mostrando {filteredExperiences.length} {filteredExperiences.length === 1 ? 'experiencia' : 'experiencias'}
        </p>
      </div>

      {#if filteredExperiences.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each filteredExperiences as exp}
            <div class="h-full">
              <ExperienceCard {exp} />
            </div>
          {/each}
        </div>
      {:else}
        <div class="bg-white border border-gray-200 rounded-2xl p-12 text-center text-primary space-y-3">
          <i class="fas fa-route text-4xl text-accent"></i>
          <h3 class="font-headings font-bold text-xl">No hay experiencias con estos filtros</h3>
          <p class="text-sm text-gray-500">Prueba a ampliar los rangos de precio o viajeros.</p>
          <button
            type="button"
            on:click={resetFilters}
            class="mt-2 inline-block bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg"
          >
            Ver todas las experiencias
          </button>
        </div>
      {/if}

      <!-- Bottom Advisory Banner -->
      <div class="mt-12 bg-primary/5 border-2 border-dashed border-primary rounded-2xl p-8 text-center space-y-3">
        <h3 class="font-headings font-bold text-xl text-primary">¿Quieres una experiencia a tu medida?</h3>
        <p class="text-sm text-primary max-w-xl mx-auto">
          Podemos diseñar un paquete personalizado con las actividades, fechas y vehículo que elijas.
        </p>
        <a
          href="/contacto"
          class="inline-block bg-accent hover:bg-accent-hover text-white font-bold px-6 py-2.5 rounded-full text-sm transition-colors"
        >
          Contactar con un asesor
        </a>
      </div>
    </main>
  </div>
</div>
