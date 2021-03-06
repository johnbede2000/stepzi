import React from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import custom from '../customStyle';
import Vertical from './Vertical';

const Rewrite = ({ values, handleChange, step, setStep }) => {
  const [validate, setValidate] = React.useState(false);
  return (
    <Vertical>
      <Typography variant="body1">Your goal:</Typography>
      <Typography variant="body1" style={custom.cursive}>
        {values.goal}
      </Typography>
      <Typography variant="body1">
        The moment you'll know you've reached your goal:
      </Typography>
      <Typography variant="body1" style={custom.cursive}>
        {values.moment}
      </Typography>

      <Typography variant="body1">
        Now rewrite the goal using the information:
      </Typography>
      <Box>
        <TextField
          id="rewrite"
          label="My improved goal"
          type="text"
          error={validate}
          fullWidth={true}
          name="rewrite"
          value={values.rewrite}
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
            if (!values.rewrite) {
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

export default Rewrite;
