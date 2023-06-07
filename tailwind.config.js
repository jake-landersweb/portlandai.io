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
          DEFAULT: '#3C63EC',
          50: '#E3E9FC',
          100: '#D1DAFA',
          200: '#ACBCF7',
          300: '#869EF3',
          400: '#6181F0',
          500: '#3C63EC',
          600: '#1541DB',
          700: '#1032A7',
          800: '#0B2374',
          900: '#061341',
          950: '#040C28'
        },
        acc1: {
          DEFAULT: '#A47DE2',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#EAE1F8',
          300: '#D3C0F1',
          400: '#BB9EE9',
          500: '#A47DE2',
          600: '#844FD8',
          700: '#662CC3',
          800: '#4E2195',
          900: '#361768',
          950: '#2A1251'
        },
        acc2: {
          DEFAULT: '#CA5BD8',
          50: '#FAEFFB',
          100: '#F5DFF7',
          200: '#EABEF0',
          300: '#DF9DE8',
          400: '#D57CE0',
          500: '#CA5BD8',
          600: '#B930CB',
          700: '#90259D',
          800: '#661B70',
          900: '#3D1043',
          950: '#280A2C'
        },
        acc3: {
          DEFAULT: '#EB4C4F',
          50: '#FDF1F1',
          100: '#FBDFDF',
          200: '#F7BABB',
          300: '#F39597',
          400: '#EF7173',
          500: '#EB4C4F',
          600: '#E51A1D',
          700: '#B31417',
          800: '#800E10',
          900: '#4E090A',
          950: '#350607'
        },
      }
    },
  },
  plugins: [],
}

