<script setup lang="ts">
useHead({ title: "Afrikrea Marketplace" })

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <main>
    <section class="space-y-10 px-8 lg:px-20 py-10 h-full">
      <h1 class="font-bold text-primary text-center text-3xl lg:text-5xl">
        {{ t('marketplace.title') }}
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-7">
        <img
          src="https://www.anka.africa/assets/landing/anka-marketplace-girl-7aaa846c6bfa4cf515392c905c57189715b6e0f0df09e9fbe382ac22cbccc28e.svg"
          class="w-full h-auto object-cover"
        >

        <div class="flex flex-col justify-center gap-y-5">
          <h2 class="font-[500] lg:font-bold text-primary text-2xl">
            {{ t('marketplace.hero.title') }}
          </h2>

          <article class="space-y-4">
            <p>
              {{ t('marketplace.hero.article.p1') }}
            </p>
            <p>
              {{ t('marketplace.hero.article.p2') }}
            </p>
          </article>

          <div class="flex justify-start items-center gap-x-3 mt-3">
            <UButton
              :to="localePath('/book-a-demo')"
              :label="t('links.book-a-demo')"
              size="lg"
              variant="outline"
            />
            <UButton
              :to="localePath('/subscribe')"
              :label="t('links.subscribe')"
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- HOW TO -->
    <section class="bg-[#F1F0F0] px-12 lg:px-24 py-10 lg:py-20">
      <div class="flex flex-col justify-center items-center gap-y-7">
        <h2 class="font-[500] lg:font-bold text-primary text-2xl text-center">
          {{ t('marketplace.how-to.title') }}
        </h2>
        <article>
          <ul class="list-disc space-y-1">
            <li>
              {{ t('marketplace.how-to.ul.li1') }}
            </li>
            <li>
              {{ t('marketplace.how-to.ul.li2') }}
            </li>
            <li>
              {{ t('marketplace.how-to.ul.li3') }}
            </li>
            <li>
              {{ t('marketplace.how-to.ul.li4') }}
            </li>
          </ul>
        </article>

        <UButton
          :to="localePath('/book-a-demo')"
          :label="t('links.book-a-demo')"
          size="xl"
          class="text-lg"
        />

        <div class="pt-5 grid grid-cols-1 lg:grid-cols-4 gap-x-12 gap-y-14">
          <div class="flex flex-col items-center lg:gap-y-3">
            <img
              src="https://www.anka.africa/assets/landing/anka-marketplace-products-b0da8a1fcf54bc10da51bfd41e0a28475fea204abf871b4a56113cc338e57682.svg"
              class="max-w-full h-[210px]"
            >
            <p class="font-bold text-[2rem]">
              +300 000
            </p>
            <p class="text-center">
              {{ t('marketplace.how-to.stats.s1') }}
            </p>
          </div>
          <div class="flex flex-col items-center lg:gap-y-3">
            <img
              src="https://www.anka.africa/assets/landing/anka-marketplace-shops-59b16e3f7713f0566b95c168f8546f30c5929d484fbf77a7d05d19e70bfba440.svg"
              class="max-w-full h-[210px]"
            >
            <p class="font-bold text-[2rem]">
              +4 000
            </p>
            <p class="text-center">
              {{ t('marketplace.how-to.stats.s2') }}
            </p>
          </div>
          <div class="flex flex-col items-center lg:gap-y-3">
            <img
              src="https://www.anka.africa/assets/landing/anka-marketplace-revenue-731d9c111bb24752d457bee0fa3c5ed5437ed11d5a2a2ba72bb4f940bb120aa7.svg"
              class="max-w-full h-[210px]"
            >
            <p class="font-bold text-[2rem]">
              + $10M
            </p>
            <p class="text-center">
              {{ t('marketplace.how-to.stats.s3') }}
            </p>
          </div>
          <div class="flex flex-col items-center lg:gap-y-3">
            <img
              src="https://www.anka.africa/assets/landing/anka-marketplace-countries-2a0354e085f6a72739b7d470c41477f5840d04de853591fb54d13b803662f25b.svg"
              class="max-w-full h-[210px]"
            >
            <p class="font-bold text-[2rem]">
              +170
            </p>
            <p class="text-center">
              {{ t('marketplace.how-to.stats.s4') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="px-8 lg:px-24 py-10 lg:py-14 space-y-12">
      <div class="flex flex-col items-center space-y-7">
        <h2 class="font-[500] lg:font-bold text-primary text-2xl text-center">
          {{ t('marketplace.testimonials.title') }}
        </h2>

        <div class="relative z-0 aspect-video w-full">
          <YoutubePlayer id="xthk3H18TZo" title="Anka Testimonies: Marketplace Solution" />
        </div>
      </div>

      <div class="flex items-center justify-center">
        <UButton to="/subscribe" label="Subscribe" size="xl" class="text-lg" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-5 text-center">
        <div class="space-y-4">
          <blockquote class="text-[1.24rem]">
            "{{ t('marketplace.testimonials.messsages.m1') }}"
          </blockquote>
          <p class="text-primary">
            Debbo Dakar, Sénégal 🇸🇳
          </p>
        </div>
        <div class="space-y-4">
          <blockquote class="text-[1.24rem]">
            "{{ t('marketplace.testimonials.messsages.m2') }}"
          </blockquote>
          <p class="text-primary">
            Enkaya Designs, Kenya 🇰🇪
          </p>
        </div>
        <div class="space-y-4">
          <blockquote class="text-[1.24rem]">
            "{{ t('marketplace.testimonials.messsages.m3') }}"
          </blockquote>
          <p class="text-primary">
            True Fond, Ghana 🇬🇭
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
