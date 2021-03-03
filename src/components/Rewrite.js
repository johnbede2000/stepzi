import React from 'react';
import {
  Card,
  Box,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from '@material-ui/core';
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
      {err && (
        <Typography color="error" variant="caption">
          Empty
        </Typography>
      )}
      <Box
        mt={2}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <PrevButton step={step} setStep={setStep}></PrevButton>
        <NextButton
          field={values.rewrite} // is there shorthand for these?
          step={step}
          setStep={setStep}
          setErr={setErr}
        />
      </Box>
    </>
  );
};

export default Rewrite;
