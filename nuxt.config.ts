export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-08-30",

  devtools: { enabled: true },

  experimental: {
    typedPages: true,
    componentIslands: true,
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
    "nuxt-calendly",
    "radix-vue/nuxt",
    "nuxt-3-intercom",
    "@nuxtjs/fontaine",
    "@nuxtjs/google-fonts",
    "@nuxt/scripts",
  ],

  eslint: { config: { standalone: false } },

  tailwindcss: { viewer: false },
  colorMode: { preference: "light" },

  googleFonts: {
    families: {
      "Open Sans": "300..800",
    },
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

  intercom: {
    appId: "wgsah0jl",
    action_color: "#e21ddb",
    background_color: "#e21ddb",
    scriptDefer: true,
    updateOnPageRoute: false,
  },

  $production: {
    scripts: {
      registry: {
        clarity: {
          id: "kjk2bt2wnl",
        },
      },
    },
  },
})
