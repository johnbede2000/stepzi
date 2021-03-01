import React from 'react';
import { Button } from '@material-ui/core';

const NextButton = ({ field, setErr, step, setStep }) => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (field === '') {
            setErr(true);
            setTimeout(() => {
              setErr(false);
            }, 2000);
          } else {
            setStep(step + 1);
          }
        }}
      >
        Next
      </Button>
    </>
  );
};

const PrevButton = ({ step, setStep }) => {
  return (
    <Button variant="contained" onClick={() => setStep(step - 1)}>
      Back
    </Button>
  );
};

export { PrevButton, NextButton };
