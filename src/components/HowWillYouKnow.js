import React from 'react';
import {
  Card,
  CardHeader,
  TextField,
  Box,
  CardContent,
  Typography,
} from '@material-ui/core';
import { PrevButton, NextButton } from './Buttons';

const HowWillYouKnow = ({ values, handleChange, setStep, step }) => {
  const [err, setErr] = React.useState(false);
  return (
    <>
      <Card>
        <CardHeader title="Your goal" />
        <CardContent>{values.goal}</CardContent>
      </Card>
      <Typography>
        Get a clear idea about what success will look like. How will you know
        when you’ve succeeded?
        <Box fontWeight="fontWeightBold">
          Describe the moment when you know you will have reached your goal:
        </Box>
      </Typography>
      <TextField
        id="moment"
        label="The Moment"
        type="text"
        name="moment"
        error={err}
        value={values.moment}
        multiline="true"
        variant="filled"
        onChange={(e) => handleChange(e)}
      />
      {err && (
        <Typography color="error" variant="caption">
          Empty
        </Typography>
      )}
      <div>
        <PrevButton step={step} setStep={setStep}></PrevButton>
        <NextButton
          field={values.moment} // is there shorthand for these?
          step={step}
          setStep={setStep}
          setErr={setErr}
        />
      </div>
    </>
  );
};

export default HowWillYouKnow;
