import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    transitions: {
      short: '0.3s',
      medium: '0.5s',
      long: '1s',
    },
    colors: {
      white: '#fff',
      black: '#000',

      'c-green-100': '#CFEFDC',
      'c-green-200': '#6FCF97',
      'c-green-300': '#4A8A64',

      'c-gray-100': '#DBDCDA',
      'c-gray-200': '#959692',
      'c-gray-300': '#61625C',
      'c-gray-400': '#40413D',
      'c-gray-500': '#151514',
    },
    radii: {
      px: '1px',
      xs: '4px',
      sm: '6px',
      md: '8px',
      lg: '16px',
      full: '99999px',
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    fontSizes: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '6rem',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      40: '10rem',
      64: '16rem',
      80: '20rem',
    },
    fonts: {
      default: 'Inter, sans-serif',
    },
  },
});
