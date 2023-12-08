/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
        footer: 'rgba(11, 10, 12, 0.60);',
        'border-footer': 'hsla(249, 5%, 26%, 1)',

        /* text */
        body: 'rgba(255, 255, 255, 0.7)',
        'body-secondary': '#fff',
        heading: {
          h1: '#fff',
          h2: '#fff',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
    blur: {
      225: '225px',
    },
  },
  plugins: [],
};
