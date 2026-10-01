<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import WhatsAppFloatingWidget from '$lib/components/WhatsAppFloatingWidget.svelte';
  import CookieConsent from '$lib/components/CookieConsent.svelte';

  export let data;
</script>

<div class="min-h-screen flex flex-col bg-[#f8f9fa] selection:bg-accent selection:text-white">
  <Header />

  <main class="flex-grow">
    <slot />
  </main>

  <Footer />
  <WhatsAppFloatingWidget />
  <CookieConsent />
</div>
