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
    padding: theme.spacing(6, 15, 4, 15),
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: theme.spacing(6, 2, 2, 2),
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
    color: 'inherit',
  },
  contentBox: {
    padding: theme.spacing(0, 46.25),
    [theme.breakpoints.between('sm', 'md')]: {
      padding: theme.spacing(0, 30),
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: theme.spacing(2, 2),
    },
  },
  content: {
    marginTop: 12,
    color: theme.palette.black,
    fontWeight: 400,
  },
}));

const ProjectDetail = (props) => {
  const classes = useStyles();
  console.log(props.location);
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
            <a
              href={props.location.github}
              className={classes.link}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className={classes.github} />
            </a>
            <a
              href={props.location.deployed}
              className={classes.link}
              target="_blank"
              rel="noreferrer"
            >
              <Button className={classes.liveButton}>Live Link</Button>
            </a>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.imageBox}>
          <img
            src={props.location.thumbnail}
            alt="Project"
            className={classes.image}
          />
        </Grid>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <Typography variant="body2">
              {'Role: ' + props.location.role}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              {'Skills: ' + props.location.skills}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{props.location.released}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className={classes.contentBox}>
          <Typography variant="body1" align="center">
            {props.location.name}
          </Typography>
          <Typography variant="subtitle2" className={classes.content}>
            {props.location.content}
          </Typography>
        </Grid>
      </Grid>
      <Projects />
    </>
  );
};

export default ProjectDetail;

ProjectDetail.propTypes = {
  post: PropTypes.object,
};
