import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Ellipse from './Ellipse.svg';
import Star from './Star.svg';
import Zigzag from './Zigzag.svg';
import IntroProfileEdited from './IntroProfileEdited.svg';
import Scroll from './Scroll.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${Zigzag}), url(${Star}), url(${Ellipse}), url(${Scroll})`,
    backgroundPosition: '2.5% 10%, 11% 100%, center center, center 95%',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(0, 15, 10, 15),
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: theme.spacing(3, 2),
      backgroundImage: `url(${Zigzag})`,
      backgroundSize: 110,
      backgroundPosition: '90% 5%',
      backgroundRepeat: 'no-repeat',
    },
  },
  introBox: {
    margin: 'auto',
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 0,
  },
  rectangle: {
    width: 78,
    height: 2,
    background: '#EEC2BF',
    marginRight: '14px',
  },
  title: { color: '#EEC2BF' },
  text1: {
    color: theme.palette.white,
    maxWidth: 641,
    marginBottom: 16,
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: 22,
    },
  },
  text2: {
    maxWidth: 641,
    color: '#EEECF5',
  },
  profile1: {
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '100%',
      margin: 'auto',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '100%',
      margin: 'auto',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: '100%',
      display: 'flex',
    },
    '@media (min-width: 1282px)': {
      width: '100%',
    },
  },
  profile1Box: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="jk_Intro">
      <Grid container>
        <Grid item xs={12} lg={6} className={classes.introBox}>
          <div className={classes.titleBox}>
            <div className={classes.rectangle} />
            <Typography
              variant="subtitle1"
              color="primary"
              className={classes.title}
            >
              Jade Kang
            </Typography>
          </div>
          <Typography variant="h1" className={classes.text1}>
            I am an experienced full cycle engineer and business professional
          </Typography>
          <Typography variant="body2" className={classes.text2}>
            Coming from management consulting and financial background, I build
            user-centric applications with business stakeholders' mindset
            instead of focusing on just the code.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} className={classes.profile1Box}>
          <img
            src={IntroProfileEdited}
            alt="Jade Kang"
            className={classes.profile1}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;
