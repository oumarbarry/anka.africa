<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"

useHead({ title: "ANKA White Papers" })

const { t } = useI18n()

const loading = ref(false)

const state = ref({ email: undefined })

const required = t("forms.required")
const invalidEmail = t("forms.invalid-email")

const schema = z.object({
  email: z.string({ required_error: required })
    .email(invalidEmail),
})

async function download(event: FormSubmitEvent<z.output<typeof schema>>) {
  console.log(event)

  loading.value = true

  await delay(3000)

  loading.value = false
}
</script>

<template>
  <main class="px-8 py-12 lg:px-36 lg:py-24">
    <!-- HERO BANNER -->
    <section class="lg:flex lg:justify-center pb-24">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-x-14 gap-y-10">
        <div class="flex flex-col lg:justify-center gap-y-3 lg:gap-y-6 lg:col-span-2">
          <h1 class="text-3xl lg:text-5xl font-[500]">
            {{ t('paper.hero.title') }}
          </h1>

          <p class="font-[500]">
            {{ t('paper.hero.subtitle') }}
          </p>

          <div class="text-[0.9rem] pb-5">
            <p class="font-[400]">
              {{ t('paper.hero.article.p1') }}
            </p>
            <br>
            <p>
              {{ t('paper.hero.article.p2') }}
            </p>
          </div>

          <!-- FORM -->
          <UForm
            :schema="schema"
            :state="state"
            @submit="download"
          >
            <section class="flex gap-x-2">
              <UFormGroup size="lg" name="email" class="grow">
                <UInput v-model.trim.lazy="state.email" type="email" placeholder="Email" autocomplete="email" />
              </UFormGroup>

              <div>
                <UButton
                  type="submit"
                  color="primary"
                  :loading="loading"
                  label="Download"
                  size="lg"
                />
              </div>
            </section>
          </UForm>
        </div>

        <div class="lg:col-span-3 order-first lg:order-last">
          <img
            class="w-full h-full object-contain lg:object-none"
            src="~/assets/img/paper/paper1.png"
          >
        </div>
      </div>
    </section>

    <h2 class="text-center text-primary text-[1.55rem] lg:text-[2rem]">
      {{ t('paper.report.title') }}
    </h2>

    <section class="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 lg:h-[45vh] py-3">
      <div class="flex justify-center items-center">
        <img
          class="w-full"
          src="~/assets/img/paper/paper2.png"
        >
      </div>

      <div class="flex flex-col lg:justify-center gap-y-5 text-center lg:text-left">
        <h1 class="text-primary text-4xl lg:text-7xl">
          {{ t('paper.report.selling-section.title') }}
        </h1>

        <blockquote class="italic text-xl text-purple">
          “{{ t('paper.report.selling-section.quote') }}”
        </blockquote>
      </div>
    </section>

    <!-- BUYING -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 py-10">
      <div class="flex flex-col justify-center gap-y-5  text-center lg:text-left">
        <h1 class="text-primary text-4xl lg:text-7xl">
          {{ t('paper.report.buying-section.title') }}
        </h1>

        <blockquote class="italic text-xl text-purple">
          “{{ t('paper.report.buying-section.quote') }}”
        </blockquote>
      </div>

      <div class="inline-grid order-first lg:order-last">
        <img
          class="w-full lg:h-[500px] object-contain"
          src="~/assets/img/paper/paper3.png"
        >
      </div>
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-36 py-10">
      <div class="inline-grid">
        <img
          class="w-full h-auto object-contain"
          src="~/assets/img/paper/paper4.png"
        >
      </div>

      <div class="flex flex-col justify-center gap-y-8 lg:gap-y-16">
        <h2 class="text-right text-primary text-[1.75rem] lg:text-[2rem]">
          {{ t('paper.report.glossary.title') }}
        </h2>

        <p class="text-[0.9rem] text-right pb-5 lg:pb-0">
          Introduction ......................... 1<br>
          {{ t('paper.report.glossary.about_us') }} .................................. 2<br>
          {{ t('paper.report.glossary.selling') }} ............................ 3<br>
          {{ t('paper.report.glossary.characteristics') }} ............ 4<br>
          {{ t('paper.report.glossary.funding') }} .............. 6<br>
          {{ t('paper.report.glossary.success') }} ........ 7<br>
          {{ t('paper.report.glossary.how-to-sell') }} ...................... 9<br>
          {{ t('paper.report.glossary.buying') }} .................................. 13<br>
          {{ t('paper.report.glossary.characteristics') }} ......................... 14<br>
          {{ t('paper.report.glossary.purchasing-behaviour') }} ........................... 16<br>
          {{ t('paper.report.glossary.customer-acquisition') }} ......... 21<br>
          {{ t('paper.report.glossary.products-services') }} ....................... 23<br>
          {{ t('paper.report.glossary.products-distribution') }} ......... 24<br>
          {{ t('paper.report.glossary.plagiarism') }} .................................. 25<br>
          {{ t('paper.report.glossary.ecommerce-impact') }} ....................................... 26<br>
          {{ t('paper.report.glossary.shipping') }} ........................................... 28<br>
          {{ t('paper.report.glossary.payment-methods') }} ............................. 30<br>
          Conclusion ............................ 32<br>
          Annexes ............................. 34
        </p>

        <!-- FORM -->
        <UForm
          :schema="schema"
          :state="state"
          @submit="download"
        >
          <section class="flex gap-x-2">
            <UFormGroup size="lg" name="email" class="grow">
              <UInput v-model.trim.lazy="state.email" type="email" placeholder="Email" autocomplete="email" />
            </UFormGroup>

            <div>
              <UButton
                type="submit"
                color="primary"
                :loading="loading"
                label="Download"
                size="lg"
              />
            </div>
          </section>
        </UForm>
      </div>
    </section>
  </main>
</template>
