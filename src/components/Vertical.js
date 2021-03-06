import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  vertical: {
    '& > *+*': {
      marginTop: theme.spacing(2.5),
    },
  },
}));

const Vertical = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.vertical}>{children}</Box>;
};

export default Vertical;
