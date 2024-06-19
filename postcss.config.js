module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'welcome': {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '50%': { opacity: 0.5, transform: 'scale(1.05)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'welcome': 'welcome 1.5s ease-in-out forwards'
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
}
