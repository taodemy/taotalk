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
    extend: {
      colors: {
        /* Primary Color*/
        cyanDark: '#2b788b',
        cyanLight: '#c3dce3',
        pinkDark: '#945069',
        pinkLight: '#f2d4dc',
        black: '#000000',
        greyLight: '#f6f5f4',
        greyMedium: '#e0e0e0',
        greyIcon: '#bababa',
        greyDark: '#757575',
        Zambezi: '#585858',

        /* Secondary Color*/
        cyan: '#5996a5',
        green: '#639b6d',
        pink: '#a15993',
        red: '#a95151',
        yellow: '#c4a24c',
        orange: '#cb5b43',

        /* Generally used color*/
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
