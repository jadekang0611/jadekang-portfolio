import { createMuiTheme } from '@material-ui/core/styles';

// My custom theme for the portfolio
//font-family: 'Roboto', sans-serif is used only for my LOGO
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4B44B8',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#FBCE80',
      main: '#FF9D00',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#2B2B2B',
      secondary: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    h1: {
      /* This theme is for the TOP INTRO */
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 72,
      fontFamily: 'Poppins, sans-serif',
      '@media (max-width:600px)': {
        fontSize: 28,
        lineHeight: 42,
      },
    },
    body1: {
      /* This theme is for the section INTRO */
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 48,
      fontFamily: 'Poppins, sans-serif',
      '@media (max-width:600px)': {
        fontSize: 20,
        lineHeight: 30,
      },
    },
    body2: {
      /* This theme is for main CONTENT */
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 24,
      fontFamily: 'Poppins, sans-serif',
      '@media (max-width:600px)': {
        fontSize: 14,
        lineHeight: 21,
      },
    },
    subtitle1: {
      /* This theme is for the section TITLE */
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 30,
      fontFamily: 'Poppins, sans-serif',
      '@media (max-width:600px)': {
        fontSize: 16,
        lineHeight: 24,
      },
    },
    subtitle2: {
      /* This theme is for the NAVIGATION */
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 27,
      fontFamily: 'Poppins, sans-serif',
      '@media (max-width:600px)': {
        fontSize: 14,
        lineHeight: 16,
      },
    },
    button: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Poppins, sans-serif',
      '@media (max-width:600px)': {
        fontSize: 14,
        lineHeight: 21,
      },
    },
  },
  breakpoints: {
    values: {
      smartphone: 400,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
});

export default theme;
