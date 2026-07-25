import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        primary: "#2563eb",
        dark: "#050816",
      },
    },
  },

  plugins: [],
} satisfies Config;