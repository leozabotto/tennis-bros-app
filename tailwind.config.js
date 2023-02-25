const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: '#fff',
        black: '#000',

        'c-green-100': '#9AE3B8',
        'c-green-200': '#6FCF97',
        'c-green-300': '#4A8A64',

        'c-gray-100': '#DBDCDA',
        'c-gray-200': '#959692',
        'c-gray-300': '#61625C',
        'c-gray-400': '#40413D',
        'c-gray-500': '#151514',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
