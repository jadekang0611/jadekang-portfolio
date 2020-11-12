import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from '@material-ui/core';
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
      width: 'auto',
      height: '320px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 'auto',
      height: '320px',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      width: 'auto',
      height: '320px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      height: '320px',
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
    borderRadius: '10px',
    height: 500,
  },
}));

const CustomCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.style} elevation={0}>
        <CardActionArea>
          <CardMedia className={classes.projectImg} image={props.image} />
        </CardActionArea>
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
