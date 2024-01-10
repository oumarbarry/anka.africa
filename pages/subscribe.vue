<script setup lang="ts">
import { z } from "zod"
import { vMaska } from "maska"
import { isValidPhoneNumber } from "libphonenumber-js"
import type { FormSubmitEvent } from "#ui/types"

useHead({ title: "Subscribe" })

const { t } = useI18n()

const loading = ref(false)

const AVAILABLE_COUNTRIES = {
  orange: [
    { id: "CM", label: "🇨🇲 +237", name: "Cameroun", code: "+237" } as const,
    { id: "CI", label: "🇨🇮 +225", name: "Côte d'Ivoire", code: "+225" } as const,
    { id: "SN", label: "🇸🇳 +221", name: "Senegal", code: "+221" } as const,
  ],
  mpesa: [
    { id: "KE", label: "🇰🇪 +254", name: "Kenya", code: "+254" } as const,
  ],
  mtn: [
    { id: "CM", label: "🇨🇲 +237", name: "Cameroun", code: "+237" } as const,
    { id: "CI", label: "🇨🇮 +225", name: "Côte d'Ivoire", code: "+225" } as const,
    { id: "GH", label: "🇬🇭 +233", name: "Ghana", code: "+233" } as const,
  ],
}

const selectedCode = reactive({
  orange: AVAILABLE_COUNTRIES.orange[0],
  mpesa: AVAILABLE_COUNTRIES.mpesa[0],
  mtn: AVAILABLE_COUNTRIES.mtn[0],
})

const MAPPING = {
  "+237": { example: "+237 6 71 23 45 67", maska: "+237 # ## ## ## ##" },
  "+225": { example: "+225 07 34 56 7777", maska: "+225 ## ## ## ####" },
  "+221": { example: "+221 70 123 45 67", maska: "+221 ## ### ## ##" },
  "+233": { example: "+233 23 123 4567", maska: "+233 ## ### ####" },
  "+254": { example: "+254 712 123456", maska: "+254 ### ######" },
} as const

const PLANS = {
  starter: t("subscribe.formula.plans.quaterly"),
  growth: t("subscribe.formula.plans.bi-annually"),
  ambitious: t("subscribe.formula.plans.annually"),
}

const YEARS = Array.from({ length: 11 }, (_, index) => (2024 + index).toString())

const MONTHS = [
  { id: 1, label: t("months.january") },
  { id: 2, label: t("months.february") },
  { id: 3, label: t("months.march") },
  { id: 4, label: t("months.april") },
  { id: 5, label: t("months.may") },
  { id: 6, label: t("months.june") },
  { id: 7, label: t("months.july") },
  { id: 8, label: t("months.august") },
  { id: 9, label: t("months.september") },
  { id: 10, label: t("months.october") },
  { id: 11, label: t("months.november") },
  { id: 12, label: t("months.december") },
]

const plan = ref<"starter" | "growth" | "ambitious">("starter")
const paymentMethod = ref<"card" | "orange_money" | "mpesa" | "mtn">("card")

const state = ref({
  email: undefined,
  referralCode: undefined,
  nameOnCard: undefined,
  cardNumber: undefined,
  expirationMonth: undefined,
  expirationYear: undefined,
  cvc: undefined,
  orangePhoneNumber: undefined,
  mpesaPhoneNumber: undefined,
  mtnPhoneNumber: undefined,
})

const required = t("forms.required")
const invalidEmail = t("forms.invalid-email")
const invalidPhone = t("forms.invalid-phone")

const schema = computed(() => {
  return z.object({
    email: z.string({ required_error: required })
      .email(invalidEmail),
    referralCode: z.string().optional(),

    nameOnCard: paymentMethod.value === "card"
      ? z.string({ required_error: required })
      : z.string().optional(),
    cardNumber: paymentMethod.value === "card"
      ? z.string({ required_error: required })
      : z.string().optional(),
    expirationMonth: paymentMethod.value === "card"
      ? z.object({ id: z.number(), label: z.string() }, { required_error: required })
      : z.any().optional(),
    expirationYear: paymentMethod.value === "card"
      ? z.string({ required_error: required })
      : z.string().optional(),
    cvc: paymentMethod.value === "card"
      ? z.string({ required_error: required })
      : z.string().optional(),

    orangePhoneNumber: paymentMethod.value === "orange_money"
      ? z.string({ required_error: required })
        .refine(value => isValidPhoneNumber(value, selectedCode.orange.id), {
          message: invalidPhone,
        })
      : z.string().optional(),
    mpesaPhoneNumber: paymentMethod.value === "mpesa"
      ? z.string({ required_error: required })
        .refine(value => isValidPhoneNumber(value, selectedCode.orange.id), {
          message: invalidPhone,
        })
      : z.string().optional(),
    mtnPhoneNumber: paymentMethod.value === "mtn"
      ? z.string({ required_error: required })
        .refine(value => isValidPhoneNumber(value, selectedCode.orange.id), {
          message: invalidPhone,
        })
      : z.string().optional(),
  })
})

async function subscribe(event: FormSubmitEvent<z.output<typeof schema.value>>) {
  console.log(event)

  loading.value = true

  await delay(3000)

  loading.value = false
}
</script>

<template>
  <main class="w-full flex items-center justify-center px-5 lg:px-0 py-5 lg:py-10">
    <div class="grow lg:grow-0 flex flex-col gap-y-16 lg:w-[48vw]">
      <section class="flex flex-col gap-y-4">
        <h2 class="text-primary text-center text-2xl lg:text-[2rem] font-[500]">
          {{ t('subscribe.formula.title') }}
        </h2>

        <hr class="border-y-[0.5px] border-gray-300">

        <p class="mb-2 text-[1rem]">
          {{ t('subscribe.formula.msg') }}
        </p>

        <RadioGroupRoot
          v-model="plan"
          default-value="starter"
          class="grid grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-4 auto-cols-max"
        >
          <!-- STARTER PLAN -->
          <div class="inline-grid min-w-full rows-span-2">
            <RadioGroupItem id="starter" value="starter" class="peer sr-only" />

            <Label
              for="starter"
              value="starter"
              class="flex flex-col rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-[#FEF8FE] [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-[#FEF8FE]"
            >
              <div class="flex justify-between text-base font-bold">
                <span>{{ t('subscribe.formula.plans.quaterly') }}</span>
                <span>€30</span>
              </div>
            </Label>
          </div>

          <!-- GROWTH PLAN -->
          <div>
            <RadioGroupItem id="growth" value="growth" class="peer sr-only" />

            <Label
              for="growth"
              value="growth"
              class="flex flex-col gap-y-3 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-[#FEF8FE] [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-[#FEF8FE]"
            >
              <div class="flex justify-between text-base font-bold">
                <span>{{ t('subscribe.formula.plans.bi-annually') }}</span>
                <span>€50</span>
              </div>

              <div class="text-start flex flex-col gap-y-1">
                <small>{{ t('subscribe.formula.words.instead') }} €60</small>
                <small class="text-[#198754] font-semibold">
                  {{ t('subscribe.formula.words.months-free') }}
                </small>
              </div>
            </Label>
          </div>

          <!-- AMBITIOUS PLAN -->
          <div>
            <RadioGroupItem id="ambitious" value="ambitious" class="peer sr-only" />

            <Label
              for="ambitious"
              value="ambitious"
              class="flex flex-col gap-y-3 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-[#FEF8FE] [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-[#FEF8FE]"
            >
              <div class="flex justify-between text-base font-bold">
                <span>{{ t('subscribe.formula.plans.annually') }}</span>
                <span>€100</span>
              </div>

              <div class="text-start flex flex-col gap-y-1">
                <small>{{ t('subscribe.formula.words.instead') }} €120</small>
                <small class="text-[#198754] font-semibold">
                  {{ t('subscribe.formula.words.months-free', { count: 2 }) }}
                </small>
              </div>
            </Label>
          </div>
        </RadioGroupRoot>

        <section class="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-y-2 text-[0.9rem] lg:text-base">
          <article>
            <ul class="flex flex-col gap-y-2 justify-center">
              <li class="flex items-center gap-x-1">
                <UIcon name="i-heroicons-check-circle-solid" class="bg-[#B818B2] text-xl" />
                {{ t('subscribe.formula.article.ul.li1') }}
              </li>
              <li class="flex items-center gap-x-1">
                <UIcon name="i-heroicons-check-circle-solid" class="bg-[#B818B2] text-xl" />
                {{ t('subscribe.formula.article.ul.li2') }}
              </li>
              <li class="flex items-center gap-x-1">
                <UIcon name="i-heroicons-check-circle-solid" class="bg-[#B818B2] text-xl" />
                {{ t('subscribe.formula.article.ul.li3') }}
              </li>
            </ul>
          </article>
          <article>
            <ul class="flex flex-col gap-y-2 justify-center">
              <li class="flex items-center gap-x-1">
                <UIcon name="i-heroicons-check-circle-solid" class="bg-[#B818B2] text-xl" />
                {{ t('subscribe.formula.article.ul.li4') }}
              </li>
              <li class="flex items-center gap-x-1 text-nowrap">
                <UIcon name="i-heroicons-check-circle-solid" class="bg-[#B818B2] text-xl" />
                {{ t('subscribe.formula.article.ul.li5') }}
              </li>
              <li class="flex items-center gap-x-1">
                <UIcon name="i-heroicons-check-circle-solid" class="bg-[#B818B2] text-xl" />
                {{ t('subscribe.formula.article.ul.li6') }}
              </li>
            </ul>
          </article>
        </section>
      </section>

      <section class="flex flex-col gap-y-5">
        <h2 class="text-primary text-center text-2xl lg:text-[2rem] font-[500]">
          {{ t('subscribe.payments.title') }}
        </h2>

        <hr class="border-y-[0.5px] border-gray-300">

        <RadioGroupRoot v-model="paymentMethod" default-value="card" class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <!-- CARD -->
          <div>
            <RadioGroupItem id="card" value="card" class="peer sr-only" />

            <Label
              for="card"
              value="card"
              class="flex items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-[#FEF8FE] [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-[#FEF8FE]"
            >
              <img
                src="https://www.afrikrea.com/assets/anka/card_visa-eac2ec6295d7d77495000056e45856a808d1583ea51ef31acfac3936d2b31bbb.png"
                alt="Card"
                class="h-6"
              >
            </Label>
          </div>

          <!-- PAYPAL -->
          <div>
            <RadioGroupItem id="paypal" value="paypal" class="peer sr-only" />

            <Label
              for="paypal"
              value="paypal"
              class="flex items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-[#FEF8FE] [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-[#FEF8FE]"
            >
              <img
                src="https://www.afrikrea.com/assets/anka/so_paypal-e8d11831505fd0f4d63e3c2a44e123e2eb29a3942a70e24eff2b9c082123f422.png"
                alt="Paypal"
                class="h-6"
              >
              <small>+€0.60</small>
            </Label>
          </div>

          <!-- ORANGE MONEY -->
          <div>
            <RadioGroupItem id="orange_money" value="orange_money" class="peer sr-only" />

            <Label
              for="orange_money"
              value="orange_money"
              class="flex items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-[#FEF8FE] [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-[#FEF8FE]"
            >
              <img
                src="https://www.afrikrea.com/assets/anka/so_orange_money-b1cc5f56f4d5f080af299549e6554c180fca2c6e764168b3d5bc55c384af24e1.png"
                alt="Orange Money"
                class="h-6"
              >
            </Label>
          </div>

          <!-- M-PESA -->
          <div>
            <RadioGroupItem id="mpesa" value="mpesa" class="peer sr-only" />

            <Label
              for="mpesa"
              value="mpesa"
              class="flex items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-[#FEF8FE] [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-[#FEF8FE]"
            >
              <img
                src="https://www.afrikrea.com/assets/anka/so_mpesa-a77026f770188b9977533aa3d592211d527cb0bfb8c07306f172013208e817e3.png"
                alt="M-Pesa"
                class="h-6"
              >
              <small>+€0.15</small>
            </Label>
          </div>

          <!-- MTN MOBILE MONEY -->
          <div>
            <RadioGroupItem id="mtn" value="mtn" class="peer sr-only" />

            <Label
              for="mtn"
              value="mtn"
              class="flex items-center gap-x-3 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-[#FEF8FE] [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-[#FEF8FE]"
            >
              <img
                src="https://www.afrikrea.com/assets/wallet/mtn-2e12a7edfd966fe4d089ec063c2bbbb2d70989fbfd8ef2438ac32f640049a99d.png"
                alt="MTN"
                class="h-6"
              >
              <small class="text-[0.95rem]">MTN Mobile Money</small>
            </Label>
          </div>

          <!-- OPAY BANK TRANSFER -->
          <div>
            <RadioGroupItem id="ng_bank" value="ng_bank" class="peer sr-only" />

            <Label
              for="ng_bank"
              value="ng_bank"
              class="flex items-center gap-x-3 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-[#FEF8FE] [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-[#FEF8FE]"
            >
              <img
                src="https://www.afrikrea.com/assets/wallet/opay-d6c422ea7fdcdffa0a64e2ca0f60db5dc50cb86833e31bdb1191a14573d9e23e.png"
                alt="Opay"
                class="h-6"
              >
              <small class="text-[0.85rem] lg:text-[0.80rem]">{{ t('subscribe.payments.options.ng-bank') }}</small>
            </Label>
          </div>

          <!-- MTN GHANA -->
          <!-- <div>
            <RadioGroupItem id="mobile_money_ghana" value="mobile_money_ghana" class="peer sr-only" />

            <Label
              for="mobile_money_ghana"
              value="mobile_money_ghana"
              class="flex items-center gap-x-3 rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-[#FEF8FE] [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-[#FEF8FE]"
            >
              <img
                src="https://www.afrikrea.com/assets/wallet/mtn-2e12a7edfd966fe4d089ec063c2bbbb2d70989fbfd8ef2438ac32f640049a99d.png"
                alt="MTN Ghana"
                class="h-6"
              >
              <small class="text-[0.95rem]">Ghana MTN Mobile Money</small>
            </Label>
          </div> -->
        </RadioGroupRoot>
      </section>

      <UForm
        :schema="schema"
        :state="state"
        @submit="subscribe"
      >
        <section class="lg:px-20 pb-28 space-y-5">
          <UFormGroup label="Email" name="email" size="xl">
            <UInput v-model="state.email" type="email" placeholder="abc@xyz.com" />
          </UFormGroup>

          <UFormGroup :label="t('subscribe.form.referral-code')" name="referralCode" size="xl">
            <UInput v-model="state.referralCode" type="email" placeholder="ADH123" />
          </UFormGroup>

          <div v-show="paymentMethod === 'card'" class="space-y-5">
            <UFormGroup :label="t('subscribe.form.name-on-card')" name="nameOnCard" size="xl">
              <UInput v-model="state.nameOnCard" type="text" placeholder="Joana Anka" />
            </UFormGroup>

            <UFormGroup :label="t('subscribe.form.card-number')" name="cardNumber" size="xl">
              <UInput v-model="state.cardNumber" type="text" placeholder="4539 1488 0343 6467" />
            </UFormGroup>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <UFormGroup :label="t('subscribe.form.expires')" name="expirationMonth" size="xl">
                <USelectMenu
                  v-model="state.expirationMonth"
                  :options="MONTHS"
                  option-attribute="label"
                  :placeholder="t('subscribe.form.month')"
                />
              </UFormGroup>

              <UFormGroup :label="t('subscribe.form.year')" name="expirationYear" size="xl">
                <USelectMenu v-model="state.expirationYear" :options="YEARS" :placeholder="t('subscribe.form.year')" />
              </UFormGroup>

              <UFormGroup label="Code" name="cvc" size="xl">
                <UInput v-model="state.cvc" type="text" placeholder="123" />
              </UFormGroup>
            </div>
          </div>

          <UFormGroup
            v-show="paymentMethod === 'orange_money'"
            :label="t('subscribe.form.phone-number')"
            name="orangePhoneNumber"
            :help="t('subscribe.form.orange-hint')"
            size="xl"
          >
            <UButtonGroup orientation="horizontal" class="min-w-full">
              <USelectMenu
                v-model="selectedCode.orange"
                :options="AVAILABLE_COUNTRIES.orange"
                option-attribute="label"
              />

              <UInput
                v-model="state.orangePhoneNumber"
                v-maska
                :data-maska="MAPPING[selectedCode.orange.code].maska"
                type="text"
                name="orangePhoneNumber"
                :placeholder="MAPPING[selectedCode.orange.code].example"
                class="w-full"
              />
            </UButtonGroup>
          </UFormGroup>

          <UFormGroup
            v-show="paymentMethod === 'mpesa'"
            :label="t('subscribe.form.mpesa-phone-number')"
            name="mpesaPhoneNumber"
            :help="t('subscribe.form.mpesa-hint')"
            size="xl"
          >
            <UButtonGroup orientation="horizontal" class="min-w-full">
              <USelectMenu
                v-model="selectedCode.mpesa"
                :options="AVAILABLE_COUNTRIES.mpesa"
                option-attribute="label"
              />

              <UInput
                v-model="state.mpesaPhoneNumber"
                v-maska
                :data-maska="MAPPING[selectedCode.mpesa.code].maska"
                type="text"
                name="mpesaPhoneNumber"
                :placeholder="MAPPING[selectedCode.mpesa.code].example"
                class="w-full"
              />
            </UButtonGroup>
          </UFormGroup>

          <UFormGroup
            v-show="paymentMethod === 'mtn'"
            :label="t('subscribe.form.phone-number')"
            name="mtnPhoneNumber"
            :help="t('subscribe.form.mtn-hint')"
            size="xl"
          >
            <UButtonGroup orientation="horizontal" class="min-w-full">
              <USelectMenu
                v-model="selectedCode.mtn"
                :options="AVAILABLE_COUNTRIES.mtn"
                option-attribute="label"
              />

              <UInput
                v-model="state.mtnPhoneNumber"
                v-maska
                :data-maska="MAPPING[selectedCode.mtn.code].maska"
                type="text"
                name="mtnPhoneNumber"
                :placeholder="MAPPING[selectedCode.mtn.code].example"
                class="w-full"
              />
            </UButtonGroup>
          </UFormGroup>
        </section>

        <section class="space-y-5">
          <h2 class="text-primary text-center text-2xl lg:text-[2rem] font-[500]">
            {{ t('subscribe.summary.title') }}
          </h2>

          <hr class="border-y-[0.5px] border-gray-300">

          <div class="flex justify-between">
            <span class="font-bold">{{ t('subscribe.summary.plan') }}:</span>
            <span>{{ PLANS[plan] }}</span>
          </div>

          <div class="pt-6 space-y-3">
            <UButton
              type="submit"
              :loading="loading"
              :label="t('subscribe.form.submit')"
              size="xl" block
            />

            <p class="text-center text-sm">
              {{ t('subscribe.terms.part1') }}
              <NuxtLink to="https://www.afrikrea.com/en/pages/terms" class="text-primary">
                {{ t('subscribe.terms.part2') }}
              </NuxtLink>
            </p>
          </div>
        </section>
      </UForm>

      <span class="pt-36" />
    </div>
  </main>
</template>
