<script lang="ts">
  import { page } from '$app/stores';
  import { vehicles } from '$lib/data/vehicles';
  import { locations } from '$lib/data/locations';
  import VehicleCard from '$lib/components/VehicleCard.svelte';
  import type { VehicleType } from '$lib/types';
  import { onMount } from 'svelte';

  let maxPrice = 500;
  let travelers = 1;
  let selectedTypes: VehicleType[] = [];
  let selectedZone = '';
  let showZoneDropdown = false;
  let showPriceDropdown = false;
  let showTravelersDropdown = false;
  let showTypeDropdown = false;

  const vehicleTypes: { label: string; value: VehicleType }[] = [
    { label: 'Camper', value: 'Camper' },
    { label: 'Capuchina', value: 'Capuchina' },
    { label: 'Integral', value: 'Integral' },
    { label: 'Perfilada', value: 'Perfilada' }
  ];

  onMount(() => {
    const queryZone = $page.url.searchParams.get('zona');
    if (queryZone) {
      selectedZone = queryZone;
    }
  });

  function toggleType(type: VehicleType) {
    if (selectedTypes.includes(type)) {
      selectedTypes = selectedTypes.filter((t) => t !== type);
    } else {
      selectedTypes = [...selectedTypes, type];
    }
  }

  function resetFilters() {
    maxPrice = 500;
    travelers = 1;
    selectedTypes = [];
    selectedZone = '';
  }

  $: filteredVehicles = vehicles.filter((v) => {
    if (v.dailyPrice > maxPrice) return false;
    if (travelers > 1 && v.seats < travelers) return false;
    if (selectedTypes.length > 0 && !selectedTypes.includes(v.type)) return false;
    if (selectedZone && !v.location.toLowerCase().includes(selectedZone.toLowerCase()) && !v.zone.toLowerCase().includes(selectedZone.toLowerCase())) return false;
    return true;
  });
</script>

<svelte:head>
  <title>Explorar Vehículos | Van &amp; Camp</title>
  <meta
    name="description"
    content="Encuentra y alquila autocaravanas y campers en toda España con seguro a todo riesgo y asesoramiento de ruta personalizado."
  />
</svelte:head>

<!-- Hero Banner -->
<section class="relative py-20 bg-cover bg-center text-white" style="background-image: url('/assets/explore-hero.jpg');">
  <div class="absolute inset-0 bg-primary/65 z-10"></div>
  <div class="relative z-20 max-w-4xl mx-auto px-4 text-center">
    <h1 class="font-headings text-3xl sm:text-5xl font-black text-white mb-4">
      Alquiler de Autocaravanas y Campers con <span class="text-accent">Confianza Total</span>
    </h1>
    <p class="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
      En Van &amp; Camp cuidamos cada detalle para que tu viaje sea seguro, cómodo y sin complicaciones. Te acompañamos desde la elección del vehículo hasta la planificación de tu ruta.
    </p>
  </div>
</section>

<!-- Filter Toolbar & Catalog -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
  <!-- Filter Dropdowns Bar -->
  <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8">
    <div class="flex flex-wrap items-center gap-3">
      <!-- 1. Price Filter -->
      <div class="relative">
        <button
          type="button"
          on:click={() => (showPriceDropdown = !showPriceDropdown)}
          class="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-primary transition-colors"
        >
          <i class="fas fa-euro-sign text-accent"></i>
          <span>Precio: hasta {maxPrice}€/día</span>
          <i class="fas fa-chevron-down text-xs text-gray-400"></i>
        </button>

        {#if showPriceDropdown}
          <div class="fixed inset-0 z-30" on:click={() => (showPriceDropdown = false)} role="presentation"></div>
          <div class="absolute left-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-40">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-bold text-primary">Precio máximo por día</span>
              <span class="text-base font-bold text-accent">{maxPrice}€</span>
            </div>
            <input
              type="range"
              min="50"
              max="500"
              step="10"
              bind:value={maxPrice}
              class="w-full accent-primary"
            />
            <div class="flex justify-between text-[11px] text-gray-400 mt-1">
              <span>50€</span>
              <span>500€</span>
            </div>
          </div>
        {/if}
      </div>

      <!-- 2. Travelers Filter -->
      <div class="relative">
        <button
          type="button"
          on:click={() => (showTravelersDropdown = !showTravelersDropdown)}
          class="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-primary transition-colors"
        >
          <i class="fas fa-users text-accent"></i>
          <span>Viajeros: {travelers} {travelers === 1 ? 'persona' : 'personas'}</span>
          <i class="fas fa-chevron-down text-xs text-gray-400"></i>
        </button>

        {#if showTravelersDropdown}
          <div class="fixed inset-0 z-30" on:click={() => (showTravelersDropdown = false)} role="presentation"></div>
          <div class="absolute left-0 top-full mt-2 w-60 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-40">
            <span class="block text-xs font-bold text-primary mb-3">Número de plazas mínimas</span>
            <div class="flex items-center justify-between">
              <button
                type="button"
                on:click={() => (travelers = Math.max(1, travelers - 1))}
                class="w-9 h-9 rounded-full border border-gray-200 hover:bg-gray-100 text-lg font-bold flex items-center justify-center text-primary"
              >
                -
              </button>
              <span class="text-xl font-headings font-bold text-primary">{travelers}</span>
              <button
                type="button"
                on:click={() => (travelers = Math.min(8, travelers + 1))}
                class="w-9 h-9 rounded-full border border-gray-200 hover:bg-gray-100 text-lg font-bold flex items-center justify-center text-primary"
              >
                +
              </button>
            </div>
          </div>
        {/if}
      </div>

      <!-- 3. Vehicle Type Filter -->
      <div class="relative">
        <button
          type="button"
          on:click={() => (showTypeDropdown = !showTypeDropdown)}
          class="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-primary transition-colors"
        >
          <i class="fas fa-caravan text-accent"></i>
          <span>Tipo {selectedTypes.length > 0 ? `(${selectedTypes.length})` : ''}</span>
          <i class="fas fa-chevron-down text-xs text-gray-400"></i>
        </button>

        {#if showTypeDropdown}
          <div class="fixed inset-0 z-30" on:click={() => (showTypeDropdown = false)} role="presentation"></div>
          <div class="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-40 space-y-2">
            <span class="block text-xs font-bold text-primary mb-2">Elige el tipo de vehículo</span>
            {#each vehicleTypes as type}
              <label class="flex items-center gap-2.5 text-sm font-medium text-primary cursor-pointer hover:text-accent">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type.value)}
                  on:change={() => toggleType(type.value)}
                  class="rounded accent-primary w-4 h-4"
                />
                <span>{type.label}</span>
              </label>
            {/each}
          </div>
        {/if}
      </div>

      <!-- 4. Zone Filter -->
      <div class="relative">
        <button
          type="button"
          on:click={() => (showZoneDropdown = !showZoneDropdown)}
          class="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-primary transition-colors"
        >
          <i class="fas fa-map-marker-alt text-accent"></i>
          <span>{selectedZone || 'Todas las zonas'}</span>
          <i class="fas fa-chevron-down text-xs text-gray-400"></i>
        </button>

        {#if showZoneDropdown}
          <div class="fixed inset-0 z-30" on:click={() => (showZoneDropdown = false)} role="presentation"></div>
          <ul class="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 max-h-64 overflow-y-auto z-40 divide-y divide-gray-50">
            <li>
              <button
                type="button"
                on:click={() => { selectedZone = ''; showZoneDropdown = false; }}
                class="w-full text-left px-3 py-2 text-xs font-bold hover:bg-gray-50 rounded text-primary"
              >
                Todas las zonas
              </button>
            </li>
            {#each locations as loc}
              <li>
                <button
                  type="button"
                  on:click={() => { selectedZone = loc.name; showZoneDropdown = false; }}
                  class="w-full text-left px-3 py-2 text-xs font-semibold hover:bg-gray-50 rounded text-primary"
                >
                  {loc.name}
                </button>
              </li>
            {/each}
          </ul>
        {/if}
      </div>

      <!-- Reset Filter Button -->
      {#if maxPrice < 500 || travelers > 1 || selectedTypes.length > 0 || selectedZone}
        <button
          type="button"
          on:click={resetFilters}
          class="text-xs text-accent hover:underline font-bold px-3 py-2"
        >
          <i class="fas fa-undo me-1"></i> Limpiar filtros
        </button>
      {/if}
    </div>
  </div>

  <!-- Results Count -->
  <div class="flex items-center justify-between mb-6">
    <p class="text-sm font-semibold text-primary">
      Mostrando <span class="font-bold text-accent">{filteredVehicles.length}</span> {filteredVehicles.length === 1 ? 'vehículo' : 'vehículos'} disponibles
    </p>
  </div>

  <!-- Vehicles Grid -->
  {#if filteredVehicles.length > 0}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {#each filteredVehicles as vehicle}
        <div>
          <VehicleCard {vehicle} />
        </div>
      {/each}
    </div>
  {:else}
    <!-- No Results / Support CTA -->
    <div class="bg-white border-2 border-dashed border-primary rounded-2xl p-10 text-center max-w-2xl mx-auto my-8 space-y-4">
      <div class="text-4xl text-accent">
        <i class="fas fa-search-location"></i>
      </div>
      <h3 class="font-headings font-bold text-2xl text-primary">
        ¿No encuentras el vehículo que buscas?
      </h3>
      <p class="text-primary text-sm max-w-md mx-auto leading-relaxed">
        Cuéntanos tu destino y fechas soñadas y nuestro equipo buscará la mejor opción disponible en nuestra red de anfitriones y colaboradores.
      </p>
      <div>
        <a
          href="https://wa.me/34613010059?text=Hola,%20busco%20un%20vehículo%20en%20otra%20ubicación"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-full text-sm shadow-md hover:-translate-y-0.5 transition-all"
        >
          <i class="fab fa-whatsapp text-lg"></i> Consultar por WhatsApp
        </a>
      </div>
    </div>
  {/if}
</div>
