import React from 'react';
import { Typography, TextField, Box } from '@material-ui/core';
import { NextButton } from './Buttons';

const InitialGoal = ({ values, handleChange, setStep, step }) => {
  const [err, setErr] = React.useState(false);
  return (
    <>
      <Typography variant="body">Write down your goal:</Typography>
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
      {err && (
        <Typography color="error" variant="caption">
          Empty
        </Typography>
      )}
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <NextButton
          field={values.goal} // is there shorthand for these?
          step={step}
          setStep={setStep}
          setErr={setErr}
        />
      </Box>
    </>
  );
};

export default InitialGoal;
