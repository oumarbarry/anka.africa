<script lang="ts" setup>
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"

const { t } = useI18n()

const required = t("forms.required")

const loading = ref(false)

const state = reactive<any>({
  start: undefined, // { id: "gn", label: "🇬🇳 Guinea" }
  destination: undefined,
  weight: undefined,
})

const schema = z.object({
  start: z.object({ id: z.string(), label: z.string() }, { required_error: required }),
  destination: z.object({ id: z.string(), label: z.string() }, { required_error: required }),
  weight: z.object({ id: z.number(), label: z.string() }, { required_error: required }),
})

async function check(event: FormSubmitEvent<z.output<typeof schema>>) {
  console.log(event.data)

  loading.value = true

  await delay(3000)

  loading.value = false
}

const WEIGHTS = Array.from({ length: 200 }, (_, index) => ({
  id: (index + 1) * 0.5,
  label: `${(index + 1) * 0.5} kg`,
}))
</script>

<template>
  <main>
    <section class="px-8 py-10 lg:p-20 space-y-10 flex flex-col lg:items-center">
      <h1 class="text-primary text-center font-bold text-3xl lg:font-extrabold lg:text-4xl">
        {{ t('calculator.title') }}
      </h1>

      <UForm
        class="border-[3px] border-primary border-dashed rounded-lg px-7 py-10 lg:px-10 space-y-10 lg:w-2/3"
        :schema="schema"
        :state="state"
        @submit="check"
      >
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5">
          <UFormGroup :label="t('calculator.ship-from')" name="start" size="lg">
            <USelectMenu
              v-model="state.start"
              :options="COUNTRIES"
              option-attribute="label"
              :placeholder="t('calculator.placeholder-country')"

              searchable
              :searchable-placeholder="t('calculator.search')"
              :search-attributes="['label']"
              size="lg"
            >
              <template #option-empty>
                <q>{{ t('calculator.no-result') }}</q>
              </template>
            </USelectMenu>
          </UFormGroup>

          <UFormGroup :label="t('calculator.ship-to')" name="destination" size="lg">
            <USelectMenu
              v-model="state.destination"
              :options="COUNTRIES"
              option-attribute="label"
              :placeholder="t('calculator.placeholder-country')"
              searchable
              :searchable-placeholder="t('calculator.search')"
              :search-attributes="['label']"
              size="lg"
            >
              <template #option-empty>
                <q>{{ t('calculator.no-result') }}</q>
              </template>
            </USelectMenu>
          </UFormGroup>

          <UFormGroup :label="t('calculator.weight')" name="weight" size="lg">
            <USelectMenu
              v-model="state.weight"
              :options="WEIGHTS"
              option-attribute="label"
              :placeholder="t('calculator.placeholder-weight')"
              searchable
              :searchable-placeholder="t('calculator.search')"
              :search-attributes="['label']"
              size="lg"
            >
              <template #option-empty>
                <q>{{ t('calculator.no-result') }}</q>
              </template>
            </USelectMenu>
          </UFormGroup>
        </div>

        <div class="w-full inline-block text-center">
          <UButton
            type="submit"
            :label="t('calculator.submit')"
            :loading="loading"
            size="xl"
          />
        </div>
      </UForm>
    </section>

    <span class="block lg:hidden pt-24" />

    <img
      src="https://www.afrikrea.com/assets/anka/shipping_calc_bg-34dc183767b74af258e72f0fa2c207d902e108f3bee06ceed2ce9ce28e561942.png"
      alt="Shipping calc bg"
      class="hidden lg:block object-cover"
    >
  </main>
</template>
