/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-navy": "#000225",
        "brand-light": "#D7D8EB",
        "brand-extralight": "#EDEEF5",
        "brand-light-bg": "#F6F8FF",
        "brand-red": "#EF5332",
        "brand-orange": "#F1842A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
