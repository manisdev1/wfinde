<script lang="ts">
  import AboutFeatureSection from '$lib/components/AboutFeatureSection.svelte';
  import ClaimsSection from '$lib/components/ClaimsSection.svelte';
</script>

<svelte:head>
  <title>Sobre nosotros | Van &amp; Camp</title>
  <meta name="description" content="Conoce la historia y el equipo detrás de Van &amp; Camp, la plataforma especializada en alquiler de autocaravanas y campers con asesoramiento personalizado." />
</svelte:head>

<!-- About Hero -->
<section class="bg-primary text-white py-20 text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h1 class="font-headings text-3xl sm:text-5xl font-black mb-4">
      Sobre Van &amp; Camp
    </h1>
    <p class="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-medium">
      Creemos en una forma de viajar más humana, conectada con el entorno y llena de libertad.
    </p>
  </div>
</section>

<!-- About Story -->
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-primary leading-relaxed text-base sm:text-lg">
  <h2 class="font-headings font-bold text-2xl sm:text-3xl text-primary mb-4">
    Nuestra Misión
  </h2>
  <p>
    Van &amp; Camp nació con un propósito muy claro: desterrar las malas experiencias en el alquiler de autocaravanas y devolverle al viajero la confianza y la cercanía de un trato humano.
  </p>
  <p>
    Sabemos que organizar un viaje en camper o autocaravana suscita dudas, especialmente si es la primera vez. Por eso no somos un comparador frío ni una plataforma automatizada: nuestro equipo te asesora de tú a tú, te recomienda el vehículo exacto para tus necesidades y te ayuda a trazar la ruta ideal con rincones secretos y zonas seguras para pernoctar.
  </p>
</div>

<!-- Features Section -->
<AboutFeatureSection />

<!-- Claims Section -->
<ClaimsSection />
