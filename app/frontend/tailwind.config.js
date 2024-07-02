/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        light: ['Roboto Light', 'sans-serif'],
        medium: ['Roboto Medium', 'sans-serif'],
        bold: ['Roboto Bold', 'sans-serif'],
      },
      colors: {
        'brand-red': '#461c25'
      }
    },
  },
  plugins: [],
}

