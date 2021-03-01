import React from 'react';
import { Typography, TextField } from '@material-ui/core';
import { NextButton } from './Buttons';

const InitialGoal = ({ values, handleChange, setStep, step }) => {
  const [err, setErr] = React.useState(false);
  return (
    <>
      <div>
        <p>Write down your goal:</p>
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
      </div>
      <div>
        <NextButton
          field={values.goal} // is there shorthand for these?
          step={step}
          setStep={setStep}
          setErr={setErr}
        />
      </div>
    </>
  );
};

export default InitialGoal;
