/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "400px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        bgim: "url(./huddle-landing-page-with-alternating-feature-blocks-Assets/HERO_BG.svg)",
      },
      fontFamily: {
        Default: ["POP", "mono", "Consolas"],
      },
    },
  },
  plugins: [],
};
