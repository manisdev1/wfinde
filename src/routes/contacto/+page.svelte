<script lang="ts">
  let name = '';
  let email = '';
  let phone = '';
  let message = '';
  let acceptPrivacy = false;
  let acceptMarketing = false;
  let isSubmitted = false;

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (!acceptPrivacy) return;
    isSubmitted = true;
  }
</script>

<svelte:head>
  <title>Contacto | Van &amp; Camp</title>
  <meta name="description" content="Contacta con el equipo de Van &amp; Camp para resolver dudas o solicitar presupuesto de alquiler." />
</svelte:head>

<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
  <div class="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-12">
      <!-- Left Column: Form (7 Cols) -->
      <div class="lg:col-span-7 p-8 sm:p-12">
        <h1 class="font-headings font-bold text-2xl sm:text-3xl text-primary mb-6">
          Tu próxima aventura comienza aquí
        </h1>

        {#if !isSubmitted}
          <form on:submit={handleSubmit} class="space-y-5 text-primary text-sm">
            <div>
              <label for="nombre" class="block font-bold text-primary mb-1">
                Nombre <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                required
                bind:value={name}
                class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-primary focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label for="email" class="block font-bold text-primary mb-1">
                Email <span class="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                bind:value={email}
                class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-primary focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label for="telefono" class="block font-bold text-primary mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                bind:value={phone}
                class="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-primary focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label for="mensaje" class="block font-bold text-primary mb-1">
                Comentarios / Preguntas <span class="text-red-500">*</span>
              </label>
              <textarea
                id="mensaje"
                rows="5"
                required
                bind:value={message}
                class="w-full border border-gray-300 rounded-lg p-3 text-primary focus:outline-none focus:border-accent"
              ></textarea>
            </div>

            <div class="space-y-2 pt-2">
              <label class="flex items-start gap-2.5 text-xs text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  bind:checked={acceptPrivacy}
                  class="mt-0.5 rounded accent-accent"
                />
                <span>
                  Acepto las <span class="text-accent underline font-semibold">políticas de privacidad</span> de la empresa. <span class="text-red-500">*</span>
                </span>
              </label>

              <label class="flex items-start gap-2.5 text-xs text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  bind:checked={acceptMarketing}
                  class="mt-0.5 rounded accent-accent"
                />
                <span>
                  Acepto recibir información, noticias y descuentos de Van &amp; Camp.
                </span>
              </label>
            </div>

            <div class="pt-4">
              <button
                type="submit"
                class="bg-accent hover:bg-accent-hover text-white font-headings font-bold text-base px-8 py-3.5 rounded-xl shadow-md transition-colors uppercase tracking-wide"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        {:else}
          <div class="text-center py-12 space-y-4">
            <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl">
              <i class="fas fa-check"></i>
            </div>
            <h2 class="font-headings font-bold text-2xl text-primary">¡Mensaje Enviado con Éxito!</h2>
            <p class="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Gracias por ponerte en contacto con Van &amp; Camp. Un asesor de nuestro equipo te responderá en menos de 24 horas.
            </p>
          </div>
        {/if}
      </div>

      <!-- Right Column: Contact Info (5 Cols) -->
      <div class="lg:col-span-5 bg-primary text-white p-8 sm:p-12 flex flex-col justify-between">
        <div class="space-y-6">
          <h2 class="font-headings font-bold text-2xl text-white leading-tight">
            ¿Preparado para disfrutar la libertad de viajar en autocaravana o camper?
          </h2>
          <p class="text-white/90 text-sm leading-relaxed font-normal">
            En Van &amp; Camp te acompañamos en cada paso: desde la elección del vehículo hasta el diseño de tu ruta ideal.
          </p>
          <p class="text-white/90 text-sm leading-relaxed font-normal">
            Escríbenos ahora y vive una experiencia segura, cómoda y 100 % personalizada sobre ruedas.
          </p>

          <!-- Contact details -->
          <div class="pt-4 space-y-4 text-sm font-medium">
            <div class="flex items-center gap-3">
              <i class="fas fa-envelope text-accent text-lg w-5 text-center"></i>
              <a href="mailto:info@vanandcamp.com" class="text-accent hover:text-white transition-colors">
                info@vanandcamp.com
              </a>
            </div>
            <div class="flex items-center gap-3">
              <i class="fas fa-phone-alt text-accent text-lg w-5 text-center"></i>
              <a href="tel:+34613010059" class="text-accent hover:text-white transition-colors">
                +34 613 01 00 59
              </a>
            </div>
            <p class="text-xs text-accent pt-1">
              Respondemos en menos de 24 horas.
            </p>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-white/15">
          <h3 class="font-headings text-sm uppercase tracking-wider text-white/80 mb-3">Encuéntranos en redes</h3>
          <div class="flex items-center gap-4 text-xl">
            <a href="https://wa.link/f3zdeq" target="_blank" rel="noopener noreferrer" class="hover:text-accent transition-colors" aria-label="WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/vanandcamp_/" target="_blank" rel="noopener noreferrer" class="hover:text-accent transition-colors" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@vanandcamp" target="_blank" rel="noopener noreferrer" class="hover:text-accent transition-colors" aria-label="TikTok">
              <i class="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
