/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          100: 'oklch(95.4% .038 75.164)',
          300: 'oklch(83.7% .128 66.29)',
          400: 'oklch(75% .183 55.934)',
          500: 'oklch(70.5% .213 47.604)',
          600: 'oklch(64.6% .222 41.116)',
          700: 'oklch(55.3% .195 38.402)',
          800: 'oklch(47% .157 37.304)',
          900: 'oklch(40.8% .123 38.172)',
        },
      },
    },
  },
  plugins: [],
}
