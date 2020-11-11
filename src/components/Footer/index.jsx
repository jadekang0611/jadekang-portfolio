import React from 'react';
import { CssBaseline, Typography, Link, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MyData } from '../../data/myData';
import LinkedIn from './linkedin.svg';
import FooterBackground from './FooterBackground.svg';
import CustomButton from '../Custom/CustomButton';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundImage: `url(${FooterBackground})`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '100vh',
    padding: theme.spacing(6, 15),
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: theme.spacing(3, 2),
    },
  },
  gap: {
    marginBottom: 4,
  },
  contact: {
    marginBottom: '25px',
  },

  social: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row !important',
    listStyle: 'none',
    margin: 0,
  },
  socialIcon: {
    marginRight: '16px',
  },
  copyright: {
    marginTop: '44px',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: '41px',
    },
  },
  buttonGrid: {
    textAlign: 'right',
    alignSelf: 'center',
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'none',
    },
  },
  show: {
    marginTop: '30px',
    textAlign: 'left',
    [theme.breakpoints.between('md', 'xl')]: {
      display: 'none',
    },
  },
}));

const ContactContent = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        {MyData.contact.map((item, index) => {
          return (
            <div className={classes.contact}>
              <Typography variant="body2" className={classes.gap}>
                {item.type.toUpperCase()}
              </Typography>
              <Typography variant="body2">{item.content}</Typography>
            </div>
          );
        })}
      </div>
      <div>
        <Typography variant="body2" className={classes.gap}>
          SOCIAL
        </Typography>
        <ul className={classes.social}>
          <li className={classes.socialIcon}>
            <a href="/">
              <img src={LinkedIn} alt="linkedin" width="24" height="24" />
            </a>
          </li>
          <li className={classes.socialIcon}>
            <a href="/">
              <img src={LinkedIn} alt="linkedin" width="24" height="24" />
            </a>
          </li>
          <li className={classes.socialIcon}>
            <a href="/">
              <img src={LinkedIn} alt="linkedin" width="24" height="24" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Copyright = () => {
  const classes = useStyles();
  return (
    <div className={classes.copyright}>
      <Typography variant="body2">
        {'Copyright © '}
        {new Date().getFullYear()}
        <Link color="inherit" href="https://jadekang.me/">
          Jade Kang.
        </Link>{' '}
        {'All rights reserved.'}
      </Typography>
    </div>
  );
};

const Footer = () => {
  const classes = useStyles();
  console.log(MyData);
  return (
    <div className={classes.footer}>
      <CssBaseline />
      <Grid container>
        <Grid xs={12} md={8}>
          <Typography variant="h1">Get In Touch</Typography>
          <ContactContent className={classes.contact} />
          <div className={classes.show}>
            <CustomButton />
          </div>
          <Copyright />
        </Grid>
        <Grid xs={12} md={4} className={classes.buttonGrid}>
          <CustomButton />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
