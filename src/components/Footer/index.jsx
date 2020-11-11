import React from 'react';
import { CssBaseline, Typography, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      {new Date().getFullYear()}
      <Link color="inherit" href="https://jadekang.me/">
        Jade Kang.
      </Link>{' '}
      {'All rights reserved.'}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.main}>
        <Typography variant="h1" component="h1" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="body2" gutterBottom>
          <ul>
            <li>Phone</li>
            <li>617-606-1989</li>
            <li>Email</li>
            <li>jkang.se@gmail.com</li>
            <li>Social</li>
            <li>617-606-1989</li>
          </ul>
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>
      <footer className={classes.footer}>
        <Container>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
