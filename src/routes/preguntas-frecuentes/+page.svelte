<script lang="ts">
  import { faqs } from '$lib/data/faqs';

  let openFaqId: string | null = '1';

  function toggleFaq(id: string) {
    openFaqId = openFaqId === id ? null : id;
  }
</script>

<svelte:head>
  <title>Preguntas Frecuentes | Van &amp; Camp</title>
  <meta name="description" content="Encuentra respuestas a tus preguntas más comunes sobre el alquiler de autocaravanas y campers con Van &amp; Camp." />
</svelte:head>

<!-- Header -->
<section class="bg-primary text-white py-16 text-center">
  <div class="max-w-4xl mx-auto px-4">
    <h1 class="font-headings text-3xl sm:text-5xl font-black mb-4">
      Preguntas Frecuentes
    </h1>
    <p class="text-base sm:text-lg text-white/90 max-w-xl mx-auto">
      Todo lo que necesitas saber antes, durante y después de tu aventura en autocaravana o camper.
    </p>
  </div>
</section>

<!-- Accordion Section -->
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div class="space-y-4">
    {#each faqs as faq}
      <div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-colors">
        <button
          type="button"
          on:click={() => toggleFaq(faq.id)}
          class="w-full p-5 text-left flex items-center justify-between gap-4 font-headings font-bold text-base sm:text-lg text-primary hover:text-accent transition-colors"
        >
          <span class="flex items-center gap-3">
            <i class="fas fa-question-circle text-accent shrink-0"></i>
            <span>{faq.question}</span>
          </span>
          <i
            class="fas fa-chevron-down text-sm text-gray-400 transform transition-transform duration-200 shrink-0 {openFaqId === faq.id ? 'rotate-180 text-accent' : ''}"
          ></i>
        </button>

        {#if openFaqId === faq.id}
          <div class="px-5 pb-5 text-sm sm:text-base text-primary/80 leading-relaxed border-t border-gray-100 pt-4">
            <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary mb-3">
              {faq.category}
            </span>
            <p>{faq.answer}</p>
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Contact CTA Card -->
  <div class="mt-16 bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-card space-y-4">
    <div class="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto text-xl">
      <i class="fas fa-headset"></i>
    </div>
    <h3 class="font-headings font-bold text-xl text-primary">¿No has encontrado la respuesta que buscabas?</h3>
    <p class="text-sm text-gray-600 max-w-md mx-auto">
      Estamos disponibles para resolver cualquier duda técnica o de planificación sobre tu viaje.
    </p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a
        href="https://wa.me/34613010059"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-2.5 rounded-full text-sm shadow-sm transition-colors"
      >
        <i class="fab fa-whatsapp"></i> Hablar por WhatsApp
      </a>
      <a
        href="/contacto"
        class="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-2.5 rounded-full text-sm shadow-sm transition-colors"
      >
        <i class="fas fa-envelope"></i> Formulario de contacto
      </a>
    </div>
  </div>
</div>
