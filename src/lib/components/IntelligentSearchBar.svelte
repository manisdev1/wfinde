<script lang="ts">
  import { locations } from '$lib/data/locations';
  import { goto } from '$app/navigation';

  export let isMobile = false;

  let selectedLocation = '';
  let locationQuery = '';
  let showLocationsDropdown = false;
  let datesText = '';
  let startDate = '';
  let endDate = '';
  let showDatePicker = false;

  $: filteredLocations = locations.filter((loc) =>
    loc.name.toLowerCase().includes(locationQuery.toLowerCase())
  );

  function selectLocation(name: string) {
    selectedLocation = name;
    locationQuery = name;
    showLocationsDropdown = false;
  }

  function handleSearch(e: Event) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedLocation) params.set('zona', selectedLocation);
    if (startDate) params.set('fecha_inicio', startDate);
    if (endDate) params.set('fecha_fin', endDate);
    goto(`/explorar?${params.toString()}`);
  }

  function applyDates() {
    if (startDate && endDate) {
      datesText = `${startDate} - ${endDate}`;
    } else if (startDate) {
      datesText = `Desde ${startDate}`;
    }
    showDatePicker = false;
  }
</script>

{#if !isMobile}
  <!-- Desktop Intelligent Search Bar -->
  <form
    on:submit={handleSearch}
    class="flex items-center bg-white rounded-full p-1 border-[3px] border-[#ffb300] shadow-search hover:border-[#ff9800] hover:shadow-search-hover focus-within:border-[#ff9800] focus-within:shadow-search-hover transition-all duration-300 relative text-left"
  >
    <!-- Location Group -->
    <div class="relative px-4 py-1 border-r border-gray-200 flex flex-col justify-center">
      <label for="search-location-desktop" class="block text-[0.7rem] font-bold text-primary mb-0 leading-none">
        ¿Dónde?
      </label>
      <input
        type="text"
        id="search-location-desktop"
        bind:value={locationQuery}
        on:focus={() => (showLocationsDropdown = true)}
        placeholder="Añadir lugar"
        autocomplete="off"
        class="border-none outline-none bg-transparent text-[0.95rem] font-semibold text-primary w-44 placeholder:text-gray-400 placeholder:font-normal leading-tight"
      />

      <!-- Location Dropdown -->
      {#if showLocationsDropdown}
        <div
          class="fixed inset-0 z-40"
          on:click={() => (showLocationsDropdown = false)}
          role="presentation"
        ></div>
        <ul
          class="absolute top-[calc(100%+12px)] left-0 bg-white border border-gray-100 rounded-xl shadow-xl list-none p-2 m-0 max-h-80 overflow-y-auto z-50 w-72 divide-y divide-gray-50"
        >
          {#each filteredLocations as loc}
            <li>
              <button
                type="button"
                on:click={() => selectLocation(loc.name)}
                class="w-full px-3 py-2.5 text-left flex items-center gap-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div class="w-8 h-8 rounded-full bg-[#f0f4ff] border border-[#dbe4ff] flex items-center justify-center text-primary shrink-0 text-sm">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <span class="font-bold text-primary text-sm">{loc.name}</span>
              </button>
            </li>
          {/each}
          {#if filteredLocations.length === 0}
            <li class="px-4 py-3 text-xs text-gray-500 text-center">No se encontraron ubicaciones</li>
          {/if}
        </ul>
      {/if}
    </div>

    <!-- Dates Group -->
    <div class="relative px-4 py-1 flex flex-col justify-center">
      <label for="search-dates-desktop" class="block text-[0.7rem] font-bold text-primary mb-0 leading-none">
        ¿Cuándo?
      </label>
      <input
        type="text"
        id="search-dates-desktop"
        value={datesText}
        on:click={() => (showDatePicker = !showDatePicker)}
        placeholder="Añadir fechas"
        readonly
        class="border-none outline-none bg-transparent text-[0.95rem] font-semibold text-primary w-40 cursor-pointer placeholder:text-gray-400 placeholder:font-normal leading-tight"
      />

      <!-- Simple Range Date Picker Modal -->
      {#if showDatePicker}
        <div
          class="fixed inset-0 z-40"
          on:click={() => (showDatePicker = false)}
          role="presentation"
        ></div>
        <div class="absolute top-[calc(100%+12px)] right-0 bg-white border border-gray-100 rounded-xl shadow-xl p-4 z-50 w-72">
          <h4 class="font-bold text-primary text-sm mb-3">Seleccionar Fechas</h4>
          <div class="space-y-3 mb-4">
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">Fecha de salida</label>
              <input
                type="date"
                bind:value={startDate}
                class="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-primary font-medium focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">Fecha de regreso</label>
              <input
                type="date"
                bind:value={endDate}
                min={startDate}
                class="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-primary font-medium focus:outline-none focus:border-accent"
              />
            </div>
          </div>
          <div class="flex justify-end gap-2">
            <button
              type="button"
              on:click={() => { datesText = ''; startDate = ''; endDate = ''; showDatePicker = false; }}
              class="px-3 py-1.5 text-xs text-gray-500 hover:text-gray-700 font-medium"
            >
              Borrar
            </button>
            <button
              type="button"
              on:click={applyDates}
              class="px-4 py-1.5 text-xs bg-accent text-white font-bold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Aplicar
            </button>
          </div>
        </div>
      {/if}
    </div>

    <!-- Submit Search Button -->
    <button
      type="submit"
      aria-label="Buscar autocaravanas"
      class="bg-accent hover:bg-accent-hover text-white rounded-full w-9 h-9 flex items-center justify-center ml-1 shrink-0 transition-transform active:scale-95 cursor-pointer shadow-sm"
    >
      <i class="fas fa-search text-sm"></i>
    </button>
  </form>
{:else}
  <!-- Mobile Inline Search Bar -->
  <form
    on:submit={handleSearch}
    class="flex items-center bg-white rounded-full px-3 py-1.5 shadow-sm border-[2.5px] border-[#ffb300] gap-2 w-full max-w-md mx-auto relative"
  >
    <!-- Location -->
    <div class="flex-1 relative border-r border-gray-200 pr-2">
      <input
        type="text"
        bind:value={locationQuery}
        on:focus={() => (showLocationsDropdown = true)}
        placeholder="¿Dónde?"
        autocomplete="off"
        class="border-none outline-none bg-transparent text-sm font-semibold text-primary w-full py-1 placeholder:text-primary/70 placeholder:font-semibold"
      />

      {#if showLocationsDropdown}
        <div
          class="fixed inset-0 z-40"
          on:click={() => (showLocationsDropdown = false)}
          role="presentation"
        ></div>
        <ul
          class="absolute top-[calc(100%+8px)] left-0 bg-white border border-gray-100 rounded-xl shadow-xl list-none p-2 m-0 max-h-60 overflow-y-auto z-50 w-64 divide-y divide-gray-50"
        >
          {#each filteredLocations as loc}
            <li>
              <button
                type="button"
                on:click={() => selectLocation(loc.name)}
                class="w-full px-3 py-2 text-left flex items-center gap-2 hover:bg-gray-50 rounded-lg text-xs font-bold text-primary"
              >
                <i class="fas fa-map-marker-alt text-primary/70"></i>
                <span>{loc.name}</span>
              </button>
            </li>
          {/each}
        </ul>
      {/if}
    </div>

    <!-- Dates -->
    <div class="flex-1 relative">
      <input
        type="text"
        value={datesText}
        on:click={() => (showDatePicker = !showDatePicker)}
        placeholder="¿Cuándo?"
        readonly
        class="border-none outline-none bg-transparent text-sm font-semibold text-primary w-full py-1 cursor-pointer placeholder:text-primary/70 placeholder:font-semibold"
      />

      {#if showDatePicker}
        <div
          class="fixed inset-0 z-40"
          on:click={() => (showDatePicker = false)}
          role="presentation"
        ></div>
        <div class="absolute top-[calc(100%+8px)] right-0 bg-white border border-gray-100 rounded-xl shadow-xl p-3 z-50 w-64">
          <div class="space-y-2 mb-3">
            <div>
              <label class="block text-[11px] font-semibold text-gray-600">Salida</label>
              <input
                type="date"
                bind:value={startDate}
                class="w-full border border-gray-200 rounded p-1 text-xs text-primary"
              />
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-gray-600">Regreso</label>
              <input
                type="date"
                bind:value={endDate}
                min={startDate}
                class="w-full border border-gray-200 rounded p-1 text-xs text-primary"
              />
            </div>
          </div>
          <div class="flex justify-end gap-2">
            <button
              type="button"
              on:click={applyDates}
              class="px-3 py-1 text-xs bg-accent text-white font-bold rounded"
            >
              OK
            </button>
          </div>
        </div>
      {/if}
    </div>

    <!-- Submit -->
    <button
      type="submit"
      aria-label="Buscar"
      class="bg-accent hover:bg-accent-hover text-white rounded-full w-9 h-9 flex items-center justify-center shrink-0 transition-transform active:scale-95"
    >
      <i class="fas fa-search text-sm"></i>
    </button>
  </form>
{/if}
