<script setup lang="ts">
useHead({ title: "ANKA Marketplace" })

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
          src="~/assets/img/marketplace/marketplace.svg"
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
              to="https://marketplace.anka.africa/fr"
              external
              :label="t('marketplace.goto')"
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
              src="~/assets/img/marketplace/s9.svg"
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
              src="~/assets/img/marketplace/s10.svg"
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
              src="~/assets/img/marketplace/s11.svg"
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
              src="~/assets/img/marketplace/s12.svg"
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
