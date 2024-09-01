<script setup lang="ts">
useHead({ title: "ANKA" })

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <main>
    <!-- HERO BANNER -->
    <section class="bg-[#F1F0F0] lg:flex lg:justify-center px-10 py-12 lg:px-20 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-5 lg:w-[70%]">
        <div class="flex flex-col lg:justify-center gap-y-7">
          <h1 class="font-[600] text-3xl lg:text-5xl">
            {{ t('home.hero.title') }}
          </h1>

          <p class="font-[400] text-xl ">
            {{ t('home.hero.paragraph') }}
          </p>

          <div class="flex flex-col lg:flex-row gap-3">
            <UButton
              :to="localePath('/book-a-demo')"
              :label="t('links.book-a-demo')"
              size="xl"
              variant="outline"
              class="text-lg"
            />
            <UButton
              :to="localePath('/subscribe')"
              :label="t('links.subscribe')" size="xl" class="text-lg"
            />
          </div>
        </div>

        <img
          width="700"
          height="500s"
          src="~/assets/img/home/globe.png"
        >
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section class="px-10 lg:px-16 pt-20 pb-24 lg:pb-32 flex flex-col items-center gap-y-16">
      <h2 class="font-[500] text-primary text-center text-2xl lg:text-[2rem]">
        {{ t('home.about.title.part1') }}
        <br>
        {{ t('home.about.title.part2') }}
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-10">
        <div class="flex flex-col items-center gap-y-3">
          <img
            src="~/assets/img/home/marketplace1.png"
            alt="africa, sell, sell globally"
            class="size-[33px]"
          >
          <h5 class="font-bold text-xl">
            ANKA Marketplace
          </h5>
          <p class="text-center">
            {{ t('home.about.services.marketplace.paragraph') }}
          </p>
        </div>

        <div class="flex flex-col items-center gap-y-3">
          <img
            src="~/assets/img/home/shipping1.png"
            alt="africa, sell, sell globally"
            class="size-[33px]"
          >
          <h5 class="font-bold text-xl">
            ANKA Shipping
          </h5>
          <p class="text-center">
            {{ t('home.about.services.shipping.paragraph') }}
          </p>
        </div>

        <div class="flex flex-col items-center gap-y-3">
          <img
            src="~/assets/img/home/payment1.png"
            alt="africa, sell, sell globally"
            class="size-[33px]"
          >
          <h5 class="font-bold text-xl">
            ANKA Pay
          </h5>
          <p class="text-center">
            {{ t('home.about.services.pay.paragraph') }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div class="flex flex-col text-center gap-y-2">
          <span class="text-primary font-[600] text-3xl">
            20K+
          </span>
          <p>
            {{ t('home.about.stats.s1') }}
          </p>
        </div>

        <div class="flex flex-col text-center gap-y-2">
          <span class="text-primary font-[600] text-3xl">
            1M+
          </span>
          <p>
            {{ t('home.about.stats.s2') }}
          </p>
        </div>

        <div class="flex flex-col text-center gap-y-2">
          <span class="text-primary font-[600] text-3xl">
            N°1
          </span>
          <p>
            {{ t('home.about.stats.s3') }}
          </p>
        </div>

        <div class="flex flex-col text-center gap-y-2">
          <span class="text-primary font-[600] text-3xl">
            {{ t('home.about.stats.s4.number') }}
          </span>
          <p>
            {{ t('home.about.stats.s4.text') }}
          </p>
        </div>

        <div class="flex flex-col text-center gap-y-2">
          <span class="text-primary font-[600] text-3xl">
            $50M+
          </span>
          <p>
            {{ t('home.about.stats.s5') }}
          </p>
        </div>
      </div>
    </section>

    <!-- ABOUT ANKA Pay -->
    <section class="bg-[#F1F0F0] h-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16 px-10 py-14 lg:p-20">
      <div class="flex flex-col justify-center space-y-7">
        <div class="space-y-4">
          <h1 class="font-bold text-2xl lg:text-4xl">
            ANKA Pay
          </h1>
          <h2 class="text-primary text-xl lg:text-2xl">
            {{ t('home.about-pay.subtitle') }}
          </h2>
        </div>

        <div class="space-y-3">
          <p>{{ t('home.about-pay.article.p1') }}</p>
          <p>{{ t('home.about-pay.article.p2') }}</p>
          <p>{{ t('home.about-pay.article.p3') }}</p>
          <p>{{ t('home.about-pay.article.p4') }}</p>
        </div>

        <div>
          <UButton :to="localePath('/payment')" :label="t('home.learn-more')" size="lg" />
        </div>
      </div>

      <div class="text-center">
        <img
          class="inline-block max-w-full h-auto"
          width="500"
          height="auto"
          src="~/assets/img/home/payment2.png"
          alt="entrepreneur, online, africa, ship, shipping globally, dropshipper, dropshipping"
        >
      </div>
    </section>

    <!-- About ANKA Shipping -->
    <section class="h-full grid grid-cols-1 lg:grid-cols-2 gap-16 px-10 py-14 lg:px-[4.7rem] lg:py-20">
      <div class="flex flex-col justify-center space-y-7">
        <div class="space-y-4">
          <h1 class="font-bold text-2xl lg:text-4xl">
            ANKA Shipping
          </h1>
          <h2 class="text-primary text-xl lg:text-2xl">
            {{ t('home.about-shipping.subtitle') }}
          </h2>
        </div>

        <div class="space-y-3">
          <p>
            {{ t('home.about-shipping.article.paragraph') }}
          </p>

          <ul class="pl-5 list-disc space-y-2">
            <li>
              {{ t('home.about-shipping.article.ul.li1') }}
            </li>
            <li>
              {{ t('home.about-shipping.article.ul.li2') }}
            </li>
            <li>
              {{ t('home.about-shipping.article.ul.li3') }}
            </li>
          </ul>
        </div>

        <div>
          <UButton :to="localePath('/shipping')" :label="t('home.learn-more')" size="lg" />
        </div>
      </div>

      <div class="text-center lg:order-first">
        <img
          class="inline-block max-w-full h-auto object-cover"
          width="500"
          src="~/assets/img/home/shipping2.png"
          alt="entrepreneur, online, africa, ship, shipping globally, dropshipper, dropshipping"
        >
      </div>
    </section>

    <!-- ANKA Marketplace -->
    <section class="bg-[#F1F0F0] h-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16 px-10 py-14 lg:p-20">
      <div class="flex flex-col justify-center space-y-7">
        <div class="space-y-4">
          <h1 class="font-bold text-2xl lg:text-4xl">
            ANKA Marketplace
          </h1>
          <h2 class="text-primary text-xl lg:text-2xl">
            {{ t('home.about-marketplace.subtitle') }}
          </h2>
        </div>

        <div class="space-y-3">
          <p>
            {{ t('home.about-marketplace.article.paragraph') }}
          </p>

          <ul class="pl-5 list-disc space-y-2">
            <li>
              {{ t('home.about-marketplace.article.ul.li1') }}
            </li>
            <li>
              {{ t('home.about-marketplace.article.ul.li2') }}
            </li>
            <li>
              {{ t('home.about-marketplace.article.ul.li3') }}
            </li>
          </ul>
        </div>

        <div>
          <UButton :to="localePath('/marketplace')" :label="t('home.learn-more')" size="lg" />
        </div>
      </div>

      <div class="text-center">
        <img
          class="inline-block max-w-full h-auto object-cover"
          width="500"
          src="~/assets/img/home/marketplace2.png"
          alt="entrepreneur, online, africa, ship, shipping globally, dropshipper, dropshipping"
        >
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="px-8 lg:px-24 py-10 lg:py-14 space-y-12">
      <div class="flex flex-col items-center space-y-7">
        <h2 class="text-primary text-center font-bold text-2xl">
          {{ t('home.testimonials.title') }}
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

      <div class="grid grid-cols-1 lg:grid-cols-3  gap-y-10 gap-x-5 text-center">
        <div class="space-y-4">
          <blockquote class="text-[1.24rem]">
            "{{ t('home.testimonials.messsages.m1') }}"
          </blockquote>
          <p class="text-primary">
            Khangadelica, Kenya 🇰🇪
          </p>
        </div>
        <div class="space-y-4">
          <blockquote class="text-[1.24rem]">
            "{{ t('home.testimonials.messsages.m2') }}"
          </blockquote>
          <p class="text-primary">
            Tinamasese, Nigeria 🇳🇬
          </p>
        </div>
        <div class="space-y-4">
          <blockquote class="text-[1.24rem]">
            "{{ t('home.testimonials.messsages.m3') }}"
          </blockquote>
          <p class="text-primary">
            Sosoden, Benin 🇧🇯
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
