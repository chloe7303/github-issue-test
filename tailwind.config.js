/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '544px',
      // => @media (min-width: 544px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1012px',
      // => @media (min-width: 1012px) { ... }
    },
    extend: {
      colors: {
        primary: '#2da44e',
        emphasis: '#0969da',
        default: '#f6f8fa',
        light: '#fff',
        border: '#d0d7de',
        text: '#57606a',
        shadow: 'rgba(140, 149, 159, 0.2)',
        done: '#8250df',
        muted: '#57606a',
      },
    },
  },
  plugins: [],
};
