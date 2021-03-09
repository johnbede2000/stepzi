import React from 'react';
import Vertical from '../components/Vertical';
import Mycard from '../components/Mycard';
import { Typography, Box, Button } from '@material-ui/core';

const Elaborate = ({ values, handleChange, step, setStep }) => {
  const checkValues = () => {
    setStep(step + 1);
  };

  return (
    <Vertical>
      <Mycard>
        <Typography variant="body1">
          Picture it as vividly as you can in your mind, really think about the
          details, what it will be like to experience it.
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

export default Elaborate;
