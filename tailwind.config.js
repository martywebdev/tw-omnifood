/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    // this will overide all fontsizes
    // fontSize: {
    //   '10xl': '10rem'
    // },
    extend: {
      //extending the default tailwind classes
      fontFamily: {
        'rubik': ["Rubik"],
        'pacifico': ['Pacifico']
      },
      fontSize: {
        '10xl': '10rem'
      },
      colors: {
        primary: '#b83975',
        secondary: {
          100: '#ecff83'
        }
      }
    },
    
  },
  plugins: [],
}

