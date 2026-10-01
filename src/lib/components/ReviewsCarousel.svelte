<script lang="ts">
  import { reviews } from '$lib/data/reviews';

  let currentIndex = 0;
  const itemsPerPage = 3; 
  const maxIndex = Math.max(0, reviews.length - 1);

  function prev() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
  }

  function next() {
    currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
  }
</script>

<section class="py-16 bg-[#3E5F4A]/5">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-headings font-bold text-[#1E4E6C] mb-2">
        Comentarios de nuestros viajeros
      </h2>
      <div class="w-16 h-1 bg-[#79C9B8] mx-auto mb-3 rounded-full"></div>
      <p class="text-base sm:text-lg text-[#1E4E6C] font-medium">
        ¿Por qué nos eligen?
      </p>
    </div>

    <!-- Carousel Viewport -->
    <div class="relative">
      <div class="overflow-hidden">
        <div
          class="flex transition-transform duration-300 ease-out -mx-3"
          style="transform: translateX(-{currentIndex * (100 / (1))}%) md:transform: none;"
        >
          <!-- Grid on md+, slider on mobile -->
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each reviews.slice(0, 3) as review}
            <div
              class="bg-white rounded-xl p-7 shadow-[0_5px_15px_rgba(0,0,0,0.04)] border border-[#3E5F4A]/10 h-[340px] flex flex-col relative hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <!-- Google Icon in Top Right -->
              <svg class="absolute top-6 right-6 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6 l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>

              <!-- 5 Stars (Principal Color Mint) -->
              <div class="text-[#79C9B8] text-base flex gap-1 mb-3">
                {#each Array(5) as _}
                  <i class="fas fa-star"></i>
                {/each}
              </div>

              <!-- Quote Text -->
              <div class="flex-1 overflow-y-auto pr-2 mb-4 relative">
                <p class="text-[#1E4E6C] text-[0.92rem] leading-relaxed italic line-clamp-5">
                  "{review.text}"
                </p>
              </div>

              <!-- Author Info -->
              <div class="mt-auto pt-3 border-t border-[#3E5F4A]/10 flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-[#3E5F4A]/5 flex items-center justify-center text-[#1E4E6C] text-xl shrink-0">
                  <i class="fas fa-user-circle"></i>
                </div>
                <div>
                  <h4 class="font-headings font-bold text-[#1E4E6C] text-sm capitalize">
                    {review.author}
                  </h4>
                  {#if review.relativeTime}
                    <span class="text-xs text-[#1E4E6C]/60">{review.relativeTime}</span>
                  {/if}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- CTA Button to Google Reviews -->
    <div class="text-center mt-12">
      <a
        href="https://g.page/r/Ceq26CLeNRGUEAE/review"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 bg-[#1E4E6C] hover:bg-[#79C9B8] text-white font-headings font-bold text-base px-8 py-3 rounded-full shadow-md hover:-translate-y-0.5 transition-all duration-300"
      >
        <i class="fab fa-google"></i> Ver todas las reseña
      </a>
    </div>
  </div>
</section>
