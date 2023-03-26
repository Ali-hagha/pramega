const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', ...fontFamily.sans],
        bebas_neue: ['var(--font-bebas-neue)', ...fontFamily.sans],
      },
      colors: {
        'nuetral-dark': '#1e1f1a',
        'nuetral-light': '#f6f6f6',
        primary: '#ebfc4b',
      },
    },
  },
  plugins: [],
};
