module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        navy: '#212D40',
        grayF3: '#f3f3f3',
        twitter: '#55acee',
      },
      textColor: {
        latte: '#FEF6E3',
        copper: '#D66853',
        navy: '#212D40',
      },
      spacing: {
        '80': '5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
