<script lang="ts">
  let isHovered = false;
</script>

<div
  class="fixed bottom-10 right-4 z-50 flex flex-col items-end"
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
  role="region"
  aria-label="Atención al cliente WhatsApp"
>
  <!-- Tooltip info box -->
  {#if isHovered}
    <div
      class="mb-3 bg-white text-gray-800 p-4 rounded-xl shadow-xl border border-[#3E5F4A]/10 text-sm leading-relaxed w-72 transition-all duration-300 relative animate-fade-in"
    >
      <!-- COLOR UPDATE: Changed text-primary to Deep Blue (#1E4E6C) -->
      <strong class="block font-bold text-[#1E4E6C] mb-1 text-base">
        Soporte y atención al cliente
      </strong>
      <div class="text-xs text-gray-600 space-y-0.5 mb-2">
        <p>Lunes a Viernes: 9h - 19h</p>
        <p>Sábados: 9h - 14h</p>
      </div>
      <!-- COLOR UPDATE: Changed text-accent to Principal Mint Color (#79C9B8) -->
      <a
        href="tel:+34613010059"
        class="text-[#79C9B8] hover:underline font-bold text-sm"
      >
        +34 613 01 00 59
      </a>
      <!-- Downward arrow -->
      <div
        class="absolute -bottom-2 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"
      ></div>
    </div>
  {/if}

  <!-- Green Floating WhatsApp Button (Maintained standard branding color for instant UX recognition) -->
  <a
    href="https://wa.me/34613010059?text=Hola,%20me%20gustaría%20información%20sobre%20el%20alquiler%20de%20autocaravanas"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    class="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-3xl shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
  >
    <i class="fab fa-whatsapp"></i>
  </a>
</div>
