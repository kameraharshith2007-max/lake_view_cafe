/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#06080d',
        charcoal: '#0a0e16',
        coffee: '#111722',
        cream: '#f5efe6',
        ivory: '#faf6f0',
        mute: '#9ba3b0',
        gold: '#c8a878',
        'gold-light': '#d9c09a',
        'gold-dark': '#a8895c',
        teal: '#5b8a8a',
        'teal-light': '#7ba8a8',
        blue: '#1a2a44',
        'blue-light': '#2a4060',
        cyan: '#4a7a8a',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        hero: ['Anton', 'Impact', 'sans-serif'],
        brand: ['Anton', 'Impact', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
