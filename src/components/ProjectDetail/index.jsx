import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Grid,
  Container,
  Typography,
  Button,
} from '@material-ui/core';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import { MyData } from '../../data/myData';
import Projects from '../Projects';
import MainFeaturedProject from '../MainFeaturedProject';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const ProjectDetail = () => {
  const classes = useStyles;
  return (
    <>
      <CssBaseline />
      <MainFeaturedProject />
      <Projects />
    </>
  );
};

export default ProjectDetail;
