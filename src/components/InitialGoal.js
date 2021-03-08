import React from 'react';
import {
  Typography,
  TextField,
  Box,
  Button,
  Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Vertical from './Vertical';

const InitialGoal = ({ values, handleChange, setStep, step }) => {
  const [validate, setValidate] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState(false);

  const onClose = () => {
    setSnackbar(false);
  };

  return (
    <Vertical>
      <Typography variant="body1">Write down your goal:</Typography>
      <Box>
        <TextField
          id="goal"
          label="My Goal"
          type="text"
          error={validate}
          fullWidth={true}
          name="goal"
          value={values.goal}
          multiline={true}
          variant="outlined"
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
      <Snackbar open={snackbar} autoHideDuration={3000} onClose={onClose}>
        <Alert onClose={onClose} severity="error">
          Please complete all fields!
        </Alert>
      </Snackbar>
    </Vertical>
  );
};

export default InitialGoal;
