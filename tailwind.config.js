module.exports = {
  darkMode: 'class',
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    screens: { sm: '375px', xl: '1440px' },
    fontFamily: {
      inter: ['Inter', 'Helvetica', 'sans-serif']
    },
    fontSize: {
      'xs': '0.750rem',
      'sm': '0.875rem',
      'md': '1.125rem',
      'lg': '1.25rem',
      'xl': '3rem'
    },
    fontWeight: {
      'normal': '400',
      'bold': '700'
    }, 
    extend: {
      borderRadius: {
        'standard': '14px'
      },
      colors: {
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        'facebook-blue': 'hsl(208, 92%, 53%)',
        'twitter-blue': 'hsl(203, 89%, 53%)',
        'instagram-gradient': 'linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)',
        'youtube-red': 'hsl(348, 97%, 39%)',
        'dark-theme': 'linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)',
        'light-theme': 'hsl(230, 22%, 74%)',
        'very-dark-blue': 'hsl(230, 17%, 14%)',
        'very-dark-blue-top': 'hsl(232, 19%, 15%)',
        'dark-desaturated-blue': 'hsl(228, 28%, 20%)',
        'desaturated-blue': 'hsl(228, 34%, 66%)',
        'white': 'hsl(0, 0%, 100%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'light-grayish-blue': 'hsl(227, 47%, 96%)',
        'dark-grayish-blue': 'hsl(228, 12%, 44%)'
      },
    },
  },
  plugins: [],
}
