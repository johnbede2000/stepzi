import React from 'react';
import { Card, CardContent, CardHeader, TextField } from '@material-ui/core';
import { PrevButton, NextButton } from './Buttons';

const Rewrite = ({ values, handleChange, step, setStep }) => {
  const [err, setErr] = React.useState(false);
  return (
    <>
      <Card>
        <CardHeader title="Your goal"></CardHeader>
        <CardContent>{values.goal}</CardContent>
      </Card>

      <Card>
        <CardHeader title="The moment"></CardHeader>
        <CardContent>
          The moment you'll know you've reached your goal: {values.moment}
        </CardContent>
      </Card>
      <p>Now rewrite the goal using the information:</p>
      <TextField
        id="rewrite"
        label="My improved goal"
        type="text"
        error={err}
        name="rewrite"
        value={values.rewrite}
        multiline="true"
        variant="filled"
        onChange={(e) => handleChange(e)}
      />
      <div>
        <PrevButton step={step} setStep={setStep}></PrevButton>
        <NextButton
          field={values.rewrite} // is there shorthand for these?
          step={step}
          setStep={setStep}
          err={err}
          setErr={setErr}
        />
      </div>
    </>
  );
};

export default Rewrite;
