// @type {import('tailwindcss').Config} 

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#74b9ff', // Custom primary color
        secondary: '#FFC107', // Custom secondary color
        accent: '#FF5722', // Custom accent color
        neutral: '#9E9E9E', // Custom neutral color
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

