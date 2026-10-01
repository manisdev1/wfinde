<script lang="ts">
  import { page } from '$app/stores';
  import { vehicles } from '$lib/data/vehicles';
  import { onMount } from 'svelte';

  $: vehicleId = $page.params.id;
  $: vehicle = vehicles.find((v) => String(v.id) === String(vehicleId)) || vehicles[0];

  let selectedStartDate = '';
  let selectedEndDate = '';
  let withPet = false;
  let showGalleryModal = false;
  let activeModalImageIndex = 0;
  let showGuestModal = false;
  let guestName = '';
  let guestEmail = '';
  let guestPhone = '';
  let isBookedSuccess = false;

  $: daysCount = (() => {
    if (!selectedStartDate || !selectedEndDate) return 3; // default calculation
    const start = new Date(selectedStartDate);
    const end = new Date(selectedEndDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  })();

  $: baseTotal = vehicle.dailyPrice * daysCount;
  $: petFee = withPet ? 50 : 0;
  $: finalTotal = baseTotal + petFee;

  function handleBookingSubmit(e: Event) {
    e.preventDefault();
    showGuestModal = true;
  }

  function confirmReservation(e: Event) {
    e.preventDefault();
    isBookedSuccess = true;
    setTimeout(() => {
      showGuestModal = false;
      isBookedSuccess = false;
    }, 2500);
  }
</script>

<svelte:head>
  <title>{vehicle.title} | Van &amp; Camp</title>
  <meta name="description" content="Alquila {vehicle.title} en {vehicle.location} con Van &amp; Camp. Seguro a todo riesgo y asesoramiento de ruta." />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <!-- Title & Location Header -->
  <div class="mb-6">
    <h1 class="font-headings text-2xl sm:text-4xl font-bold text-primary mb-2">
      {vehicle.title}
    </h1>
    <p class="text-sm font-semibold text-primary/80 flex items-center gap-2">
      <i class="fas fa-map-marker-alt text-accent"></i>
      <span>{vehicle.location}</span>
    </p>
  </div>

  <!-- Gallery Section -->
  <div class="mb-8">
    <!-- Desktop 3-photo Grid -->
    <div class="hidden lg:grid grid-cols-3 gap-3 h-[420px] rounded-2xl overflow-hidden relative">
      <div
        class="col-span-2 h-full cursor-pointer overflow-hidden group"
        on:click={() => { activeModalImageIndex = 0; showGalleryModal = true; }}
        role="presentation"
      >
        <img
          src={vehicle.images[0]}
          alt="{vehicle.title} - Foto 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div class="grid grid-rows-2 gap-3 h-full">
        {#each vehicle.images.slice(1, 3) as img, idx}
          <div
            class="h-full cursor-pointer overflow-hidden group"
            on:click={() => { activeModalImageIndex = idx + 1; showGalleryModal = true; }}
            role="presentation"
          >
            <img
              src={img}
              alt="{vehicle.title} - Foto {idx + 2}"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        {/each}
      </div>

      <!-- View All Photos Button -->
      <button
        type="button"
        on:click={() => { activeModalImageIndex = 0; showGalleryModal = true; }}
        class="absolute bottom-4 right-4 bg-white/95 hover:bg-white text-primary font-bold text-xs px-4 py-2.5 rounded-lg shadow-md flex items-center gap-2 transition-all hover:scale-105 z-10"
      >
        <i class="fas fa-th text-accent"></i> Ver todas las fotos ({vehicle.images.length})
      </button>
    </div>

    <!-- Mobile Single Image with Thumbnail Slider -->
    <div class="lg:hidden rounded-xl overflow-hidden relative">
      <img
        src={vehicle.images[activeModalImageIndex] || vehicle.images[0]}
        alt={vehicle.title}
        class="w-full h-64 object-cover"
      />
      <div class="flex gap-2 overflow-x-auto p-2 bg-gray-100">
        {#each vehicle.images as img, i}
          <button
            type="button"
            on:click={() => (activeModalImageIndex = i)}
            class="w-16 h-12 shrink-0 rounded overflow-hidden border-2 {activeModalImageIndex === i ? 'border-accent' : 'border-transparent'}"
          >
            <img src={img} alt="" class="w-full h-full object-cover" />
          </button>
        {/each}
      </div>
    </div>
  </div>

  <!-- Content Split: Details Left / Booking Right -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
    <!-- Left Column: Specs & Description (7 Cols) -->
    <div class="lg:col-span-7 space-y-8">
      <!-- Quick Specs Bar -->
      <div class="border-b border-gray-200 pb-4">
        <h2 class="font-headings font-bold text-xl text-primary mb-2">{vehicle.type}</h2>
        <div class="flex items-center gap-4 text-primary text-sm font-semibold">
          <span class="flex items-center gap-1.5">
            <i class="fas fa-users text-accent"></i> {vehicle.seats} plazas para viajar
          </span>
          <span>•</span>
          <span class="flex items-center gap-1.5">
            <i class="fas fa-bed text-accent"></i> {vehicle.beds} plazas para dormir
          </span>
        </div>
      </div>

      <!-- Description -->
      <div class="text-primary text-base leading-relaxed whitespace-pre-line font-normal">
        {vehicle.description}
      </div>

      <hr class="border-gray-200" />

      <!-- Conditions Checklist -->
      <div>
        <h3 class="font-headings font-bold text-lg text-primary mb-4 pb-1 border-b-2 border-accent inline-block">
          Condiciones Generales
        </h3>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-primary font-medium">
          <li class="flex items-center gap-2">
            <i class="fas fa-check text-green-600"></i> Mayor de {vehicle.conditions?.minAge || 25} años
          </li>
          <li class="flex items-center gap-2">
            <i class="fas fa-check text-green-600"></i> Carnet B (&gt;{vehicle.conditions?.licenseYears || 2} años)
          </li>
          <li class="flex items-center gap-2">
            <i class="fas fa-check text-green-600"></i> Tarjeta Crédito (Fianza)
          </li>
        </ul>
      </div>

      <!-- Equipment Checklist -->
      {#if vehicle.equipment}
        <div>
          <h3 class="font-headings font-bold text-lg text-primary mb-4 pb-1 border-b-2 border-accent inline-block">
            Equipamiento Interior
          </h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-primary font-medium">
            {#each vehicle.equipment.interior || [] as item}
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-green-600"></i> {item}
              </li>
            {/each}
          </ul>
        </div>

        <div>
          <h3 class="font-headings font-bold text-lg text-primary mb-4 pb-1 border-b-2 border-accent inline-block">
            Equipamiento Exterior y Técnico
          </h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-primary font-medium">
            {#each vehicle.equipment.exterior || [] as item}
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-green-600"></i> {item}
              </li>
            {/each}
          </ul>
        </div>

        <div>
          <h3 class="font-headings font-bold text-lg text-primary mb-4 pb-1 border-b-2 border-accent inline-block">
            Incluye
          </h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-primary font-medium">
            {#each vehicle.equipment.included || [] as item}
              <li class="flex items-center gap-2">
                <i class="fas fa-check text-green-600"></i> {item}
              </li>
            {/each}
          </ul>
        </div>
      {/if}

      <!-- Economic Conditions -->
      <div>
        <h3 class="font-headings font-bold text-lg text-primary mb-4 pb-1 border-b-2 border-accent inline-block">
          Condiciones Económicas
        </h3>
        <div class="space-y-2 text-sm text-primary font-medium">
          <p class="flex items-center gap-2">
            <i class="fas fa-euro-sign text-accent w-5"></i>
            <strong>Fianza:</strong> {vehicle.conditions?.deposit || 900} €
          </p>
          <p class="flex items-center gap-2">
            <i class="fas fa-shield-alt text-accent w-5"></i>
            <strong>Franquicia Seguro:</strong> {vehicle.conditions?.insuranceExcess || 900} €
          </p>
          <p class="flex items-center gap-2">
            <i class="fas fa-road text-accent w-5"></i>
            <strong>Kilometraje:</strong> {vehicle.conditions?.mileage || '200 km/día'}
          </p>
          <p class="flex items-center gap-2">
            <i class="fas fa-headset text-accent w-5"></i>
            <span>Asistencia en Carretera 24/7 en toda Europa</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Right Column: Sticky Booking Widget (5 Cols) -->
    <div class="lg:col-span-5">
      <div class="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 shadow-card space-y-5">
        <div class="flex items-baseline justify-between border-b border-gray-100 pb-4">
          <div class="text-primary text-base font-medium">
            A partir de <span class="font-black text-3xl text-primary">{vehicle.dailyPrice}€</span> / día
          </div>
          <span class="text-xs bg-accent/10 text-accent font-bold px-2.5 py-1 rounded-full">
            Mejor precio online
          </span>
        </div>

        <!-- Booking Calculation Form -->
        <form on:submit={handleBookingSubmit} class="space-y-4">
          <div class="space-y-2">
            <label class="block text-xs font-bold text-primary uppercase tracking-wider">
              Fechas de tu viaje <span class="text-red-500">*</span>
            </label>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <span class="block text-[11px] text-gray-500 font-medium">Recogida</span>
                <input
                  type="date"
                  required
                  bind:value={selectedStartDate}
                  class="w-full border border-gray-300 rounded-lg p-2 text-xs font-semibold text-primary focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <span class="block text-[11px] text-gray-500 font-medium">Devolución</span>
                <input
                  type="date"
                  required
                  bind:value={selectedEndDate}
                  min={selectedStartDate}
                  class="w-full border border-gray-300 rounded-lg p-2 text-xs font-semibold text-primary focus:outline-none focus:border-accent"
                />
              </div>
            </div>
          </div>

          <!-- Pet Option Toggle -->
          <label class="flex items-center gap-2.5 p-3 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100/70 transition-colors">
            <input
              type="checkbox"
              bind:checked={withPet}
              class="w-4 h-4 accent-accent rounded"
            />
            <span class="text-xs text-primary font-bold">
              Viajo con mascota (+50.00 € tarifa única)
            </span>
          </label>

          <!-- Price Breakdown Container -->
          <div class="bg-gray-50 border border-gray-100 rounded-xl p-4 space-y-2 text-xs text-primary">
            <div class="flex justify-between">
              <span>{vehicle.dailyPrice}€ x {daysCount} {daysCount === 1 ? 'día' : 'días'}</span>
              <span class="font-bold">{baseTotal.toFixed(2)}€</span>
            </div>
            {#if withPet}
              <div class="flex justify-between text-accent font-semibold">
                <span>Suplemento mascota</span>
                <span>50.00€</span>
              </div>
            {/if}
            <div class="pt-2 border-t border-gray-200 flex justify-between text-sm font-bold">
              <span>Total estimado</span>
              <span class="text-base text-primary font-black">{finalTotal.toFixed(2)}€</span>
            </div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-accent hover:bg-accent-hover text-white font-headings font-bold text-base py-3.5 rounded-xl shadow-md transition-colors uppercase tracking-wide"
          >
            Solicitar Reserva
          </button>

          <!-- Safe Booking Notice -->
          <div class="bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-xs text-gray-600 text-center space-y-1">
            <p class="font-bold text-primary flex items-center justify-center gap-1.5">
              <i class="fas fa-shield-alt text-green-600"></i> Pagas ahora: 0,00 €
            </p>
            <p>
              Se enviará una solicitud al anfitrión. El pago del 30% se requerirá únicamente cuando confirme disponibilidad.
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<!-- Lightbox Modal for All Photos -->
{#if showGalleryModal}
  <div class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
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
        src={vehicle.images[activeModalImageIndex]}
        alt="Foto {activeModalImageIndex + 1}"
        class="max-h-[80vh] w-auto object-contain rounded-xl"
      />

      <div class="flex items-center justify-between w-full mt-4 text-white">
        <button
          type="button"
          on:click={() => (activeModalImageIndex = activeModalImageIndex > 0 ? activeModalImageIndex - 1 : vehicle.images.length - 1)}
          class="bg-white/20 hover:bg-white/40 p-3 rounded-full text-lg"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <span class="text-sm font-bold">
          {activeModalImageIndex + 1} / {vehicle.images.length}
        </span>
        <button
          type="button"
          on:click={() => (activeModalImageIndex = activeModalImageIndex < vehicle.images.length - 1 ? activeModalImageIndex + 1 : 0)}
          class="bg-white/20 hover:bg-white/40 p-3 rounded-full text-lg"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
{/if}

<!-- Guest Modal for Booking Request -->
{#if showGuestModal}
  <div class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
    <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
      {#if !isBookedSuccess}
        <div class="flex justify-between items-center border-b pb-3">
          <h3 class="font-headings font-bold text-lg text-primary">Completar Solicitud de Reserva</h3>
          <button type="button" on:click={() => (showGuestModal = false)} class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="bg-gray-50 rounded-xl p-3 text-xs text-primary space-y-1">
          <p class="font-bold">{vehicle.title} ({vehicle.location})</p>
          <p>Total reserva: <span class="font-bold">{finalTotal.toFixed(2)}€</span></p>
          <p class="text-green-700 font-bold">Pagas ahora: 0.00 €</p>
        </div>

        <form on:submit={confirmReservation} class="space-y-3 text-xs">
          <div>
            <label class="block font-bold text-primary mb-1">Nombre completo *</label>
            <input
              type="text"
              required
              bind:value={guestName}
              placeholder="Tu nombre y apellidos"
              class="w-full border border-gray-300 rounded-lg p-2 text-sm text-primary"
            />
          </div>
          <div>
            <label class="block font-bold text-primary mb-1">Correo electrónico *</label>
            <input
              type="email"
              required
              bind:value={guestEmail}
              placeholder="tu@email.com"
              class="w-full border border-gray-300 rounded-lg p-2 text-sm text-primary"
            />
          </div>
          <div>
            <label class="block font-bold text-primary mb-1">Teléfono (WhatsApp) *</label>
            <input
              type="tel"
              required
              bind:value={guestPhone}
              placeholder="+34 600 000 000"
              class="w-full border border-gray-300 rounded-lg p-2 text-sm text-primary"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl text-sm transition-colors mt-2"
          >
            Enviar Solicitud
          </button>
        </form>
      {:else}
        <!-- Success State -->
        <div class="text-center py-6 space-y-3">
          <div class="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl">
            <i class="fas fa-check"></i>
          </div>
          <h3 class="font-headings font-bold text-xl text-primary">¡Solicitud Enviada con Éxito!</h3>
          <p class="text-xs text-gray-600 leading-relaxed">
            Hemos recibido tus datos. El anfitrión revisará la disponibilidad y te responderemos por WhatsApp y correo en menos de 24 horas.
          </p>
        </div>
      {/if}
    </div>
  </div>
{/if}
