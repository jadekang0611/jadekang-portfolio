import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Typography, Button, Grid, Hidden, withWidth } from '@material-ui/core';
import CustomButton from '../Custom/CustomButton';
import Logo from './Logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(18),
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginBottom: theme.spacing(0),
    },
  },
  logoBox: {
    '@media (min-width: 800px) and (max-width:1121px)': {},
  },
  navBox: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  navItem: {
    textTransform: 'Capitalize',
  },
  buttonBox: {
    textAlign: 'end',
  },
}));

const Navigation = (props) => {
  const classes = useStyles();
  const { width } = props;
  return (
    <Grid container className={classes.root}>
      <Grid item xs={2} md={2} className={classes.logoBox}>
        <a href="/">
          <img src={Logo} alt="JK Portfolio" />
        </a>
      </Grid>
      <Hidden smDown>
        <Grid item xs={8} md={8} className={classes.navBox}>
          <Button className={classes.navItem}>
            <Typography variant="subtitle2">Intro</Typography>
          </Button>
          <Button className={classes.navItem}>
            <Typography variant="subtitle2">About Me</Typography>
          </Button>
          <Button className={classes.navItem}>
            <Typography variant="subtitle2">Projects</Typography>
          </Button>
          <Button className={classes.navItem}>
            <Typography variant="subtitle2">Get In Touch</Typography>
          </Button>
        </Grid>
      </Hidden>
      <Hidden only="md">
        <Grid item xs={6} md={2} className={classes.buttonBox}>
          <CustomButton />
        </Grid>
      </Hidden>
    </Grid>
  );
};

Navigation.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(Navigation);
