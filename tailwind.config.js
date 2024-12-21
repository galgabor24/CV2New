/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cosmic: {
          // Deep space background
          900: '#0B1026', // rgb(11, 16, 38) - Main background
          800: '#1B2142', // rgb(27, 33, 66) - Secondary background
          700: '#2A3366', // rgb(42, 51, 102) - Card backgrounds
          
          // Nebula accents
          400: '#8B6EDF', // rgb(139, 110, 223) - Primary accent
          300: '#AB92FF', // rgb(171, 146, 255) - Secondary accent
          
          // Star highlights
          100: '#E2DDFF', // rgb(226, 221, 255) - Text and highlights
        },
        nova: {
          // Bright highlight accents
          400: '#64E6FF', // rgb(100, 230, 255) - Primary interactive elements
          300: '#92F4FF', // rgb(146, 244, 255) - Hover states
        }
      },
      animation: {
        bounce: 'bounce 1.5s infinite',
        'typing-cursor': 'typing-cursor 1s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'typing-cursor': {
          '0%, 100%': { borderRight: '2px solid transparent' },
          '50%': { borderRight: '2px solid #64E6FF' },
        },
      },
    },
  },
  plugins: [],
};