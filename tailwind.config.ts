/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      
      'md': '450px',
      // => @media (min-width: 768px) { ... }
    },
    
    extend: {},
  },
  plugins: [],
};
