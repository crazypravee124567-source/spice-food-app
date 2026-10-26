import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          sand: '#1a1412',
          card: '#241a17',
          wine: '#ec5b13',
          'wine-hover': '#cf4c0a',
          charcoal: '#f5f0eb',
          muted: '#9e9188',
          amber: '#f59e0b',
          border: '#382b26',
        },
        primary: '#ec5b13',
        'primary-hover': '#cf4c0a',
        'primary-container': '#ec5b13',
        'surface-dark': '#140e0c',
        'surface-card': '#211815',
        'surface-muted': '#2c201c',
      },
      fontFamily: {
        sans: ['"Public Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [forms],
};
