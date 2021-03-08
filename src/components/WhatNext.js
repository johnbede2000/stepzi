import React from 'react';
import Vertical from './Vertical';
import MyCard from './Mycard';
import { Typography, Box, Button, Snackbar, Fab } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';

const WhatNext = ({ values, handleChange, step, setStep }) => {
  const [snackbar, Setsnackbar] = React.useState(false);

  const checkValues = () => {
    if (values.actions.length < 1) {
      Setsnackbar(true);
    } else {
      setStep(step + 1);
    }
  };
  return (
    <Vertical>
      <MyCard>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="body1">What do you need to do next?</Typography>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
      </MyCard>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Button variant="contained" onClick={() => setStep(step - 1)}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => checkValues()}
        >
          Next
        </Button>
      </Box>
      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => Setsnackbar(false)}
      >
        <Alert onClose={() => Setsnackbar(false)} severity="error">
          Please add at least one action!
        </Alert>
      </Snackbar>
    </Vertical>
  );
};

export default WhatNext;
