/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto'],
      serif: ['Arial']
    },
    extend: {
      backgroundImage: {
        mainbg: "url('/img/pexels-pixabay-207665.jpg')"
      }
    },
    screens: {
      'xs': '275px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
