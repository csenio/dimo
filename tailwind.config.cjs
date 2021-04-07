const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./src/**/*.svelte"
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray
      }
    }
  }
}
