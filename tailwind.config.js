/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jose: ["JosefinSans", "sans-serif"],
      },
      colors: {
        main: "#3c63ec",
        acc1: "#a47de2",
        acc2: "#ca5bd8",
        acc3: "#eb4c4f",
      }
    },
  },
  plugins: [],
}

