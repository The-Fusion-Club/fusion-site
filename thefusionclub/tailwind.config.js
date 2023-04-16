/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const flipclass = plugin(function ({addUtilities}) {
  addUtilities({
    '.flip-card': {
      transform: "rotateY(180deg)",
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.perspective': {
      perspective: '1000px',
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden',
    },
  })
})

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'uvpurple': '#5E4595',
      },
    }
  },
  plugins: [flipclass],
}
