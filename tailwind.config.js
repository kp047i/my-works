module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        navy: '#212D40',
        grayF3: '#f3f3f3',
        twitter: '#55acee',
      },
      textColor: {
        latte: '#fdf1d3',
        latteHover: '#fef6e3',
        copper: '#D66853',
        navy: '#212D40',
      },
      ringColor: {
        latte: '#fdf1d3',
        latteHover: '#fef6e3',
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
