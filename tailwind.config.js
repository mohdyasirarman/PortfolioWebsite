/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'sm': '0 2px 2px rgba(245, 245, 245, 0.25)', 
        'md': '0 5px 5px rgba(245, 245, 245, 0.25)',
        'lg': '0 10px 10px rgba(245, 245, 245, 0.25)', 
        'xl': '0 20px 20px rgba(245, 245, 245, 0.25)', 
        '2xl': '0 25px 25px rgba(245, 245, 245, 0.25)',
        '3xl': '0px 10px 20px rgba(245, 245, 245, 0.25)', 
        '4xl': [
          '0 35px 35px rgba(245, 245, 245, 0.25)',
          '0 45px 65px rgba(245, 245, 245, 0.15)'
        ],
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        drukwide: ["DrukWide", "Poppins"],
      },
    },
  },
  plugins: [],
};
