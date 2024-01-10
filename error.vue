<script setup lang="ts">
const props = defineProps({ error: Object })

const handleError = () => clearError({ redirect: "/" })
</script>

<template>
  <UContainer class="min-h-screen flex items-center justify-center">
    <div class="lg:flex lg:items-center lg:space-x-10">
      <img src="https://i.imgur.com/A040Lxr.png" alt="question-mark" class="h-[300px] w-auto">

      <div>
        <p class="mt-6 text-sm font-semibold text-black">
          Erreur {{ props.error?.statusCode }}
        </p>
        <h1 class="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
          Page introuvable
        </h1>
        <p class="mt-4 text-gray-500">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div class="mt-6">
          <button
            type="button"
            class="
              inline-flex items-center px-3 py-2
              shadow-sm rounded-md border border-black
              font-semibold text-sm text-black
              focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-black
            "
            @click="handleError"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="mr-2"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Revenez à la page d'accueil
          </button>
        </div>
      </div>
    </div>
  </UContainer>
</template>
