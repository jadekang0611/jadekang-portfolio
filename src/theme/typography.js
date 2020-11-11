import palette from './palette';

const typography = {
  h1: {
    /* This theme is for the TOP INTRO */
    fontSize: 48,
    fontWeight: 700,
    lineHeight: '72px',
    fontFamily: 'Poppins, sans-serif',
    '@media (max-width:600px)': {
      fontSize: 28,
      lineHeight: '42px',
    },
    color: palette.title,
  },
  body1: {
    /* This theme is for the section INTRO */
    fontSize: 32,
    fontWeight: 600,
    lineHeight: '48px',
    fontFamily: 'Poppins, sans-serif',
    '@media (max-width:600px)': {
      fontSize: 20,
      lineHeight: '30px',
    },
    color: palette.primary,
  },
  body2: {
    /* This theme is for main CONTENT */
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '24px',
    fontFamily: 'Poppins, sans-serif',
    '@media (max-width:600px)': {
      fontSize: 14,
      lineHeight: '21px',
    },
    color: palette.content,
  },
  subtitle1: {
    /* This theme is for the section TITLE */
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '30px',
    fontFamily: 'Poppins, sans-serif',
    '@media (max-width:600px)': {
      fontSize: 16,
      lineHeight: '24px',
    },
  },
  subtitle2: {
    /* This theme is for the NAVIGATION */
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '27px',
    fontFamily: 'Poppins, sans-serif',
    '@media (max-width:600px)': {
      fontSize: 14,
      lineHeight: '16px',
    },
    color: palette.white,
  },
  button: {
    fontSize: 16,
    lineHeight: '24px',
    fontFamily: 'Poppins, sans-serif',
    '@media (max-width:600px)': {
      fontSize: 14,
      lineHeight: '21px',
    },
  },
};

export default typography;
