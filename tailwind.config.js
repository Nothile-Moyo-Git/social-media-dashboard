module.exports = {
  darkMode: 'class',
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    screens: { 
      sm: '375px',
      md: '480px', 
      xl: '1440px' 
    },
    fontFamily: {
      inter: ['Inter', 'Helvetica', 'sans-serif']
    },
    fontSize: {
      'xs': '0.750rem',
      'sm': '0.875rem',
      'md': '1.125rem',
      'lg': '1.25rem',
      'xl': '1.5rem'
    },
    fontWeight: {
      'normal': '400',
      'bold': '700'
    }, 
    extend: {
      boxShadow: {
        'custom': '0px 0px 12px 0px rgba(0,0,0,0.2)'
      },
      borderRadius: {
        'standard': '14px'
      },
      colors: {
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': 'hsl(356, 69%, 56%)',
        'facebook-blue': 'hsl(208, 92%, 53%)',
        'twitter-blue': 'hsl(203, 89%, 53%)',
        'instagram-gradient': 'linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
        'instagram-yellow': 'hsl(37, 97%, 70%)',
        'instagram-pink': 'hsl(329, 70%, 58%)',
        'youtube-red': 'hsl(348, 97%, 39%)',
        'dark-theme': 'linear-gradient( to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
        'dark-theme-blue': 'hsl(210, 78%, 56%)', 
        'dark-theme-green': 'hsl(146, 68%, 55%)',
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
      spacing: {
        '15': '3.75rem',
        '8.5': '2.125rem',
      },
    },
  },
  plugins: [],
}
