/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#E31922",
      secondary: "#181D2E",
      black: "#636466",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Sarabun, sans-serif;"],
    },
    extend: {},
  },
  plugins: [],
};
