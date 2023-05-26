/** @type {import('tailwindcss').Config} */
const { fontFamily, screens } = require("tailwindcss/defaultTheme");

export default {
  important: true,
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    screens: {
      xs: "375px",
      ...screens,
    },
    extend: {
      colors: {
        /* primary */
        primary_blue: "var(--primary-blue)",
        primary_bright_grey: "var(--primary-bright_grey)",
        primary_md_grey: "var(--primary-md_grey)",

        /* background-color */
        base_border: "var(--base-border)",
        card_container_bg: "var(--card-container-bg)",

        /* fields */
        field_bg: "var(--field-bg)",
        field_active: "var(--field-active)",
      },
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
      fontSize: {},
      keyframes: {},
      backgroundImage: {
        "bg-image": "url('/src/assets/svg/bg.svg')",
      },

      containers: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
