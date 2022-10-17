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
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '28px',
              marginBottom: '0',
              paddingBottom: '8px',
              borderBottom: '1px solid #d0d7de',
            },
            h2: {
              fontSize: '28px',
              marginBottom: '0',
              paddingBottom: '8px',
              borderBottom: '1px solid #d0d7de',
            },
            em: {
              fontStyle: 'italic',
            },
            blockquote: {
              margin: '0 0 16px 0',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 'normal',
              color: '#57606a',
              padding: '0 10px',
              borderLeft: '4px solid #d0d7de',
              '> p': {
                margin: '0',
                '&::before': { content: '"" !important' },
              },
            },
            code: {
              fontWeight: 'normal',
              backgroundColor: '#eff1f3',
              borderRadius: '6px',
              padding: '1px 4px',
              '&::before': {
                content: '"" !important',
              },
              '&::after': {
                content: '"" !important',
              },
            },
            a: {
              color: '#0969da',
              textDecoration: 'none',
              fontWeight: 'normal',
              fontSize: '14px',
              '&:hover': {
                color: '#0969da',
                textDecoration: 'underline',
              },
            },
            ul: {
              margin: '0',
              fontSize: '14px',
              '> li': {
                margin: '0',
                '&::marker': {
                  color: '#000 !important',
                },
              },
            },
            ol: {
              margin: '0',
              fontSize: '14px',
              '> li': {
                margin: '0',
                '&::marker': {
                  color: '#000 !important',
                },
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
