<script lang="ts">
  import IntelligentSearchBar from './IntelligentSearchBar.svelte';

  let isMobileMenuOpen = false;
  let isDesktopMenuOpen = false;

  function closeMenus() {
    isMobileMenuOpen = false;
    isDesktopMenuOpen = false;
  }
</script>

<!-- PRINCIPAL COLOR: Applied bg-[#79C9B8] to the header wrapper -->
<header class="sticky top-0 z-40 bg-[#79C9B8] shadow-md">
  <!-- Desktop Navigation -->
  <nav class="hidden lg:block">
    <div class="max-w-[1400px] mx-auto px-4 lg:px-8 py-3.5 flex items-center justify-between relative">
      <!-- Logo -->
      <a href="/" class="flex items-center shrink-0 p-1 transition-transform hover:scale-102">
        <img
          src="/assets/logotipo.png" 
          alt="Van & Camp Logo"
          width="263"
          height="79"
          class="h-[75px] w-auto object-contain"
        />
      </a>

      <!-- Centered Intelligent Search Bar -->
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <IntelligentSearchBar isMobile={false} />
      </div>

      <!-- Right Navigation Actions -->
      <div class="flex items-center gap-3">
        <!-- COLOR UPDATE: Changed text hover state to Deep Blue (#1E4E6C) -->
        <a
          href="/login"
          class="text-white/90 hover:text-[#1E4E6C] font-semibold text-sm px-3 py-1.5 transition-colors"
        >
          Iniciar sesión
        </a>
        <!-- COLOR UPDATE: Custom outline button. Hover shifts to white background with Deep Blue (#1E4E6C) text -->
        <a
          href="/register"
          class="border border-white/80 hover:border-white hover:bg-white hover:text-[#1E4E6C] text-white font-semibold text-sm px-4 py-1.5 rounded-full transition-all duration-200"
        >
          Registro
        </a>
        <button
          type="button"
          on:click={() => (isDesktopMenuOpen = true)}
          aria-label="Abrir menú"
          class="text-white/80 hover:text-white p-2 rounded transition-colors text-xl ml-1"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Navigation Top Bar -->
  <!-- PRINCIPAL COLOR: Kept bg-[#79C9B8] for consistency across viewpoints -->
  <nav class="lg:hidden bg-[#79C9B8] px-4 py-2.5 flex items-center justify-between">
    <!-- Hamburger Button -->
    <button
      type="button"
      on:click={() => (isMobileMenuOpen = true)}
      aria-label="Abrir menú"
      class="text-white text-2xl p-1 focus:outline-none"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Logo -->
    <a href="/" class="flex items-center shrink-0 p-1">
      <img
        src="/assets/logotipo.png"
        alt="Van & Camp Logo"
        width="263"
        height="79"
        class="h-14 w-auto object-contain"
      />
    </a>

    <!-- Spacer for balance -->
    <div class="w-8"></div>
  </nav>

  <!-- Mobile Inline Search Bar Below Header -->
  <!-- COLOR UPDATE: Applied Forest Green (#3E5F4A) subtle bottom border styling -->
  <div class="lg:hidden bg-white p-2 shadow-sm border-b border-[#3E5F4A]/20">
    <IntelligentSearchBar isMobile={true} />
  </div>
</header>

<!-- Backdrop for Drawers -->
{#if isMobileMenuOpen || isDesktopMenuOpen}
  <div
    class="fixed inset-0 bg-black/60 z-50 transition-opacity backdrop-blur-xs"
    on:click={closeMenus}
    role="presentation"
  ></div>
{/if}

<!-- Mobile Offcanvas Menu (Left Side) -->
<!-- PRINCIPAL COLOR: Menu container colored with bg-[#79C9B8] -->
<aside
  class="fixed top-0 bottom-0 left-0 w-[280px] bg-[#79C9B8] text-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col {isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}"
>
  <!-- COLOR UPDATE: Border sets off using transparent Deep Blue (#1E4E6C) -->
  <div class="p-4 border-b border-[#1E4E6C]/20 flex items-center justify-between">
    <span class="font-headings text-lg text-white font-bold">Menú</span>
    <button
      type="button"
      on:click={closeMenus}
      class="text-white/80 hover:text-white text-xl p-1"
      aria-label="Cerrar menú"
    >
      <i class="fas fa-times"></i>
    </button>
  </div>
  <div class="p-4 flex-1 overflow-y-auto space-y-2">
    <!-- COLOR UPDATE: Link hover reactions use Deep Blue (#1E4E6C) text shifts -->
    <a
      href="/register"
      on:click={closeMenus}
      class="block px-3 py-2 text-white/90 hover:text-[#1E4E6C] hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
    >
      Registro
    </a>
    <a
      href="/login"
      on:click={closeMenus}
      class="block px-3 py-2 text-white/90 hover:text-[#1E4E6C] hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
    >
      Iniciar sesión
    </a>
    <!-- COLOR UPDATE: Subdued separator border lines with Forest Green (#3E5F4A) -->
    <hr class="border-[#3E5F4A]/30 my-2" />
    <a
      href="/explorar"
      on:click={closeMenus}
      class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-[#1E4E6C] hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
    >
      <!-- COLOR UPDATE: Inline navigation utility icons colored with Forest Green (#3E5F4A) -->
      <i class="fas fa-search w-5 text-[#3E5F4A]"></i>
      <span>Explorar Vehículos</span>
    </a>
    <a
      href="/experiencias"
      on:click={closeMenus}
      class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-[#1E4E6C] hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
    >
      <i class="fas fa-route w-5 text-[#3E5F4A]"></i>
      <span>Experiencias</span>
    </a>
    <a
      href="/blog-sobre-ruedas"
      on:click={closeMenus}
      class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-[#1E4E6C] hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
    >
      <i class="fas fa-newspaper w-5 text-[#3E5F4A]"></i>
      <span>Blog sobre ruedas</span>
    </a>
    <a
      href="https://vanandcamp.com"
      target="_blank"
      rel="noreferrer"
      class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-[#1E4E6C] hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
    >
      <i class="fas fa-shopping-bag w-5 text-[#3E5F4A]"></i>
      <span>Van &amp; Camp shop</span>
    </a>
    <hr class="border-[#3E5F4A]/30 my-2" />
    <a
      href="/preguntas-frecuentes"
      on:click={closeMenus}
      class="flex items-center gap-3 px-3 py-2 text-white/90 hover:text-[#1E4E6C] hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
    >
      <i class="fas fa-question-circle w-5 text-[#3E5F4A]"></i>
      <span>Preguntas Frecuentes</span>
    </a>
    <a
      href="/contacto"
      on:click={closeMenus}
      class="flex items-center gap-3 px-3 py-2 text-white/90 hover:text-[#1E4E6C] hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
    >
      <i class="fas fa-envelope w-5 text-[#3E5F4A]"></i>
      <span>Contacto</span>
    </a>
  </div>
</aside>

<!-- Desktop Offcanvas Extra Menu (Right Side) -->
<!-- PRINCIPAL COLOR: Menu container colored with bg-[#79C9B8] -->
<aside
  class="fixed top-0 bottom-0 right-0 w-[280px] bg-[#79C9B8] text-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl flex flex-col {isDesktopMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
>
  <!-- COLOR UPDATE: Drawer header border utilizing transparent Deep Blue (#1E4E6C) -->
  <div class="p-4 border-b border-[#1E4E6C]/20 flex items-center justify-between">
    <span class="font-headings text-lg text-white font-bold">Navegación</span>
    <button
      type="button"
      on:click={closeMenus}
      class="text-white/80 hover:text-white text-xl p-1"
      aria-label="Cerrar menú"
    >
      <i class="fas fa-times"></i>
    </button>
  </div>
  <div class="p-4 flex-1 overflow-y-auto space-y-2">
    <!-- COLOR UPDATE: Inner links hover text shifts to Deep Blue (#1E4E6C) -->
    <a
      href="/explorar"
      on:click={closeMenus}
      class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-[#1E4E6C] hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
    >
      <i class="fas fa-search w-5 text-[#3E5F4A]"></i>
      <span>Explorar Vehículos</span>
    </a>
    <a
      href="/experiencias"
      on:click={closeMenus}
      class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-[#1E4E6C] hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
    >
      <i class="fas fa-route w-5 text-[#3E5F4A]"></i>
      <span>Experiencias</span>
    </a>
    <a
      href="/blog-sobre-ruedas"
      on:click={closeMenus}
      class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-[#1E4E6C] hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
    >
      <i class="fas fa-newspaper w-5 text-[#3E5F4A]"></i>
      <span>Blog sobre ruedas</span>
    </a>
    <a
      href="https://vanandcamp.com"
      target="_blank"
      rel="noreferrer"
      class="flex items-center gap-3 px-3 py-2.5 text-white/90 hover:text-[#1E4E6C] hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
    >
      <i class="fas fa-shopping-bag w-5 text-[#3E5F4A]"></i>
      <span>Van &amp; Camp shop</span>
    </a>
  </div>
</aside>
