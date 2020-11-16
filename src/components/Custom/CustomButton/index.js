import React, { useState } from 'react';
import { Button, Dialog } from '@material-ui/core';
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
  calendly: {
    '@media (min-width: 0px) and (max-width:400px)': {
      width: '60%',
    },
  },
}));

const Calendly = (props) => {
  const classes = useStyles();
  const { onClose, open } = props;
  return (
    <Dialog onClose={onClose} open={open}>
      <div style={{ width: '500px', height: '500px' }}>
        <iframe
          title="calendly"
          src="https://calendly.com/j-dandyloper"
          width="100%"
          height="100%"
          frameborder="0"
          className={classes.calendly}
        ></iframe>
      </div>
    </Dialog>
  );
};

const CustomButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <>
      <Button className={classes.style} onClick={handleClickOpen}>
        Interview Me
      </Button>
      <Calendly open={open} onClose={handleClose} />
    </>
  );
};

export default CustomButton;
