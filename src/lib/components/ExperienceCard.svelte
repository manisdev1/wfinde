<script lang="ts">
  import type { Experience } from '$lib/types';

  export let exp: Experience;
</script>

<div
  class="group bg-white rounded-2xl border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col overflow-hidden h-full {exp.isSoldOut ? 'is-soldout' : ''}"
>
  <!-- Image Wrapper -->
  <div class="relative h-[220px] overflow-hidden">
    {#if exp.discountPercentage && !exp.isSoldOut}
      <span
        class="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 shadow-sm"
      >
        -{exp.discountPercentage}% de descuento
      </span>
    {/if}

    {#if exp.isSoldOut}
      <div class="soldout-ribbon">
        NO DISPONIBLE
      </div>
    {/if}

    <a href="/experiencia/{exp.slug}" class="block w-full h-full">
      <img
        src={exp.images[0]}
        alt={exp.title}
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 {exp.isSoldOut ? 'grayscale opacity-80' : ''}"
      />
    </a>
  </div>

  <!-- Card Body -->
  <div class="p-5 flex flex-col flex-1">
    <a
      href="/experiencia/{exp.slug}"
      class="text-accent hover:text-accent-hover font-headings font-bold text-lg mb-4 line-clamp-2 hover:underline transition-colors"
    >
      {exp.title}
    </a>

    <div class="space-y-2 text-primary text-sm font-medium mb-4">
      <div class="flex items-center gap-2.5">
        <i class="fas fa-map-marker-alt w-5 text-primary/70"></i>
        <span class="truncate">{exp.location}</span>
      </div>
      <div class="flex items-center gap-2.5">
        <i class="fas fa-calendar-alt w-5 text-primary/70"></i>
        <span>{exp.dates}</span>
      </div>
      <div class="flex items-center gap-2.5">
        <i class="fas fa-user-friends w-5 text-primary/70"></i>
        <span>Máximo {exp.maxTravelers} viajeros</span>
      </div>
      <div class="flex items-center gap-2.5">
        <i class="fas fa-clock w-5 text-primary/70"></i>
        <span>{exp.durationDays} días</span>
      </div>
    </div>

    <!-- Price and Action Box -->
    <div class="mt-auto pt-4 border-t border-gray-100">
      <div class="flex items-baseline gap-2 mb-3">
        {#if exp.originalPrice > exp.discountedPrice}
          <span class="text-accent font-bold text-sm line-through">
            {exp.originalPrice.toFixed(2)}€
          </span>
        {/if}
        <span class="text-primary font-black text-2xl">
          {exp.discountedPrice.toFixed(2)}€
        </span>
      </div>

      <a
        href="/experiencia/{exp.slug}"
        class="block w-full text-center bg-accent hover:bg-accent-hover text-white font-bold py-2.5 rounded-lg transition-colors duration-200"
      >
        Más información
      </a>
    </div>
  </div>
</div>
