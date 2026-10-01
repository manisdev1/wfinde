<script lang="ts">
  import { page } from '$app/stores';
  import { experiences } from '$lib/data/experiences';

  $: slug = $page.params.slug;
  $: experience = experiences.find((e) => e.slug === slug) || experiences[0];

  let activeTab: 'itinerario' | 'incluye' | 'politicas' = 'itinerario';
  let showGalleryModal = false;
  let activeModalSlide = 0;
  let showReserveModal = false;
  let reserveSuccess = false;

  let clientName = '';
  let clientEmail = '';
  let clientPhone = '';

  function handleReserve(e: Event) {
    e.preventDefault();
    reserveSuccess = true;
    setTimeout(() => {
      showReserveModal = false;
      reserveSuccess = false;
    }, 2500);
  }
</script>

<svelte:head>
  <title>{experience.title} | Van &amp; Camp</title>
  <meta name="description" content="Reserva {experience.title} en {experience.location}. Alquiler de camper y actividades incluidas." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <!-- Title & Meta Header -->
  <div class="mb-6">
    <h1 class="font-headings text-2xl sm:text-4xl font-bold text-primary mb-3 leading-tight">
      {experience.title}
    </h1>
    <div class="flex items-center text-primary font-medium text-sm sm:text-base flex-wrap gap-2 sm:gap-4">
      <span class="flex items-center gap-1.5">
        <i class="fas fa-map-marker-alt text-accent"></i> {experience.location}
      </span>
      <span>•</span>
      <span class="flex items-center gap-1.5">
        <i class="fas fa-clock text-accent"></i> {experience.durationDays} días
      </span>
      <span>•</span>
      <span class="flex items-center gap-1.5">
        <i class="fas fa-users text-accent"></i> Hasta {experience.maxTravelers} personas
      </span>
    </div>
  </div>

  <!-- Multi-Photo Gallery Grid (Desktop 5-grid, Mobile carousel) -->
  <div class="mb-8">
    <div class="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[460px] rounded-2xl overflow-hidden relative">
      {#each experience.images.slice(0, 5) as img, idx}
        <div
          class="h-full overflow-hidden cursor-pointer group {idx === 0 ? 'col-span-2 row-span-2' : ''}"
          on:click={() => { activeModalSlide = idx; showGalleryModal = true; }}
          role="presentation"
        >
          <img
            src={img}
            alt="Foto {idx + 1}"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      {/each}

      <button
        type="button"
        on:click={() => { activeModalSlide = 0; showGalleryModal = true; }}
        class="absolute bottom-4 right-4 bg-white/95 hover:bg-white text-primary font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 z-10"
      >
        <i class="fas fa-th text-accent"></i> Ver todas las fotos ({experience.images.length})
      </button>
    </div>

    <!-- Mobile Slider -->
    <div class="md:hidden rounded-2xl overflow-hidden relative">
      <img
        src={experience.images[activeModalSlide]}
        alt={experience.title}
        class="w-full h-72 object-cover"
      />
      <div class="flex gap-2 overflow-x-auto p-2 bg-gray-100">
        {#each experience.images as img, i}
          <button
            type="button"
            on:click={() => (activeModalSlide = i)}
            class="w-16 h-12 shrink-0 rounded overflow-hidden border-2 {activeModalSlide === i ? 'border-accent' : 'border-transparent'}"
          >
            <img src={img} alt="" class="w-full h-full object-cover" />
          </button>
        {/each}
      </div>
    </div>
  </div>

  <!-- Main Content Layout -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
    <!-- Left Column: Tabs & Body (7 Cols) -->
    <div class="lg:col-span-7">
      <!-- Tabs Bar -->
      <div class="flex border-b border-gray-200 gap-8 mb-6">
        <button
          type="button"
          on:click={() => (activeTab = 'itinerario')}
          class="pb-3 text-base font-bold transition-all border-b-2 {activeTab === 'itinerario' ? 'border-primary text-primary opacity-100' : 'border-transparent text-gray-400 hover:text-gray-600'}"
        >
          Itinerario
        </button>
        <button
          type="button"
          on:click={() => (activeTab = 'incluye')}
          class="pb-3 text-base font-bold transition-all border-b-2 {activeTab === 'incluye' ? 'border-primary text-primary opacity-100' : 'border-transparent text-gray-400 hover:text-gray-600'}"
        >
          Qué Incluye
        </button>
        <button
          type="button"
          on:click={() => (activeTab = 'politicas')}
          class="pb-3 text-base font-bold transition-all border-b-2 {activeTab === 'politicas' ? 'border-primary text-primary opacity-100' : 'border-transparent text-gray-400 hover:text-gray-600'}"
        >
          Políticas
        </button>
      </div>

      <!-- Tab Contents -->
      <div class="text-primary leading-relaxed text-sm sm:text-base space-y-4 font-normal">
        {#if activeTab === 'itinerario'}
          <div class="prose max-w-none text-primary">
            {@html experience.itineraryHtml}
          </div>
        {:else if activeTab === 'incluye'}
          <div class="prose max-w-none text-primary space-y-2">
            {@html experience.includesHtml}
          </div>
        {:else if activeTab === 'politicas'}
          <div class="prose max-w-none text-primary space-y-3">
            {@html experience.policiesHtml}
          </div>
        {/if}
      </div>
    </div>

    <!-- Right Column: Sticky Booking Widget (5 Cols) -->
    <div class="lg:col-span-5">
      <div class="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 shadow-card space-y-5">
        {#if experience.discountPercentage && !experience.isSoldOut}
          <div class="bg-primary text-white text-center py-2.5 px-4 rounded-lg font-bold text-sm uppercase tracking-wider pulse-offer shadow-sm">
            ¡OFERTA ESPECIAL -{experience.discountPercentage}%!
          </div>
        {/if}

        <div class="text-center py-2 border-b border-gray-100">
          {#if experience.originalPrice > experience.discountedPrice}
            <span class="text-accent font-bold text-base line-through block">
              {experience.originalPrice.toFixed(2)}€
            </span>
          {/if}
          <div class="font-black text-3xl sm:text-4xl text-primary">
            {experience.discountedPrice.toFixed(2)}€
          </div>
          <span class="text-xs text-gray-500 font-medium">Precio total por paquete</span>
        </div>

        <div class="space-y-3 text-xs text-primary font-medium">
          <div class="flex justify-between py-1 border-b border-gray-100">
            <span class="text-gray-500">Fechas fijadas</span>
            <span class="font-bold">{experience.dates}</span>
          </div>
          <div class="flex justify-between py-1 border-b border-gray-100">
            <span class="text-gray-500">Duración</span>
            <span class="font-bold">{experience.durationDays} días / 2 noches</span>
          </div>
          <div class="flex justify-between py-1 border-b border-gray-100">
            <span class="text-gray-500">Ocupantes</span>
            <span class="font-bold">Hasta {experience.maxTravelers} viajeros</span>
          </div>
        </div>

        {#if !experience.isSoldOut}
          <button
            type="button"
            on:click={() => (showReserveModal = true)}
            class="w-full bg-accent hover:bg-accent-hover text-white font-headings font-bold text-base py-3.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5"
          >
            Reservar Experiencia
          </button>
        {:else}
          <button
            type="button"
            disabled
            class="w-full bg-gray-300 text-gray-500 font-headings font-bold text-base py-3.5 rounded-xl cursor-not-allowed"
          >
            No Disponible
          </button>
        {/if}

        <div class="bg-gray-50 rounded-xl p-3.5 text-xs text-gray-600 text-center space-y-1">
          <p class="font-bold text-primary">
            <i class="fas fa-lock text-green-600 mr-1"></i> Reserva segura sin pago inicial
          </p>
          <p>Solo pagarás el 30% tras confirmar plazas con el anfitrión.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Lightbox Modal -->
{#if showGalleryModal}
  <div class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
    <button
      type="button"
      on:click={() => (showGalleryModal = false)}
      class="absolute top-4 right-4 text-white text-3xl hover:text-accent p-2 z-50"
      aria-label="Cerrar galería"
    >
      <i class="fas fa-times"></i>
    </button>

    <div class="relative max-w-4xl w-full flex flex-col items-center">
      <img
        src={experience.images[activeModalSlide]}
        alt="Foto {activeModalSlide + 1}"
        class="max-h-[80vh] w-auto object-contain rounded-xl"
      />
      <div class="flex items-center justify-between w-full mt-4 text-white">
        <button
          type="button"
          on:click={() => (activeModalSlide = activeModalSlide > 0 ? activeModalSlide - 1 : experience.images.length - 1)}
          class="bg-white/20 hover:bg-white/40 p-3 rounded-full text-lg"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <span class="text-sm font-bold">
          {activeModalSlide + 1} / {experience.images.length}
        </span>
        <button
          type="button"
          on:click={() => (activeModalSlide = activeModalSlide < experience.images.length - 1 ? activeModalSlide + 1 : 0)}
          class="bg-white/20 hover:bg-white/40 p-3 rounded-full text-lg"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
{/if}

<!-- Reservation Modal -->
{#if showReserveModal}
  <div class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
    <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
      {#if !reserveSuccess}
        <div class="flex justify-between items-center border-b pb-3">
          <h3 class="font-headings font-bold text-lg text-primary">Solicitar Reserva del Pack</h3>
          <button type="button" on:click={() => (showReserveModal = false)} class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <form on:submit={handleReserve} class="space-y-3 text-xs">
          <div>
            <label class="block font-bold text-primary mb-1">Nombre completo *</label>
            <input
              type="text"
              required
              bind:value={clientName}
              placeholder="Tu nombre"
              class="w-full border border-gray-300 rounded-lg p-2.5 text-sm text-primary"
            />
          </div>
          <div>
            <label class="block font-bold text-primary mb-1">Correo electrónico *</label>
            <input
              type="email"
              required
              bind:value={clientEmail}
              placeholder="tu@email.com"
              class="w-full border border-gray-300 rounded-lg p-2.5 text-sm text-primary"
            />
          </div>
          <div>
            <label class="block font-bold text-primary mb-1">Teléfono (WhatsApp) *</label>
            <input
              type="tel"
              required
              bind:value={clientPhone}
              placeholder="+34 600 000 000"
              class="w-full border border-gray-300 rounded-lg p-2.5 text-sm text-primary"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl text-sm transition-colors mt-2"
          >
            Confirmar Solicitud
          </button>
        </form>
      {:else}
        <div class="text-center py-6 space-y-3">
          <div class="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl">
            <i class="fas fa-check"></i>
          </div>
          <h3 class="font-headings font-bold text-xl text-primary">¡Solicitud Registrada!</h3>
          <p class="text-xs text-gray-600">
            Contactaremos contigo para formalizar la reserva del pack.
          </p>
        </div>
      {/if}
    </div>
  </div>
{/if}
