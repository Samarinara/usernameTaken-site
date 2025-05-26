// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        },
        lineHeight: {
          '1-5': '1.5',
        },
        colors: {
          'dark-background': '#242424',
          'dark-text': 'rgba(255, 255, 255, 0.87)',
          'light-background': '#ffffff',
          'light-text': '#213547',
          'primary-link': '#646cff',
          'primary-link-hover-dark': '#535bf2',
          'primary-link-hover-light': '#747bff',
          'button-dark-bg': '#1a1a1a',
          'button-light-bg': '#f9f9f9',
          'button-border-hover': '#646cff',
        },
      },
    },
    plugins: [],
    darkMode: 'media', // Or 'class' if you prefer to toggle dark mode manually
  }