<script setup lang="ts">
const { t } = useI18n({ useScope: "global" })
const localePath = useLocalePath()

const isMenuOpen = ref(false)

async function goTo(route: string) {
  isMenuOpen.value = false

  return navigateTo(localePath(route))
}
</script>

<template>
  <header class="w-full sticky top-0 left-0 z-50 bg-white">
    <nav class="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
      <NuxtLink :to="localePath('/')">
        <Logo class="w-[136px] h-full" />
      </NuxtLink>

      <div class="hidden lg:block">
        <ul class="inline-flex space-x-8">
          <li>
            <NuxtLinkLocale to="/" class="text-gray-700 hover:text-primary">
              {{ t('links.home') }}
            </NuxtLinkLocale>
          </li>
          <li>
            <NuxtLinkLocale to="/payment" class="text-gray-700 hover:text-primary">
              {{ t('links.payment') }}
            </NuxtLinkLocale>
          </li>
          <li>
            <NuxtLinkLocale to="/shipping" class="text-gray-700 hover:text-primary">
              {{ t('links.shipping') }}
            </NuxtLinkLocale>
          </li>
          <li>
            <NuxtLinkLocale to="/marketplace" class="text-gray-700 hover:text-primary">
              {{ t('links.marketplace') }}
            </NuxtLinkLocale>
          </li>
          <li>
            <NuxtLinkLocale to="/paper" class="text-primary">
              {{ t('links.paper') }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </div>

      <div class="hidden lg:block">
        <UButton :to="localePath('/subscribe')" :label="t('links.subscribe')" size="lg" />
      </div>

      <!-- Mobile Dropdown -->
      <UButton
        size="lg"
        icon="i-heroicons-bars-3"
        :ui="{ icon: { size: { lg: 'h-6 w-6' } } }"
        class="lg:hidden"
        @click="isMenuOpen = !isMenuOpen"
      />

      <div v-if="isMenuOpen" class="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pb-6 pt-5">
            <div class="flex items-center justify-between">
              <span @click="goTo('/')">
                <Logo width="136" />
              </span>

              <div class="-mr-2">
                <UButton
                  size="lg"
                  icon="i-heroicons-bars-3"
                  :ui="{ icon: { size: { lg: 'h-6 w-6' } } }"
                  class="lg:hidden"
                  @click="isMenuOpen = !isMenuOpen"
                />
              </div>
            </div>

            <div class="mt-6 space-y-5">
              <ul class="grid gap-y-4">
                <li>
                  <span class="text-gray-700 hover:text-primary" @click="goTo('/')">
                    {{ t('links.home') }}
                  </span>
                </li>
                <li>
                  <span class="text-gray-700 hover:text-primary" @click="goTo('/payment')">
                    {{ t('links.payment') }}
                  </span>
                </li>
                <li>
                  <span class="text-gray-700 hover:text-primary" @click="goTo('/shipping')">
                    {{ t('links.shipping') }}
                  </span>
                </li>
                <li>
                  <span class="text-gray-700 hover:text-primary" @click="goTo('/marketplace')">
                    {{ t('links.marketplace') }}
                  </span>
                </li>
                <li>
                  <span class="text-primary" @click="goTo('/paper')">
                    {{ t('links.paper') }}
                  </span>
                </li>
              </ul>

              <UButton block :label="t('links.subscribe')" size="lg" @click="goTo('/subscribe')" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
