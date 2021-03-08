import React from 'react';
import Vertical from './Vertical';
import { Typography, Box, Button, TextField } from '@material-ui/core';
import custom from '../customStyle';
import ErrSnackbar from './ErrSnackbar';
import Mycard from './Mycard';

const TwoPos = ({ values, handleChange, step, setStep }) => {
  const [validate, setValidate] = React.useState({
    posOne: false,
    posTwo: false,
    obOne: false,
    obTwo: false,
  });

  const [snackbar, setSnackbar] = React.useState(false);

  const checkValues = () => {
    if (!values.posOne) {
      setValidate({ ...validate, posOne: true });
      setSnackbar(true);
      setTimeout(() => {
        setValidate({ ...validate, posOne: false });
      }, 3000);
    } else if (!values.posTwo) {
      setValidate({ ...validate, posTwo: true });
      setSnackbar(true);
      setTimeout(() => {
        setValidate({ ...validate, posTwo: false });
      }, 3000);
    } else if (!values.obOne) {
      setValidate({ ...validate, obOne: true });
      setSnackbar(true);
      setTimeout(() => {
        setValidate({ ...validate, obOne: false });
      }, 3000);
    } else if (!values.obTwo) {
      setValidate({ ...validate, obTwo: true });
      setSnackbar(true);
      setTimeout(() => {
        setValidate({ ...validate, obTwo: false });
      }, 3000);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <Vertical>
      <Mycard>
        <Typography variant="body1">Your goal:</Typography>
        <Typography variant="body1" style={custom().cursive}>
          {values.rewrite}
        </Typography>
      </Mycard>
      <Mycard>
        <Typography variant="body1">
          Think about two positive aspects of reaching the goal, and two
          obstacles that lie in the way.
        </Typography>
        <Box>
          <TextField
            id="posOne"
            label="Positive aspect 1"
            type="text"
            error={validate.posOne}
            fullWidth={true}
            name="posOne"
            value={values.posOne}
            multiline={true}
            variant="outlined"
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Box>
          <TextField
            id="posTwo"
            label="Positive aspect 2"
            type="text"
            error={validate.posTwo}
            fullWidth={true}
            name="posTwo"
            value={values.posTwo}
            multiline={true}
            variant="outlined"
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Box>
          <TextField
            id="obOne"
            label="Obstacle 1"
            type="text"
            error={validate.obOne}
            fullWidth={true}
            name="obOne"
            value={values.obOne}
            multiline={true}
            variant="outlined"
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Box>
          <TextField
            id="obTwo"
            label="Obstacle 2"
            type="text"
            error={validate.obTwo}
            fullWidth={true}
            name="obTwo"
            value={values.obTwo}
            multiline={true}
            variant="outlined"
            onChange={(e) => handleChange(e)}
          />
        </Box>
      </Mycard>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Button variant="contained" onClick={() => setStep(step - 1)}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => checkValues()}
        >
          Next
        </Button>
      </Box>
      <ErrSnackbar snackbar={snackbar} setSnackbar={setSnackbar} />
    </Vertical>
  );
};

export default TwoPos;
