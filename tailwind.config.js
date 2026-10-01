/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#071b5a',
          dark: '#051340',
          light: '#0c2a86'
        },
        accent: {
          DEFAULT: '#eb7859',
          hover: '#d66447',
          light: '#fbe0d8'
        },
        dark: {
          DEFAULT: '#303030',
          muted: '#6c757d'
        },
        gold: {
          DEFAULT: '#ffb300',
          hover: '#ff9800'
        },
        van: {
          bg: '#f8f9fa',
          card: '#ffffff'
        }
      },
      fontFamily: {
        headings: ['"Paytone One"', '"Roboto Slab"', 'sans-serif'],
        body: ['"Josefin Sans"', 'sans-serif']
      },
      boxShadow: {
        'search': '0 4px 12px rgba(0,0,0,0.15), 0 0 0 4px rgba(255, 179, 0, 0.25)',
        'search-hover': '0 6px 16px rgba(0,0,0,0.2), 0 0 0 7px rgba(255, 152, 0, 0.4)',
        'card': '0 4px 15px rgba(0,0,0,0.07)',
        'card-hover': '0 8px 25px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: []
};
