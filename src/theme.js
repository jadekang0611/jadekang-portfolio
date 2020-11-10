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
    },
    body1: {
      /* This theme is for the section INTRO */
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 48,
      fontFamily: 'Poppins, sans-serif',
    },
    body2: {
      /* This theme is for main CONTENT */
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 24,
      fontFamily: 'Poppins, sans-serif',
    },
    subtitle1: {
      /* This theme is for the section TITLE */
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 30,
      fontFamily: 'Poppins, sans-serif',
    },
    subtitle2: {
      /* This theme is for the NAVIGATION */
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 27,
      fontFamily: 'Poppins, sans-serif',
    },
    button: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Poppins, sans-serif',
    },
  },
});

export default theme;
