/** @type {import('tailwindcss').Config} */

module.exports = {
  
  content: [
    "./src/**/*.{html,ts}",
  ],
  borderWidth: {
    DEFAULT: '1px',
    0: '1px',
    2: '2px',
    3: '3px',
    4: '4px',
    6: '6px',
    8: '20px',
  },
  theme: {
    extend:{
      colors:{
        supblue:'#28407f'
      },
     
    }
   
    
  },
  plugins: [],

}