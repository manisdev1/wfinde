<script lang="ts">
  import { locations } from '$lib/data/locations';
</script>

<!-- PRINCIPAL COLOR: Changed bg-primary to bg-[#79C9B8], and border to Forest Green tone -->
<footer class="bg-[#79C9B8] text-white pt-16 pb-8 border-t border-[#3E5F4A]/20 mt-auto">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
      <!-- Column 1: Brand & Socials (Col span 4) -->
      <div class="lg:col-span-4 text-center md:text-left">
        <a href="/" class="inline-block mb-4">
          <img
            src="/assets/LOGO.webp"
            alt="Van & Camp Logo"
            width="263"
            height="79"
            class="h-16 w-auto object-contain mx-auto md:mx-0"
          />
        </a>
        <p class="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">
          Tu próxima aventura sobre ruedas empieza aquí. Conectamos a viajeros con anfitriones de campers y autocaravanas.
        </p>
        <div class="flex items-center justify-center md:justify-start gap-4">
          <!-- COLOR UPDATE: Social badges change to Deep Blue (#1E4E6C) on hover -->
          <a
            href="https://wa.link/f3zdeq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            class="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1E4E6C] text-white flex items-center justify-center text-lg transition-colors"
          >
            <i class="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com/vanandcamp_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1E4E6C] text-white flex items-center justify-center text-lg transition-colors"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.tiktok.com/@vanandcamp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            class="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1E4E6C] text-white flex items-center justify-center text-lg transition-colors"
          >
            <i class="fab fa-tiktok"></i>
          </a>
        </div>
      </div>

      <!-- Column 2: Páginas (Col span 2) -->
      <div class="lg:col-span-2">
        <h4 class="font-headings text-white font-bold text-lg mb-4">Páginas</h4>
        <!-- COLOR UPDATE: Inner menu text link hover targets shifted to Deep Blue (#1E4E6C) -->
        <ul class="space-y-2.5 text-sm text-white/80">
          <li>
            <a href="/explorar" class="hover:text-[#1E4E6C] transition-colors">Explorar vehículos</a>
          </li>
          <li>
            <a href="/experiencias" class="hover:text-[#1E4E6C] transition-colors">Experiencias</a>
          </li>
          <li>
            <a href="/blog-sobre-ruedas" class="hover:text-[#1E4E6C] transition-colors">Blog sobre ruedas</a>
          </li>
          <li>
            <a href="https://vanandcamp.com/tienda/" target="_blank" rel="noreferrer" class="hover:text-[#1E4E6C] transition-colors">Van &amp; Camp Shop</a>
          </li>
          <li>
            <a href="/contacto" class="hover:text-[#1E4E6C] transition-colors">Contacto</a>
          </li>
          <li>
            <a href="/login" class="hover:text-[#1E4E6C] transition-colors">Iniciar sesión</a>
          </li>
          <li>
            <a href="/register" class="hover:text-[#1E4E6C] transition-colors">Registro</a>
          </li>
        </ul>
      </div>

      <!-- Column 3: Acerca de (Col span 2) -->
      <div class="lg:col-span-2">
        <h4 class="font-headings text-white font-bold text-lg mb-4">Acerca de</h4>
        <!-- COLOR UPDATE: About links text hover targets shifted to Deep Blue (#1E4E6C) -->
        <ul class="space-y-2.5 text-sm text-white/80">
          <li>
            <a href="/que-es-van-camp" class="hover:text-[#1E4E6C] transition-colors">Sobre nosotros</a>
          </li>
          <li>
            <a href="/preguntas-frecuentes" class="hover:text-[#1E4E6C] transition-colors">Preguntas Frecuentes</a>
          </li>
          <li>
            <a href="/contacto" class="hover:text-[#1E4E6C] transition-colors">Política de Privacidad</a>
          </li>
          <li>
            <a href="/contacto" class="hover:text-[#1E4E6C] transition-colors">Términos de Servicio</a>
          </li>
          <li>
            <a href="/contacto" class="hover:text-[#1E4E6C] transition-colors">Política de Cookies</a>
          </li>
          <li>
            <a href="/contacto" class="hover:text-[#1E4E6C] transition-colors">Envíos y Devoluciones</a>
          </li>
        </ul>
      </div>

      <!-- Column 4: Alquiler de Autocaravanas en (Col span 4) -->
      <div class="lg:col-span-4">
        <h4 class="font-headings text-white font-bold text-lg mb-4">
          Alquiler de Autocaravanas en:
        </h4>
        <!-- COLOR UPDATE: Badges hover to Deep Blue (#1E4E6C) with Forest Green bounds -->
        <div class="flex flex-wrap gap-2">
          {#each locations as loc}
            <a
              href="/explorar?zona={encodeURIComponent(loc.name)}"
              class="inline-block px-3 py-1.5 bg-white/10 hover:bg-[#1E4E6C] border border-[#3E5F4A]/20 rounded-full text-xs font-medium text-white transition-all duration-200"
            >
              {loc.name}
            </a>
          {/each}
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <!-- COLOR UPDATE: Divider line updated to match Forest Green configuration -->
    <div class="pt-8 border-t border-[#3E5F4A]/20 text-center text-xs text-white/60">
      &copy; 2026 Van &amp; Camp. Todos los derechos reservados.
    </div>
  </div>
</footer>
