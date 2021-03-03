import React from 'react';
import { Typography, TextField, Box } from '@material-ui/core';
import { NextButton } from './Buttons';
import Vertical from './Vertical';
import Error from './Error';

const InitialGoal = ({ values, handleChange, setStep, step }) => {
  const [err, setErr] = React.useState(false);
  return (
    <Vertical>
      <Typography variant="body1">Write down your goal:</Typography>
      <Box>
        <TextField
          id="goal"
          label="My Goal"
          type="text"
          error={err}
          name="goal"
          value={values.goal}
          multiline="true"
          variant="filled"
          onChange={(e) => handleChange(e)}
        />
        <Error err={err} />
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <NextButton
          field={values.goal} // is there shorthand for these?
          step={step}
          setStep={setStep}
          setErr={setErr}
        />
      </Box>
    </Vertical>
  );
};

export default InitialGoal;
