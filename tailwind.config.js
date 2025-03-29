/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xs:'575px',
        sm:'768px',
        md:'992px',
        lg:'1200px',
        xl:'1440px'
      },
      fontFamily:{
        poppins:['Poppins','sans-serif'],
        inter:['Inter','sans-serif']
      },
      colors:{
        primary1:'#2F2E30',
        secondaryClr:'#F5F5F5',
        secondaryClr2:'#DB4444',
        button1:'#00FF66'
      }
    },
  },
  plugins: [],
  
}