<script lang="ts">
  import { onMount } from 'svelte';

  let isVisible = false;
  let isModalOpen = false;

  let necessary = true;
  let analytics = true;
  let marketing = true;

  onMount(() => {
    const consent = localStorage.getItem('vanandcamp_cookie_consent');
    if (!consent) {
      isVisible = true;
    }
  });

  function acceptAll() {
    localStorage.setItem('vanandcamp_cookie_consent', JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    isVisible = false;
    isModalOpen = false;
  }

  function rejectAll() {
    localStorage.setItem('vanandcamp_cookie_consent', JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    isVisible = false;
    isModalOpen = false;
  }

  function savePreferences() {
    localStorage.setItem('vanandcamp_cookie_consent', JSON.stringify({ necessary: true, analytics, marketing }));
    isVisible = false;
    isModalOpen = false;
  }
</script>

{#if isVisible}
  <!-- Cookie Consent Banner -->
  <aside
    class="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 shadow-2xl p-4 md:p-6 z-50 animate-slide-up"
    aria-label="Consentimiento de cookies"
  >
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="space-y-1 text-center md:text-left">
        <h4 class="font-headings font-bold text-primary text-base">Valoramos tu privacidad</h4>
        <p class="text-xs sm:text-sm text-gray-600 max-w-4xl">
          Usamos cookies para mejorar su experiencia de navegación, mostrarle anuncios o contenidos personalizados y analizar nuestro tráfico. Al hacer clic en “Aceptar todo” usted da su consentimiento a nuestro uso de las cookies.
        </p>
      </div>

      <div class="flex items-center gap-3 shrink-0">
        <button
          type="button"
          on:click={acceptAll}
          class="bg-accent hover:bg-accent-hover text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors shadow-sm"
        >
          Aceptar Todo
        </button>
        <button
          type="button"
          on:click={rejectAll}
          class="text-gray-600 hover:text-primary font-semibold text-xs sm:text-sm px-3 py-2 transition-colors underline"
        >
          Rechazar Todo
        </button>
        <button
          type="button"
          on:click={() => (isModalOpen = true)}
          class="text-gray-600 hover:text-primary font-semibold text-xs sm:text-sm px-3 py-2 transition-colors underline"
        >
          Personalizar
        </button>
      </div>
    </div>
  </aside>
{/if}

<!-- Preferences Modal -->
{#if isModalOpen}
  <div class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
    <div class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 animate-scale-up">
      <div class="flex items-center justify-between border-b border-gray-100 pb-3">
        <h3 class="font-headings font-bold text-lg text-primary">Personaliza tus Preferencias de Cookies</h3>
        <button
          type="button"
          on:click={() => (isModalOpen = false)}
          class="text-gray-400 hover:text-gray-600 text-lg p-1"
          aria-label="Cerrar modal"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div class="space-y-4 text-xs sm:text-sm text-gray-600 max-h-96 overflow-y-auto pr-2">
        <div class="border border-gray-100 rounded-xl p-3 bg-gray-50">
          <div class="flex items-center justify-between mb-1">
            <span class="font-bold text-primary">Cookies Necesarias</span>
            <span class="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded font-bold">Siempre activas</span>
          </div>
          <p class="text-xs text-gray-500">Esenciales para el funcionamiento de la web y el proceso de reserva.</p>
        </div>

        <div class="border border-gray-100 rounded-xl p-3">
          <div class="flex items-center justify-between mb-1">
            <span class="font-bold text-primary">Cookies de Rendimiento y Analíticas</span>
            <input type="checkbox" bind:checked={analytics} class="w-4 h-4 accent-accent rounded" />
          </div>
          <p class="text-xs text-gray-500">Nos ayudan a entender cómo interactúan los usuarios para mejorar la experiencia.</p>
        </div>

        <div class="border border-gray-100 rounded-xl p-3">
          <div class="flex items-center justify-between mb-1">
            <span class="font-bold text-primary">Cookies de Publicidad y Marketing</span>
            <input type="checkbox" bind:checked={marketing} class="w-4 h-4 accent-accent rounded" />
          </div>
          <p class="text-xs text-gray-500">Utilizadas para ofrecer recomendaciones y promociones afines a tus viajes.</p>
        </div>
      </div>

      <div class="flex justify-end gap-3 pt-3 border-t border-gray-100">
        <button
          type="button"
          on:click={rejectAll}
          class="px-4 py-2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold text-xs rounded-lg transition-colors"
        >
          Rechazar Todo
        </button>
        <button
          type="button"
          on:click={savePreferences}
          class="px-5 py-2 bg-accent hover:bg-accent-hover text-white font-bold text-xs rounded-lg transition-colors"
        >
          Guardar Preferencias
        </button>
      </div>
    </div>
  </div>
{/if}
