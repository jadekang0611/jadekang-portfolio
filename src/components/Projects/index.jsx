import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { MyData } from '../../data/myData';
import ProjectImg1 from '../../data/images/project1/project1.png';
import ProjectImg2 from '../../data/images/project2/project1.png';
import ProjectImg3 from '../../data/images/project3/project1.png';
import ProjectImg4 from '../../data/images/project4/project1.png';
import ProjectImg5 from '../../data/images/project5/project1.png';

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
}));

const CardContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.cardBox}>
      {MyData.projects.map((item, id) => {
        return (
          <>
            <CustomCard
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
  return (
    <div className={classes.root}>
      <div className={classes.titleBox}>
        <div className={classes.rectangle} />
        <Typography variant="subtitle1">Projects</Typography>
      </div>
      <Typography variant="body1" className={classes.title}>
        Projects in which I participated
      </Typography>

      <CardContainer />
    </div>
  );
};

export default Projects;
