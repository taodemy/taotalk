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
    fontSize: {
      sm: [
        '0.75rem',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      base: [
        '0.875rem',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      lg: [
        '1rem',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      xl: [
        '1.125rem',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      '2xl': [
        '1.625rem',
        {
          lineHeight: '100%',
          fontWeight: '400',
        },
      ],
      '3xl': [
        '2rem',
        {
          lineHeight: '100%',
          fontWeight: '400',
        },
      ],
      '4xl': [
        '3rem',
        {
          lineHeight: '100%',
          fontWeight: '400',
        },
      ],
      '5xl': [
        '3.5rem',
        {
          lineHeight: '120%',
          fontWeight: '400',
        },
      ],
    },
    fontFamily: {
      sans: ['Dela Gothic One', 'Montserrat'],
    },
    extend: {
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
        green: {
          DEFAULT: '#639b6d',
          LIGHTEN: 'rgba(99, 155, 109, 0.3)',
        },
        pink: '#a15993',
        red: '#a95151',
        yellow: '#c4a24c',
        orange: {
          DEFAULT: '#cb5b43',
          LIGHTEN: 'rgba(203, 91, 67, 0.3)',
        },

        /* Generally used color*/
        $white: '#ffffff',
      },
    },
  },
  plugins: [],
};
