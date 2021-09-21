import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

export const THEME = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  breakpoints,
  colors: {
    brand: {
      // 100: '#F452cb',
      // 200: '#F452cb',
      // 300: '#F745BE',
      // 400: '#F745BE',
      // 500: '#FB39B2',
      // 600: '#FB39B2',
      // 700: '#F02CA5',
      // 800: '#F02CA5',
      // 900: '#F01F98',

      100: '#2452cb',
      200: '#2452cb',
      300: '#1745BE',
      400: '#1745BE',
      500: '#0B39B2',
      600: '#0B39B2',
      700: '#002CA5',
      800: '#002CA5',
      900: '#001F98',
    },
    dark: {
      100: '#000000',
      200: '#05040e',
      300: '#0e0d17',
      400: '#474747',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Fira Mono',
  },
  layerStyles: {
    primary: {
      color: 'white',
      bg: 'brand.500',
    },
    brand: {
      color: 'white',
      bg: 'brand.400',
    },
    sidebarDisabled: {
      color: 'red.400',
      bg: 'white',
    },
  },
  components: {
    Button: { baseStyle: { _focus: { boxShadow: 'none' } } },
    Link: { baseStyle: { _focus: { boxShadow: 'none' } } },
    Tab: { baseStyle: { _focus: { boxShadow: 'none' } } },
  },
  textStyles: {
    h4: {
      fontSize: ['18px', '18px'],
      fontWeight: 'bold',
    },
    p: {
      fontSize: ['15px', '15px'],
    },
  },
  shadows: { outline: '0 !important' },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
    '3': '.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
});
