/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
        'xl': '1200px',
        'lg': '1000px',
        'md': '800px',
        'sm': '600px',
      },
    },
    extend: {
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
       animation: {
               flip: 'flip 3s linear infinite',
      },
      keyframes: {
         flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },

    },
  },
  plugins: [],
}
