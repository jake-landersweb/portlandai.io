/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'img': "url('/background.webp')",
      }),
      fontFamily: {
        jose: ["JosefinSans", "sans-serif"],
      },
      colors: {
        lt: {
          DEFAULT: '#EDEDF3',
          '50': '#FAFAFC',
          '100': '#F2F3F7',
          '200': '#E2E5ED',
          '300': '#D3D7E3',
          '400': '#C3C9D9',
          '500': '#B3BAD0',
          '600': '#A4ACC6',
          '700': '#949EBC',
          '800': '#727FA6',
          '900': '#56638A'
        },
        dk: {
          DEFAULT: '#1A1E23',
          '50': '#5B697B',
          '100': '#576475',
          '200': '#4E5A69',
          '300': '#45505E',
          '400': '#3D4652',
          '500': '#343C46',
          '600': '#2B323A',
          '700': '#23282F',
          '800': '#1A1E23',
          '900': '#020203'
        },
        main: {
          DEFAULT: '#5B75F0',
          50: '#FFFFFF',
          100: '#F1F3FE',
          200: '#CBD3FA',
          300: '#A6B4F7',
          400: '#8094F3',
          500: '#5B75F0',
          600: '#284AEB',
          700: '#1232C8',
          800: '#0E2595',
          900: '#091862',
          950: '#071248'
        },
        acc: "#00cab5"

      }
    },
  },
  plugins: [],
}

