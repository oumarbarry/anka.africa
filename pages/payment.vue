<script setup lang="ts">
useHead({ title: "ANKA Pay" })

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <main>
    <section class="space-y-10 px-8 lg:px-20 py-10 h-full">
      <h1 class="font-bold text-primary text-center text-3xl lg:text-5xl">
        {{ t('payment.title') }}
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-7">
        <img
          src="~/assets/img/payment/payment.svg"
          class="w-full h-auto object-cover"
        >

        <div class="flex flex-col justify-center gap-y-5">
          <h2 class="font-[500] lg:font-bold text-primary text-2xl">
            {{ t('payment.hero.title') }}
          </h2>

          <article class="space-y-4">
            <p>
              {{ t('payment.hero.article.p1') }}
            </p>
            <p>
              {{ t('payment.hero.article.p2') }}
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
          {{ t('payment.how-to.title') }}
        </h2>
        <article>
          <ul class="list-disc space-y-1">
            <li>
              {{ t('payment.how-to.ul.li1') }}
            </li>
            <li>
              {{ t('payment.how-to.ul.li2') }}
            </li>
            <li>
              {{ t('payment.how-to.ul.li3') }}
            </li>
            <li>
              {{ t('payment.how-to.ul.li4') }}
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
              src="~/assets/img/payment/s1.svg"
              class="max-w-full h-[210px]"
            >
            <p class="font-bold text-[2rem]">
              61 041
            </p>
            <p class="text-center">
              {{ t('payment.how-to.stats.s1') }}
            </p>
          </div>
          <div class="flex flex-col items-center lg:gap-y-3">
            <img
              src="~/assets/img/payment/s2.svg"
              class="max-w-full h-[210px]"
            >
            <p class="font-bold text-[2rem]">
              $23M
            </p>
            <p class="text-center">
              {{ t('payment.how-to.stats.s2') }}
            </p>
          </div>
          <div class="flex flex-col items-center lg:gap-y-3">
            <img
              src="~/assets/img/payment/s3.svg"
              class="max-w-full h-[210px]"
            >
            <p class="font-bold text-[2rem]">
              9
            </p>
            <p class="text-center">
              {{ t('payment.how-to.stats.s3') }}
            </p>
          </div>
          <div class="flex flex-col items-center lg:gap-y-3">
            <img
              src="~/assets/img/payment/s4.svg"
              class="max-w-full h-[210px]"
            >
            <p class="font-bold text-[2rem]">
              116
            </p>
            <p class="text-center">
              {{ t('payment.how-to.stats.s4') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="px-8 lg:px-24 py-10 lg:py-14 space-y-12">
      <div class="flex flex-col items-center space-y-7">
        <h2 class="font-[500] lg:font-bold text-primary text-2xl text-center">
          {{ t('payment.how-to.testimonials.title') }}
        </h2>

        <div class="relative z-0 aspect-video w-full">
          <YoutubePlayer id="r4szB_xNlus" title="Anka Testimonies: Direct Payment Solution" />
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
            "{{ t('payment.how-to.testimonials.messsages.m1') }}"
          </blockquote>
          <p class="text-primary">
            Urembo Sandals, Kenya 🇰🇪
          </p>
        </div>
        <div class="space-y-4">
          <blockquote class="text-[1.24rem]">
            "{{ t('payment.how-to.testimonials.messsages.m2') }}"
          </blockquote>
          <p class="text-primary">
            Sofatoo, Senegal 🇸🇳
          </p>
        </div>
        <div class="space-y-4">
          <blockquote class="text-[1.24rem]">
            "{{ t('payment.how-to.testimonials.messsages.m3') }}"
          </blockquote>
          <p class="text-primary">
            Tinamasese, Nigeria 🇳🇬
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
