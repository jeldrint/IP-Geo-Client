/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],  
    theme: {
      extend: {
          fontFamily: {
              varela: 'Varela',
              varelaRound: 'Varela Round',
              roboto: 'Roboto',
              playfair: 'Playfair Display SC',
              openSans: 'Open Sans',
              montserrat: 'Montserrat',
              poppins: 'Poppins',
              lato: 'Lato'
          },
          colors: {
            "light-brown": "#835938",
            "brown": "#40260A",
          },
        },
    },
    plugins: [],
  }
  
  