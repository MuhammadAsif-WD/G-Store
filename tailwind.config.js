/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#E11922",
      secondary: "#181D2E",
      black: "#636466",
    },
    fontFamily: {
      sans: ["Lato"],
    },
    extend: {},
  },
  plugins: [],
};
