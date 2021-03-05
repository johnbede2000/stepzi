import React from 'react';
import {
  Card,
  TextField,
  CardContent,
  Box,
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Vertical from './Vertical';

const useStyles = makeStyles((theme) => ({
  cursive: {
    fontFamily: 'Caveat, cursive',
    fontSize: '2em',
    color: '#002884',
  },
}));

const HowWillYouKnow = ({ values, handleChange, setStep, step }) => {
  const classes = useStyles();
  const [validate, setValidate] = React.useState(false);
  return (
    <Vertical>
      <Card>
        <CardContent>
          Your goal:{' '}
          <Box component="span" className={classes.cursive}>
            {values.goal}
          </Box>
        </CardContent>
      </Card>
      <Typography variant="body1">
        Get a clear idea about what success will look like. How will you know
        when you’ve succeeded?
      </Typography>
      <Typography variant="body1">
        Describe the moment when you know you will have reached your goal:
      </Typography>
      <Box>
        <TextField
          id="moment"
          label="The Moment"
          type="text"
          name="moment"
          fullWidth="true"
          error={validate}
          helperText="Required"
          value={values.moment}
          multiline="true"
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

export default HowWillYouKnow;
