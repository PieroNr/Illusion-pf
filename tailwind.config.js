module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'title': ['"Brown Sugar Modern"'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
