import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid } from '@material-ui/core';
import { MyData } from '../../data/myData';
import ProjectImg1 from '../../data/images/project1/project1.png';
import ProjectImg2 from '../../data/images/project2/project1.png';
import ProjectImg3 from '../../data/images/project3/project1.png';
import ProjectImg4 from '../../data/images/project4/project1.png';
import ProjectImg5 from '../../data/images/project5/project1.png';
import LeftButton from './LeftButton.svg';
import RightButton from './RightButton.svg';

//Custom Component
import CustomCard from '../Custom/CustomCard';

const ProjectImageGroup = [
  ProjectImg1,
  ProjectImg2,
  ProjectImg3,
  ProjectImg4,
  ProjectImg5,
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 15),
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: theme.spacing(3, 2),
    },
  },
  rectangle: {
    width: 78,
    height: 2,
    background: theme.palette.primary.main,
    marginRight: '14px',
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
  },

  cardBox: {
    display: 'flex',
    flexWrap: 'no-wrap',
    overflow: 'hidden',
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  row: {
    display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  circleButton: {
    [theme.breakpoints.between('xs', 'sm')]: {
      width: 30,
      height: 30,
    },
  },
  sliderButtons: {
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '24',
      height: 'auto',
      borderRadius: 8,
    },
    borderRadius: '50%',
    marginBottom: 24,
    padding: 8,
  },
}));

const CardContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.cardBox}>
      {MyData.projects.map((item, id) => {
        console.log(MyData.projects.length);
        return (
          <>
            <CustomCard
              key={item.id}
              className={classes.card}
              image={ProjectImageGroup[0]}
              name={item.name}
              role={item.role}
              skills={item.skills.map((item, index) => {
                return <Typography variant="body2">{item.skill}</Typography>;
              })}
            />
          </>
        );
      })}
    </div>
  );
};

const Projects = () => {
  const classes = useStyles();

  const [current, setCurrent] = useState(0);

  const prevButtonHandler = (e) => {
    console.log(e.target.name);
  };

  const nextButtonHandler = (e) => {
    console.log(e.target.name);
  };
  return (
    <div className={classes.root}>
      <div className={classes.titleBox}>
        <div className={classes.rectangle} />
        <Typography variant="subtitle1">Projects</Typography>
      </div>
      <Grid container direction="row" justify="space-between">
        <Grid item xs={8}>
          <Typography variant="body1" className={classes.title}>
            Projects in which I participated
          </Typography>
        </Grid>
        <Grid item s={4}>
          <Button className={classes.sliderButtons} onClick={prevButtonHandler}>
            <img
              src={LeftButton}
              alt="left-button"
              className={classes.circleButton}
              name="prevButton"
            />
          </Button>

          <Button className={classes.sliderButtons} onClick={nextButtonHandler}>
            <img
              src={RightButton}
              alt="left-button"
              className={classes.circleButton}
              name="nextButton"
            />
          </Button>
        </Grid>
      </Grid>

      <CardContainer />
    </div>
  );
};

export default Projects;
