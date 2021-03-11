import { Typography, Box, Button } from '@material-ui/core';
import React from 'react';
import Mycard from '../components/Mycard';
import Vertical from '../components/Vertical';

const Ifthen = ({ setStep, step }) => {
  const checkValues = () => {
    setStep(step + 1);
  };

  return (
    <Vertical>
      <Mycard>
        <Typography variant="body1">
          Decide when and where you will take each action you want to take, in
          advance.
        </Typography>
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

export default Ifthen;
