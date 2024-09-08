/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-background': 'linear-gradient(to left, #bf2feb96, #6D28D9)',
        'card-background': 'linear-gradient(to top, #bf2feb96, #6D28D9)'
      }
    },
  },
  plugins: [],
}