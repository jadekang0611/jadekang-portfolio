import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import { MyData } from '../../data/myData';
import Projects from '../Projects';
import Thumbnail from './Thumbnail.png';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
  mainFeaturedProject: {
    position: 'relative',
    backgroundColor: theme.palette.white,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginBottom: theme.spacing(9),
    padding: theme.spacing(6, 15),
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: theme.spacing(6, 2, 3, 2),
    },
  },
  top: { marginBottom: 12 },
  imageBox: { marginBottom: 16 },
  image: {
    width: '100%',
    borderRadius: 10,
  },
  button: {
    textTransform: 'capitalize',
  },
  buttonBox: {
    display: 'flex',
    alignItems: 'center',
  },
  github: { marginRight: '20px' },
  liveButton: {
    textTransform: 'capitalize',
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(75, 68, 184, 0.1)',
  },
  link: {
    textDecoration: 'none',
  },
}));

const MainFeaturedProject = (props) => {
  const classes = useStyles();
  const { post } = props;
  return (
    <>
      <Grid container className={classes.mainFeaturedProject}>
        <Grid
          container
          direction="row"
          justify="space-between"
          className={classes.top}
        >
          <Grid item>
            <Link to={ROUTES.LANDING} className={classes.link}>
              {' '}
              <Button
                startIcon={<ArrowBackRoundedIcon />}
                className={classes.button}
              >
                Back to portfolio
              </Button>
            </Link>
          </Grid>
          <Grid item className={classes.buttonBox}>
            <GitHubIcon className={classes.github} />
            <Button className={classes.liveButton}>Live Link</Button>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.imageBox}>
          <img src={Thumbnail} alt="Project" className={classes.image} />
        </Grid>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <Typography variant="body2">Role: Software Engineer</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">Skills: JavaScript, React</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">Date: 12.02.2020</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MainFeaturedProject;

MainFeaturedProject.propTypes = {
  post: PropTypes.object,
};
