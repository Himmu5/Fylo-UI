/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors :{
        darkBlue : "#1C2341",
        darkBluePlue : "#0B1523"
      } , 
      backgroundImage: {
        'main': "url('./public/bg.svg')"
      }
    },
  },
  plugins: [],
}
