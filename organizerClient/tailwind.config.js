/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/*.{html,js}", "./src/app/**/*.{html,js}", "./src/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'block-sm': '0 0 20px rgba(0, 0, 0, 0.25)',
        'block-md': '0 0 40px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade-in': 'fade-in .2s linear forwards',
        'move-in-top': 'move-in-top .7s linear forwards',
        'message-box': 'message-box 4s linear forwards',
      },
      keyframes: {
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '100%' },
        },
        'move-in-top': {
          '0%, 65%': { transform: 'translateY(50px)', 'z-index': '-1', opacity: '0' },
          '90%': { 'z-index': '-1', opacity: '0' },
          '99%': { opacity: '100%', 'z-index': '-1' },
          '100%': { transform: 'translateY(0)', 'z-index': '10' },
        },
        'message-box': {
          '0%, 100%': { transform: 'translateY(-300px)' },
          '15%, 85%': { transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
