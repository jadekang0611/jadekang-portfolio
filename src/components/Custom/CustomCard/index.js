import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(3),
    // padding: '0 8px',
  },
  style: {
    width: '384px',
    height: '320px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(8, 35, 48, 0.24)',
    [theme.breakpoints.between('md', 'lg')]: {
      width: '100%',
      height: '238px',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '100%',
      height: '238px',
    },
  },
  name: {
    margin: '16px 0px 4px 0px',
    fontWeight: 600,
  },
  description: {
    color: '#1d1b43',
    display: 'flex',
    flexWrap: 'wrap',
  },
  category: {
    color: '#535353',
    marginRight: '4px',
  },
  imageHolder: {
    padding: 0,
  },

  projectImg: {
    margin: '-4px -8px',
    borderRadius: '10px',
    width: '400px',
    height: 'auto',
  },
}));

const CustomCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.style} elevation={0}>
        <CardContent className={classes.imageHolder}>
          <img
            src={props.image}
            alt={props.name}
            className={classes.projectImg}
          />
        </CardContent>
      </Card>
      <Typography variant="subtitle1" component="div" className={classes.name}>
        {props.name}
      </Typography>
      <Typography
        variant="body2"
        component="div"
        className={classes.description}
      >
        <span className={classes.category}>Role: </span>
        {props.name}
      </Typography>
      <Typography
        variant="body2"
        component="div"
        className={classes.description}
      >
        <span className={classes.category}>Skills: </span>
        {props.skills}
      </Typography>
    </div>
  );
};

export default CustomCard;
