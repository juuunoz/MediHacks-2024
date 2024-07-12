/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'screen-minus-32rem': 'calc(100vh - 32rem)'
      }
    }
  },
  plugins: []
};
