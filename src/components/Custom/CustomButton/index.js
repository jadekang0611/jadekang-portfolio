import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  style: {
    background: theme.palette.secondary.main,
    color: theme.palette.white,
    font: theme.typography.button,
    textTransform: 'capitalize',
    boxShadow: '0px 16px 24px rgba(8, 35, 48, 0.16)',
    borderRadius: '30px',
    '&:hover': {
      background: theme.palette.secondary.main,
    },
    padding: '10px 20px',
  },
}));

const CustomButton = () => {
  const classes = useStyles();
  return <Button className={classes.style}>Interview Me</Button>;
};

export default CustomButton;
