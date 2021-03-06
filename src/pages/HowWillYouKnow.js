import React from 'react';
import {
  TextField,
  Box,
  Button,
  Typography,
  Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Vertical from '../components/Vertical';
import custom from '../customStyle';
import Mycard from '../components/Mycard';
import Info from '../components/Info';

const HowWillYouKnow = ({ values, handleChange, setStep, step }) => {
  const [snackbar, setSnackbar] = React.useState(!values.goal);

  return (
    <Vertical>
      <Snackbar
        open={snackbar}
        onClose={() => setSnackbar(false)}
        autoHideDuration="4000"
      >
        <Alert severity="error">Example goal being used</Alert>
      </Snackbar>
      <Mycard>
        <Typography variant="h4">Get Specific</Typography>
        <Typography variant="body1">
          Make your goal as specific as possible. Get a clear idea about what
          success will look like. State exactly what you want to achieve: be
          concrete. Make it measurable/quantifiable.
        </Typography>
        <Info text="Doing so keeps you motivated until you get there; and removes the possibility of settling for less; and makes the course of action you need to take much clearer."></Info>
      </Mycard>
      <Mycard>
        <Typography variant="body1">Your goal:</Typography>
        {values.goal ? (
          <Typography style={custom().cursive} variant="body1">
            {values.goal}
          </Typography>
        ) : (
          <Typography style={custom().example} variant="body1">
            learn conditional rendering
          </Typography>
        )}
        <Typography variant="body1">
          How will you know when you’ve succeeded? Describe the moment when you{' '}
          <Box component="span" style={{ fontStyle: 'italic' }}>
            know
          </Box>{' '}
          you will have reached your goal:
        </Typography>
        <TextField
          id="moment"
          label="The Moment"
          type="text"
          name="moment"
          fullWidth={true}
          value={values.moment}
          multiline={true}
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
      </Mycard>

      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Button variant="contained" onClick={() => setStep(step - 1)}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setStep(step + 1)}
        >
          Next
        </Button>
      </Box>
    </Vertical>
  );
};

export default HowWillYouKnow;
