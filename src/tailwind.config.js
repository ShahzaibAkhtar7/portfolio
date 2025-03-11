module.exports = {
  darkMode: 'class', // Enable dark mode based on a class
  theme: {
    extend: {
      colors: {
        'brand-blue': '#007bff', // Custom brand blue
        'brand-red': '#ff4136',  // Custom brand red
      },
      spacing: {
        '72': '18rem', // Custom spacing
        '84': '21rem',
        '96': '24rem',
      },
      fontSize: {
        'xxl': '1.5rem' // Custom font size
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'dark'],
      textColor: ['responsive', 'hover', 'focus', 'dark'],
    },
  },
  plugins: [],
}
