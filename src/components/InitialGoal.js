import React from 'react';
import TextField from '@material-ui/core/TextField';
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
      </div>
      <div>
        <NextButton
          field={values.goal} // is there shorthand for these?
          step={step}
          setStep={setStep}
          err={err}
          setErr={setErr}
        />
      </div>
    </>
  );
};

export default InitialGoal;
