import React from 'react';
import { Typography, Grid, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Assets
import AboutMeEdited from './AboutMeEdited.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(17, 15, 6, 15),
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: theme.spacing(3, 2),
    },
  },

  profile2: {
    [theme.breakpoints.between('sm', 'md')]: {
      width: 651,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: 600,
      display: 'flex',
      margin: 'auto',
    },
    '@media (min-width: 0px) and (max-width:1279px)': {
      width: '100%',
      display: 'none',
    },
    '@media (min-width: 1282px)': {
      width: 651,
    },
  },

  titleBox: {
    display: 'flex',
    alignItems: 'center',
  },

  rectangle: {
    width: 78,
    height: 2,
    background: theme.palette.primary.main,
    marginRight: '14px',
  },
  storyBox: {
    margin: theme.spacing(2.5, 0),
    color: theme.palette.content,
  },
  wrapper: {
    position: 'relative',
  },
  rectangle6: {
    width: 478,
    height: 16,
    background: theme.palette.secondary.light,
    position: 'absolute',
    left: 0,
    right: 0,
    top: '0.85em',
    zIndex: '-1',
    '@media (min-width: 0px) and (max-width:599px)': {
      width: 299,
    },
  },
  rectangle7: {
    width: 142,
    height: 16,
    background: theme.palette.secondary.light,
    position: 'absolute',
    left: 0,
    right: 0,
    top: '0.85em',
    zIndex: '-1',
    '@media (min-width: 0px) and (max-width:599px)': {
      width: 90,
    },
  },
  chip: {
    margin: '16px 8px -4px 0',
    boxShadow: '0px 4px 8px rgba(75, 68, 184, 0.24)',
    borderRadius: '30px',
    padding: '8px 16px',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '24px',
  },
  profileContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    '@media (min-width: 1280px) and (max-width:1500px)': {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
}));

const skillSet = [
  { skill: 'C#' },
  { skill: 'JavaScript' },
  { skill: 'React' },
  { skill: 'Node.JS' },
  { skill: 'Python' },
  { skill: 'MongoDB' },
  { skill: 'Firebase' },
  { skill: 'Ionic' },
  { skill: 'Material-UI' },
  { skill: 'Bootstrap' },
  { skill: 'Figma' },
];

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="jk_about_me">
      <Grid container>
        <Grid item xs={12} lg={6} className={classes.profileContainer}>
          <img
            src={AboutMeEdited}
            alt="My Profile-Two"
            className={classes.profile2}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={classes.titleBox}>
            <div className={classes.rectangle} />
            <Typography
              variant="subtitle1"
              color="primary"
              className={classes.title}
            >
              About Me
            </Typography>
          </div>
          <Typography variant="body1" className={classes.title}>
            <div className={classes.wrapper}>
              Hello, my name is Jade Kang
              <span className={classes.rectangle6}></span>
            </div>
          </Typography>
          <Typography variant="body2" className={classes.storyBox}>
            I'm a creative-minded, analytical, and organized software engineer
            with a passion for building software that delivers first-class UI &
            UX. I have been developing fullstack web and mobile applications
            individually as well as within a team.
          </Typography>
          <Typography variant="body2" className={classes.storyBox}>
            I view myself to be unique and different from most other software
            engineers. My background as a Certified Public Accountant and
            startup founder displays my abilities in analysis, multitasking, and
            researching while operating in a collaborative agile environment
            with a focus on the company’s profitability. In addition, as a
            self-taught bootcamp graduate and continuous learner of new
            technologies, I can prove to you that once I found interests in
            software engineering, I didn’t just stop after exploring a little.
            Instead, I dove in deep to learn the foundations of computer science
            and advanced programming topics in order to apply those skills to
            further my career in Software Engineering.
          </Typography>
          <Typography variant="body2" className={classes.storyBox}>
            With all my strengths and the uniqueness of my previous and current
            software engineering experiences, I am committed to joining your
            team and demonstrating my skills mentioned above within your team.
          </Typography>
          <Typography variant="body1" className={classes.title}>
            <div className={classes.wrapper}>
              My Skills
              <span className={classes.rectangle7}></span>
            </div>
          </Typography>
          {skillSet.map((item, index) => {
            return (
              <Chip
                className={classes.chip}
                label={item.skill}
                clickable
                color="primary"
              />
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutMe;
