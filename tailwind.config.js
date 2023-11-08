/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        udenar: {
          primary: '#00923f',
          secondary: '#F2FFE9'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
