/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#640404',
          dark: '#450202',
          light: '#850606',
          50: '#fdf3f3',
          100: '#fbe4e4',
          900: '#350101'
        },
        maroon: {
          DEFAULT: '#640404',
          dark: '#450202',
          light: '#850606',
          deep: '#380202',
          50: '#fdf3f3',
          100: '#fbe4e4',
          900: '#350101',
        },
        yellow: {
          DEFAULT: '#FFB013',
          light: '#FFC83B',
          dark: '#D99100',
          50: '#FFFDF5',
          100: '#FEF7DE',
        },
        gold: {
          DEFAULT: '#FFB013',
          light: '#FFC83B',
          dark: '#D99100',
          50: '#FFFDF5',
          100: '#FEF7DE',
        },
        accent: {
          DEFAULT: '#FFB013',
          maroon: '#640404',
          gold: '#FFB013',
        }
      },
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        poppins: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1320px',
        }
      }
    },
  },
  plugins: [],
};
