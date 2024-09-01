import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

export default <Partial<Config>> {
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fce8fb",
          100: "#f9d2f8",
          200: "#f3a5f1",
          300: "#ed78e9",
          400: "#e84ae2",
          500: "#b818b2", // #e21ddb
          600: "#e21ddb", // #b517af
          700: "#e21ddb", // #871283
          800: "#5a0c58",
          900: "#2d062c",
          950: "#170316",
        },
      },
      fontFamily: {
        sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
