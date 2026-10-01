<script lang="ts">
  let email = '';
  let password = '';
  let submitted = false;

  function handleSubmit(e: Event) {
    e.preventDefault();
    submitted = true;
  }
</script>

<svelte:head>
  <title>Iniciar Sesión | Van &amp; Camp</title>
</svelte:head>

<div class="max-w-md mx-auto px-4 py-16">
  <div class="bg-white rounded-2xl p-8 shadow-card border border-gray-100 text-primary">
    <div class="text-center mb-8">
      <img src="/assets/LOGO.webp" alt="Van & Camp" class="h-12 w-auto mx-auto mb-4" />
      <h1 class="font-headings font-bold text-2xl">Iniciar sesión</h1>
      <p class="text-xs text-gray-500 mt-1">Accede a tu panel de reservas y viajes</p>
    </div>

    {#if !submitted}
      <form on:submit={handleSubmit} class="space-y-4 text-xs sm:text-sm">
        <div>
          <label for="login-email" class="block font-bold mb-1">Correo electrónico</label>
          <input
            id="login-email"
            type="email"
            required
            bind:value={email}
            class="w-full border border-gray-300 rounded-lg p-2.5 text-primary focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label for="login-password" class="block font-bold mb-1">Contraseña</label>
          <input
            id="login-password"
            type="password"
            required
            bind:value={password}
            class="w-full border border-gray-300 rounded-lg p-2.5 text-primary focus:outline-none focus:border-accent"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-sm"
        >
          Acceder
        </button>
      </form>
    {:else}
      <div class="text-center py-6 space-y-2">
        <div class="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-xl">
          <i class="fas fa-check"></i>
        </div>
        <p class="font-bold text-sm">Sesión iniciada correctamente</p>
      </div>
    {/if}

    <div class="mt-6 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">
      ¿No tienes una cuenta aún?
      <a href="/register" class="text-accent font-bold hover:underline ml-1">Regístrate</a>
    </div>
  </div>
</div>
