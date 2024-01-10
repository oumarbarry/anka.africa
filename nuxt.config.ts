export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { shim: false },

  // app: {
  //   pageTransition: false,
  //   layoutTransition: false,
  // },

  experimental: {
    typedPages: true,
    componentIslands: true,
  },

  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "nuxt-calendly",
    "radix-vue/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "nuxt-3-intercom",
    "nuxt-clarity-analytics",
  ],

  tailwindcss: { viewer: false },
  colorMode: { preference: "light" },

  googleFonts: {
    families: {
      "Open Sans": "300..800",
    },
  },

  intercom: {
    appId: "wgsah0jl",
    action_color: "#e21ddb",
    background_color: "#e21ddb",
    scriptDefer: true,
    updateOnPageRoute: false,
  },

  i18n: {
    defaultLocale: "en",
    strategy: "prefix_and_default",
    langDir: "lang",
    lazy: true,
    locales: [
      { code: "en", file: "en.json" },
      { code: "fr", file: "fr.json" },
    ],
  },

  // routeRules: {
  //   "/subscribe": { ssr: false },
  // },
})
