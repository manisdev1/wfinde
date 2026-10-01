<script lang="ts">
  const trips = [
    {
      title: 'El Camino de Santiago en Camper o en Autocaravana',
      img: '/assets/camino-santiago.webp',
      url: '/contacto?interes=camino-de-santiago'
    },
    {
      title: 'Viaje a Marruecos en Camper o en Autocaravana',
      img: '/assets/viaje-marruecos.webp',
      url: '/contacto?interes=viaje-marruecos'
    }
  ];
</script>

<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-headings font-bold text-[#1E4E6C] mb-3">
        Viajes únicos en autocaravana o camper
      </h2>
      <p class="text-base sm:text-lg text-[#79C9B8] font-medium max-w-xl mx-auto">
        Apúntate a viajar en grupo o por tu cuenta en autocaravana o camper
      </p>
    </div>

    <!-- 2 Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {#each trips as trip}
        <a
          href={trip.url}
          class="group block bg-white border border-[#3E5F4A]/20 rounded-xl overflow-hidden shadow-card hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-300 flex flex-col h-full"
        >
          <div class="w-full h-[220px] overflow-hidden bg-gray-100">
            <img
              src={trip.img}
              alt={trip.title}
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="p-6 text-center flex-1 flex items-center justify-center">
            <h3 class="font-headings font-bold text-xl text-[#1E4E6C] group-hover:text-[#79C9B8] transition-colors">
              {trip.title}
            </h3>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
