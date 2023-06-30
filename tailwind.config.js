/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      // => @media (min-width: 320px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1280px',
      // => @media (min-width: 1280px) { ... }

      xl: '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      fontFamily: {
        Dela_Gothic_One: 'Dela Gothic One',
        Montserrat: 'Montserrat',
      },
      fontSize: {
        tk12: '0.75rem', //12px
        tk14: '0.875rem', //14px
        tk16: '1rem', //16px
        tk18: '1.125rem', //18px
        tk26: '1.625rem', //26px
        tk32: '2rem', //32px
        tk48: '3rem', //48px
        tk56: '3.5rem', //56px
      },
      colors: {
        /* Primary Color*/
        tk_cyanDark: '#2b788b',
        tk_cyanLight: '#c3dce3',
        tk_pinkDark: '#945069',
        tk_pinkLight: '#f2d4dc',
        tk_greyLight: '#f6f5f4',
        tk_greyMedium: '#e0e0e0',
        tk_greyIcon: '#bababa',
        tk_greyDark: '#757575',
        tk_zambezi: '#585858',

        /* Secondary Color*/
        tk_cyan: '#5996a5',
        tk_green: '#639b6d',
        tk_pink: '#a15993',
        tk_red: '#a95151',
        tk_yellow: '#c4a24c',
        tk_orange: '#cb5b43',
      },
    },
  },
  plugins: [],
};
