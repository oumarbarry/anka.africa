<script setup lang="ts">
const { locale, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const currentLocale = computed(() => locale.value)
</script>

<template>
  <footer class="px-3 lg:px-20 text-center lg:text-left">
    <hr>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-7 py-5">
      <div class="inline-flex justify-center lg:inline-grid lg:justify-normal">
        <Logo class="w-[158px] h-[40px] lg:h-[35px]" />
      </div>

      <div class="flex flex-col gap-y-3">
        <p class="text-[#939393]">
          NAVIGATION
        </p>

        <NuxtLinkLocale to="/" class="text-gray-700 hover:text-primary">
          {{ t('links.home') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/payment" class="text-gray-700 hover:text-primary">
          {{ t('links.payment') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/shipping" class="text-gray-700 hover:text-primary">
          {{ t('links.shipping') }}
        </NuxtLinkLocale>
        <NuxtLinkLocale to="/marketplace" class="text-gray-700 hover:text-primary">
          {{ t('links.marketplace') }}
        </NuxtLinkLocale>
      </div>

      <div class="flex flex-col gap-y-3 pb-2.5 lg:pb-0">
        <p class="text-[#939393]">
          SUPPORT
        </p>

        <NuxtLinkLocale to="/book-a-demo" class="text-gray-700 hover:text-primary">
          {{ t('links.book-a-demo') }}
        </NuxtLinkLocale>
        <NuxtLink
          to="mailto:help@anka.africa"
          external
          class="text-gray-700 hover:text-primary"
        >
          {{ t('links.email-us') }}
        </NuxtLink>
        <NuxtLink
          to="https://anka.breezy.hr"
          target="_blank"
          external
          class="text-gray-700 hover:text-primary"
        >
          {{ t('links.careers') }}
        </NuxtLink>
        <NuxtLinkLocale to="/paper" class="text-primary">
          {{ t('links.paper') }}
        </NuxtLinkLocale>
      </div>
    </div>

    <hr>

    <div class="text-center py-5">
      <NuxtLink v-if="currentLocale === 'fr'" :to="switchLocalePath('en')" class="text-gray-700 hover:text-primary">
        English version
      </NuxtLink>
      <NuxtLink v-else-if="currentLocale === 'en'" :to="switchLocalePath('fr')" class="text-gray-700 hover:text-primary">
        Version française
      </NuxtLink>
    </div>

    <hr>

    <div class="flex flex-col lg:flex-row gap-y-5 py-5">
      <div class="grow">
        <CopyrightServer />
      </div>

      <div class="flex flex-col lg:flex-row gap-x-5 gap-y-3">
        <NuxtLink
          to="https://www.afrikrea.com/en/pages/legal"
          target="_blank"
          external
          class="text-gray-700 hover:text-primary"
        >
          {{ t('links.legal-notice') }}
        </NuxtLink>
        <NuxtLink
          to="https://www.afrikrea.com/en/pages/terms"
          target="_blank"
          external
          class="text-gray-700 hover:text-primary"
        >
          {{ t('links.terms') }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
