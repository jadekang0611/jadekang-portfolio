import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Ellipse from './Ellipse.svg';
import Star from './Star.svg';
import Zigzag from './Zigzag.svg';
import Navigation from '../Navigation';
import Scroll from './Scroll.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${Zigzag}), url(${Star}), url(${Ellipse}), url(${Scroll})`,
    backgroundPosition: '2.5% 20%, 11% 100%, center center, center 95%',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(5, 15, 26, 15),
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: theme.spacing(3, 2),
      backgroundImage: `url(${Zigzag})`,
      backgroundSize: 110,
      backgroundPosition: '90% 30%',
      backgroundRepeat: 'no-repeat',
    },
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 49,
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
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navigation />
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
        I am an experienced software engineer and business professional
      </Typography>
      <Typography variant="body2" className={classes.text2}>
        Enthusiastic about enterprise efficiency and technology with over 5
        years of experience analyzing and interpreting large volumes of complex
        data in Fortune 100 public organizations and building enterprise
        applications.
      </Typography>
    </div>
  );
};

export default Intro;
