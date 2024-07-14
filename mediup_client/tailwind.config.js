/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary1: '#016167',
        primary2: '#55A5A5',
        primary3: '#042123',
        primary4: '#93CAC6',

        error1: '#AC1010',
        button1: '#16ACB6',
        button2: '#002E31',
        button3: '#0A5D63'
      }
    }
  },
  plugins: []
};
