import React from 'react';
import {
  Card,
  TextField,
  CardContent,
  Box,
  Typography,
} from '@material-ui/core';
import { PrevButton, NextButton } from './Buttons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cursive: {
    fontFamily: 'Caveat, cursive',
    fontSize: '2em',
  },
}));

const HowWillYouKnow = ({ values, handleChange, setStep, step }) => {
  const [err, setErr] = React.useState(false);
  const classes = useStyles();
  return (
    <>
      <Card>
        <CardContent>
          Your goal:{' '}
          <Box component="span" className={classes.cursive}>
            {values.goal}
          </Box>
        </CardContent>
      </Card>
      <Typography>
        Get a clear idea about what success will look like. How will you know
        when you’ve succeeded?
        <Box>
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
      <Box
        mt={2}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <PrevButton step={step} setStep={setStep}></PrevButton>
        <NextButton
          field={values.moment} // is there shorthand for these?
          step={step}
          setStep={setStep}
          setErr={setErr}
        />
      </Box>
    </>
  );
};

export default HowWillYouKnow;
