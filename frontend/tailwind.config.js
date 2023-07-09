/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'heading1' : '#959495',
        'orange' : '#FF7300',
        'placeholder' : '#4C4C4C',
        'common' : '#B8B8B8'
      },

      fontSize: {
        xl: '3.75rem',
        nm: '1.75rem',
       'nm+' : '1.875rem',
       'nm++' : '2.5rem',
      },

      fontFamily: {
        'display' : 'Pretendard'
      }


    },
  },
  plugins: [],
}

