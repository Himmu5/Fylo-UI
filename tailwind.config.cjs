/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        darkBlue : "#202A3c"
      } , 
      backgroundImage: {
        'main': "url('./public/bg.svg')"
      }
    },
  },
  plugins: [],
}
