import { Typography, Box, Button } from '@material-ui/core';
import React from 'react';
import Mycard from '../components/Mycard';
import Vertical from '../components/Vertical';

const Ifthen = ({ setStep, step, values }) => {
  const checkValues = () => {
    setStep(step + 1);
  };

  return (
    <Vertical>
      <Mycard>
        <Typography variant="h4">Planning</Typography>
      </Mycard>
      <Mycard>
        <Typography variant="body1">
          Decide when and where you will take each action you want to take, in
          advance.{' '}
          <Box component="span" style={{ fontStyle: 'italic' }}>
            If-then
          </Box>{' '}
          plans take the form: if <b>X</b> happens I will do <b>Y</b>. This
          could be a date and time, but doesn't need to be e.g. "If I haven't
          written the report before lunch, then I will make it the first thing I
          do when I return."
        </Typography>
      </Mycard>

      {values.actions.map((action) => {
        return (
          <Mycard>
            <Typography variant="body1">If: [textfield] then:</Typography>
            <Typography variant="body1">{action}</Typography>
          </Mycard>
        );
      })}

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
