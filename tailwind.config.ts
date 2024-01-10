import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light_yellow: "#FFF7DF",
        medium_yellow: "#FFE8A3",
        dark_yellow: "#FFCD29"
      }
    }
  },
  plugins: []
} satisfies Config;
