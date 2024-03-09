/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./core/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
      },
      colors: {
        bgPrimary: "#022c22",
        textPrimary: "#ffffff",
      },
    },
  },
  plugins: [],
}

