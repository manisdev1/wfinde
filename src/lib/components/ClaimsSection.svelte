<script lang="ts">
  const claims = [
    {
      icon: 'fas fa-map',
      title: 'No solo alquiler',
      text: 'Planificamos tu viaje completo contigo'
    },
    {
      icon: 'fas fa-euro-sign',
      title: 'Precios claros',
      text: 'Olvídate de costes ocultos, pagas solo lo que ves.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Solo los mejores proveedores',
      text: 'Empresas seleccionadas por su calidad y seguridad.'
    },
    {
      icon: 'fas fa-file-contract',
      title: 'Seguro incluido',
      text: 'Sin letra pequeña, total transparencia en tu viaje.'
    }
  ];

  let currentMobileIndex = 0;
</script>

<section class="py-14 sm:py-18 bg-[#f8f9fa]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Desktop Grid (hidden on mobile, visible on md+) -->
    <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each claims as claim}
        <div
          class="bg-[#1E4E6C] border-[#e0e0e0] rounded-xl p-8 text-center flex flex-col justify-center items-center shadow-card hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300"
        >
          <div class="text-3xl sm:text-4xl text-accent mb-4">
            <i class={claim.icon}></i>
          </div>
          <h3 class="text-xl font-bold text-white mb-2 font-body">
            {claim.title}
          </h3>
          <p class="text-white/90 text-sm leading-relaxed">
            {claim.text}
          </p>
        </div>
      {/each}
    </div>

    <!-- Mobile Interactive Carousel -->
    <div class="md:hidden">
      <div class="overflow-hidden rounded-xl">
        <div
          class="flex transition-transform duration-300 ease-out"
          style="transform: translateX(-{currentMobileIndex * 100}%);"
        >
          {#each claims as claim}
            <div class="w-full shrink-0 px-2">
              <div class="bg-primary border border-[#e0e0e0] rounded-xl p-7 text-center flex flex-col justify-center items-center shadow-md">
                <div class="text-4xl text-accent mb-4">
                  <i class={claim.icon}></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-2 font-body">
                  {claim.title}
                </h3>
                <p class="text-white/90 text-sm">
                  {claim.text}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Carousel Pagination Dots -->
      <div class="flex justify-center items-center gap-2 mt-4">
        {#each claims as _, i}
          <button
            type="button"
            on:click={() => (currentMobileIndex = i)}
            aria-label="Ir a diapositiva {i + 1}"
            class="w-2.5 h-2.5 rounded-full transition-all duration-200 {currentMobileIndex === i ? 'bg-primary w-6' : 'bg-gray-300'}"
          ></button>
        {/each}
      </div>
    </div>
  </div>
</section>
