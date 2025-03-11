import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        main_color: "#3c3633",
        secondary_color: "#f59a10",
        bg_color: "#EEEDEB",
        lightText: "#FFFFFF",
        brownText: "8C5A2B"
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
      },

    },
  },
  plugins: [],
} satisfies Config;
