const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        primary: {
          50: '#fefbec',
          100: '#fbf3ca',
          200: '#f6e591',
          300: '#f1d258',
          400: '#eebf31',
          500: '#e8a625',
          600: '#cc7c13',
          700: '#aa5913',
          800: '#8a4616',
          900: '#723a15',
          950: '#411d07',
        },
      },
    },
    fontFamily: {
      sans: ['Inter'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
