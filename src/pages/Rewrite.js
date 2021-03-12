import React from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import custom from '../customStyle';
import Vertical from '../components/Vertical';
import Mycard from '../components/Mycard';

const Rewrite = ({ values, handleChange, step, setStep }) => {
  return (
    <Vertical>
      <Mycard>
        <Typography variant="h4">Get Specific</Typography>
      </Mycard>
      <Mycard>
        <Typography variant="body1">Your goal:</Typography>
        {values.goal ? (
          <Typography variant="body1" style={custom().cursive}>
            {values.goal}
          </Typography>
        ) : (
          <Typography variant="body1" style={custom().example}>
            learn conditional rendering
          </Typography>
        )}
        <Typography variant="body1">
          The moment you'll know you've reached your goal:
        </Typography>
        {values.moment ? (
          <Typography variant="body1" style={custom().cursive}>
            {values.moment}
          </Typography>
        ) : (
          <Typography variant="body1" style={custom().example}>
            I open up a web app I've built including at least one example of
            conditional rendering
          </Typography>
        )}
      </Mycard>
      <Mycard>
        <Typography variant="body1">
          Now rewrite the goal using the information:
        </Typography>
        <Box>
          <TextField
            id="rewrite"
            label="My improved goal"
            type="text"
            fullWidth={true}
            name="rewrite"
            value={values.rewrite}
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
          onClick={() => setStep(step + 1)}
        >
          Next
        </Button>
      </Box>
    </Vertical>
  );
};

export default Rewrite;
