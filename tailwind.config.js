// @type {import('tailwindcss').Config} 

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#74b9ff', 
        secondary: '#dfe6e9',
        accent: '#FF5722',
        neutral: '#9E9E9E', 
      },
      backgroundImage: {
        'hero-image': "url('./assets/hero.jpg')",
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
     
    },
  },
  plugins: [],
}

