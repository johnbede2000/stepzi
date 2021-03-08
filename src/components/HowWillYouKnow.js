import React from 'react';
import { TextField, Box, Button, Typography } from '@material-ui/core';
import Vertical from './Vertical';
import custom from '../customStyle';
import ErrSnackbar from './ErrSnackbar';

const HowWillYouKnow = ({ values, handleChange, setStep, step }) => {
  const [validate, setValidate] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState(false);

  return (
    <Vertical>
      <Typography variant="body1">Your goal:</Typography>
      <Typography style={custom().cursive} variant="body1">
        {values.goal}
      </Typography>

      <Typography variant="body1">
        Get a clear idea about what success will look like. How will you know
        when you’ve succeeded?
      </Typography>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        Describe the moment when you know you will have reached your goal:
      </Typography>
      <Box>
        <TextField
          id="moment"
          label="The Moment"
          type="text"
          name="moment"
          fullWidth={true}
          error={validate}
          value={values.moment}
          multiline={true}
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Button variant="contained" onClick={() => setStep(step - 1)}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (!values.moment) {
              setValidate(true);
              setSnackbar(true);
              setTimeout(() => {
                setValidate(false);
              }, 3000);
            } else {
              setStep(step + 1);
            }
          }}
        >
          Next
        </Button>
      </Box>
      <ErrSnackbar snackbar={snackbar} setSnackbar={setSnackbar} />
    </Vertical>
  );
};

export default HowWillYouKnow;
