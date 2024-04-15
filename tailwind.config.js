/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '29rem',
        '144': '36rem',
        '23': '23rem',
        'fl65': '65vh',
        '15p': '15%'
      },
      gridTemplateColumns: {
        'deal': 'repeat(auto-fit, minmax(20rem, 1fr))',    
       
      },
      gridAutoColumns:{
        'deal': 'minmax(20rem, 1fr)',  
      },
      
    },
  },
  plugins: [],
}

