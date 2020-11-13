import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Typography, Button, Grid, Hidden, withWidth } from '@material-ui/core';
import CustomButton from '../Custom/CustomButton';
import Logo from './Logo.svg';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(5, 15, 0, 15),
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: theme.spacing(3, 2),
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    alignItems: 'center',
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
    alignSelf: 'center',
  },
}));

const Navigation = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={2} md={2} className={classes.logoBox}>
        <a href="/">
          <img src={Logo} alt="JK Portfolio" />
        </a>
      </Grid>
      <Hidden smDown>
        <Grid item xs={8} md={8} className={classes.navBox}>
          <Link
            activeClass="active"
            to="jkIntro"
            className={classes.link}
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button className={classes.navItem}>
              <Typography variant="subtitle2">Intro</Typography>
            </Button>
          </Link>
          <Link
            to="jk_about_me"
            className={classes.link}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button className={classes.navItem}>
              <Typography variant="subtitle2">About Me</Typography>
            </Button>
          </Link>
          <Link
            to="jk_projects"
            className={classes.link}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button className={classes.navItem}>
              <Typography variant="subtitle2">Projects</Typography>
            </Button>
          </Link>
          <Link
            to="jk_contacts"
            className={classes.link}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button className={classes.navItem}>
              <Typography variant="subtitle2">Get In Touch</Typography>
            </Button>
          </Link>
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
