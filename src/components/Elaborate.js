import React from 'react';
import Vertical from './Vertical';
import Mycard from './Mycard';
import { Typography, Box, Button } from '@material-ui/core';

const Elaborate = ({ values, handleChange, step, setStep }) => {
  const checkValues = () => {
    setStep(step + 1);
  };

  return (
    <Vertical>
      <Mycard>
        <Typography variant="body1">Complete this page</Typography>
      </Mycard>
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
    </Vertical>
  );
};

export default Elaborate;
