import React from 'react';
import { Typography, TextField, Box, Button } from '@material-ui/core';
import Vertical from './Vertical';

const InitialGoal = ({ values, handleChange, setStep, step }) => {
  const [validate, setValidate] = React.useState(false);

  return (
    <Vertical>
      <Typography variant="body1">Write down your goal:</Typography>
      <Box>
        <TextField
          id="goal"
          label="My Goal"
          type="text"
          error={validate}
          helperText="Required"
          fullWidth={true}
          name="goal"
          value={values.goal}
          multiline={true}
          variant="filled"
          onChange={(e) => handleChange(e)}
        />
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (!values.goal) {
              setValidate(true);
              setTimeout(() => {
                setValidate(false);
              }, 2000);
            } else {
              setStep(step + 1);
            }
          }}
        >
          Next
        </Button>
      </Box>
    </Vertical>
  );
};

export default InitialGoal;
