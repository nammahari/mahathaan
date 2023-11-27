/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...['./src/**/*.html', './src/**/*.js', './src/**/*.jsx']],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

