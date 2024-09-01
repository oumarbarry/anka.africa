<script setup lang="ts">
useHead({ title: "ANKA Shipping" })

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <main>
    <section class="space-y-10 px-8 lg:px-20 py-10 h-full">
      <h1 class="font-bold text-primary text-center text-3xl lg:text-5xl">
        {{ t('shipping.title') }}
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-7">
        <img
          src="~/assets/img/shipping/shipping.svg"
          class="w-full h-auto object-cover"
        >

        <div class="flex flex-col justify-center gap-y-5">
          <h2 class="font-[500] lg:font-bold text-primary text-2xl">
            {{ t('shipping.hero.title') }}
          </h2>

          <article class="space-y-4">
            <p>
              {{ t('shipping.hero.article.p1') }}
            </p>
            <p>
              {{ t('shipping.hero.article.p2') }}
            </p>
          </article>

          <div class="flex justify-start items-center gap-x-3 mt-3">
            <UButton
              :to="localePath('/shipping-calculator')"
              :label="t('links.get-a-quote')"
              variant="outline"
              size="lg"
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
        <h2 class="font-[500] lg:font-bold text-primary text-2xl">
          {{ t('shipping.how-to.title') }}
        </h2>
        <article>
          <ul class="list-disc space-y-1">
            <li>
              {{ t('shipping.how-to.ul.li1') }}
            </li>
            <li>
              {{ t('shipping.how-to.ul.li2') }}
            </li>
            <li>
              {{ t('shipping.how-to.ul.li3') }}
            </li>
            <li>
              {{ t('shipping.how-to.ul.li4') }}
            </li>
            <li>
              {{ t('shipping.how-to.ul.li5') }}
            </li>
          </ul>
        </article>

        <UButton
          :to="localePath('/shipping-calculator')"
          :label="t('links.get-a-quote')"
          size="xl"
          class="text-lg"
        />

        <div class="pt-5 grid grid-cols-1 lg:grid-cols-4 gap-x-12 gap-y-14">
          <div class="flex flex-col items-center lg:gap-y-3">
            <img

              src="~/assets/img/shipping/s5.svg"
              class="max-w-full h-[210px]"
            >
            <p class="font-bold text-[2rem]">
              254 240
            </p>
            <p class="text-center">
              {{ t('shipping.how-to.stats.s1') }}
            </p>
          </div>
          <div class="flex flex-col items-center lg:gap-y-3">
            <img
              src="~/assets/img/shipping/s6.svg"
              class="max-w-full h-[210px]"
            >
            <p class="font-bold text-[2rem]">
              522
            </p>
            <p class="text-center">
              {{ t('shipping.how-to.stats.s2') }}
            </p>
          </div>
          <div class="flex flex-col items-center lg:gap-y-3">
            <img
              src="~/assets/img/shipping/s7.svg"
              class="max-w-full h-[210px]"
            >
            <p class="font-bold text-[2rem]">
              55
            </p>
            <p class="text-center">
              {{ t('shipping.how-to.stats.s3') }}
            </p>
          </div>
          <div class="flex flex-col items-center lg:gap-y-3">
            <img
              src="~/assets/img/shipping/s8.svg"
              class="max-w-full h-[210px]"
            >
            <p class="font-bold text-[2rem]">
              3
            </p>
            <p class="text-center">
              {{ t('shipping.how-to.stats.s4') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="px-8 lg:px-24 py-10 lg:py-14 space-y-12">
      <div class="flex flex-col items-center space-y-7">
        <h2 class="font-[500] lg:font-bold text-primary text-2xl text-center">
          {{ t('shipping.testimonials.title') }}
        </h2>

        <div class="relative z-0 aspect-video w-full">
          <YoutubePlayer id="KbPqrPcrCPM" title="Anka Testimonies: Shipping" />
        </div>
      </div>

      <div class="flex items-center justify-center">
        <UButton
          :to="localePath('/subscribe')"
          :label="t('links.subscribe')"
          size="xl"
          class="text-lg"
        />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-5 text-center">
        <div class="space-y-4">
          <blockquote class="text-[1.24rem]">
            "{{ t('shipping.testimonials.messsages.m1') }}"
          </blockquote>
          <p class="text-primary">
            Kwelaku, Nigeria 🇳🇬
          </p>
        </div>
        <div class="space-y-4">
          <blockquote class="text-[1.24rem]">
            "{{ t('shipping.testimonials.messsages.m2') }}"
          </blockquote>
          <p class="text-primary">
            Threaded Tribes, Ghana 🇬🇭
          </p>
        </div>
        <div class="space-y-4">
          <blockquote class="text-[1.24rem]">
            "{{ t('shipping.testimonials.messsages.m3') }}"
          </blockquote>
          <p class="text-primary">
            Sosoden, Benin 🇧🇯
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
