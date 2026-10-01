<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import ClaimsSection from '$lib/components/ClaimsSection.svelte';
  import ReviewsCarousel from '$lib/components/ReviewsCarousel.svelte';
  import ExperiencesGrid from '$lib/components/ExperiencesGrid.svelte';
  import AboutFeatureSection from '$lib/components/AboutFeatureSection.svelte';
  import VehiclesShowcase from '$lib/components/VehiclesShowcase.svelte';
  import BlogSection from '$lib/components/BlogSection.svelte';
  import ShopCtaSection from '$lib/components/ShopCtaSection.svelte';
  import OrganizedTripsSection from '$lib/components/OrganizedTripsSection.svelte';
</script>

<svelte:head>
  <title>Van &amp; Camp | Alquiler de Autocaravanas y Campers</title>
  <meta
    name="description"
    content="Tu próxima aventura comienza aquí. Alquiler de autocaravanas y campers con asesoramiento personalizado y seguro a todo riesgo. ¡Reserva tu viaje hoy!"
  />
  <link rel="canonical" href="https://vanandcamp.com/" />
</svelte:head>

<!-- 1. Hero Section -->
<Hero />

<!-- 2. Claims / Value Propositions Section -->
<ClaimsSection />

<!-- 3. Google Reviews Section -->
<ReviewsCarousel />

<!-- 4. Experiencias Section -->
<ExperiencesGrid />

<!-- 5. Asesoramiento Personalizado (About Feature) -->
<AboutFeatureSection />

<!-- 6. Novedades / Vehicles Showcase -->
<VehiclesShowcase />

<!-- 7. Blog Section -->
<BlogSection />

<!-- 8. Van & Camp Shop CTA Section -->
<ShopCtaSection />

<!-- 9. Viajes Únicos Organizados Section -->
<OrganizedTripsSection />
