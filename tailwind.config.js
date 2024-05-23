/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mission-background': "url('/images/event1.jpg')",
      },
      fontFamily: {
        custom: ['"PlayFair Display SC"', 'serif'],
      }
    },
  },
  plugins: [],
}

