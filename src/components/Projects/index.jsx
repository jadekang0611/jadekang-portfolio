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

// Multiple Images Slider
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
    '@media (max-width:600px) and (min-width: 500px)': {
      width: 30,
      height: 30,
    },
    '@media (max-width:800px) and (min-width: 601)': {
      width: 50,
      height: 50,
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
  skill: {
    marginRight: '4px',
  },
  customButtonGroup: {
    position: 'relative',
    bottom: '410px',
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    right: 0,
    '@media (min-width:500px)': {
      bottom: '420px',
      left: 0,
      right: 0,
    },
    '@media (max-width:600px)': {
      bottom: '405px',
      left: 0,
      right: 0,
    },
    '@media (min-width:601px)': {
      bottom: '450px',
      left: 0,
      right: 0,
    },
    '@media (min-width: 801px) and (max-width:959px)': {
      bottom: '420px',
    },
    '@media (min-width: 960px) and (max-width:1005px)': {
      bottom: '450px',
    },
    '@media (min-width: 1006px) and (max-width:1024px)': {
      bottom: '420px',
    },
    '@media (min-width: 1025px) and (max-width:1340px)': {
      bottom: '440px',
    },
    '@media (min-width: 1340px) and (max-width:1440px)': {
      bottom: '420px',
    },
  },
}));

const Projects = () => {
  const classes = useStyles();

  const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
      <div className={classes.customButtonGroup}>
        <Button className={classes.sliderButtons}>
          <img
            src={LeftButton}
            alt="left-button"
            className={classes.circleButton}
            name="prevButton"
            onClick={previous}
          />
        </Button>
        <Button className={classes.sliderButtons}>
          <img
            src={RightButton}
            alt="left-button"
            className={classes.circleButton}
            name="nextButton"
            onClick={next}
          />
        </Button>
      </div>
    );
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
          {/* <Button className={classes.sliderButtons}>
            <img
              src={LeftButton}
              alt="left-button"
              className={classes.circleButton}
              name="prevButton"
            />
          </Button>

          <Button className={classes.sliderButtons}>
            <img
              src={RightButton}
              alt="left-button"
              className={classes.circleButton}
              name="nextButton"
            />
          </Button> */}
        </Grid>
      </Grid>

      <div className={classes.cardBox}></div>

      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        customButtonGroup={<CustomButtonGroupAsArrows />}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {MyData.projects.map((item, id) => {
          return (
            <div key={item.id}>
              <CustomCard
                className={classes.card}
                image={ProjectImageGroup[0]}
                name={item.name}
                role={item.role}
                skills={item.skills.map((item, index) => {
                  return (
                    <Typography
                      variant="body2"
                      key={index}
                      className={classes.skill}
                    >
                      {item.skill + ', '}
                    </Typography>
                  );
                })}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Projects;
