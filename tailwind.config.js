/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      
        'md': '360px', 
        'lg': '768px',
        'xs': '320px'
       
      },
    },
  },
  plugins: [],
}


