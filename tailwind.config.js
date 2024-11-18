/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '90': '90%',
      },
      colors: {
        'color1': '#f0f0f0',
      },

    },
  },
  plugins: [],
}

