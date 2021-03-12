import React from 'react';
import Vertical from '../components/Vertical';
import { Typography, Box, Button, TextField } from '@material-ui/core';
import custom from '../customStyle';
import Mycard from '../components/Mycard';
import Info from '../components/Info';

const TwoPos = ({ values, handleChange, step, setStep }) => {
  return (
    <Vertical>
      <Mycard>
        <Typography variant="h4">Mental Contrasting</Typography>
        <Typography variant="body1">
          Now it's time to go back and forth, thinking about the success you
          want to achieve, and the obstacles that stand in your way.
        </Typography>
        <Typography variant="body1">
          First imagine how you will feel attaining your goal. Picture it as
          vividly as you can in your mind, really think about the details. Next,
          think &amp; get specific about the obstacles that stand in your way of
          getting what you want.
        </Typography>

        <Info text="This should kick your brain into gear for the next page, bringing attention & clarity to what you will need to do to make the goal happen." />
      </Mycard>
      <Mycard>
        <Typography variant="body1">Your goal:</Typography>
        <Typography variant="body1" style={custom().cursive}>
          {values.rewrite}
        </Typography>
        <Typography variant="body1">
          Think about two positive aspects of reaching the goal, and two
          obstacles that lie in the way.
        </Typography>
        <Box>
          <TextField
            id="posOne"
            label="Positive aspect 1"
            type="text"
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
            id="obOne"
            label="Obstacle 1"
            type="text"
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
            id="posTwo"
            label="Positive aspect 2"
            type="text"
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
            id="obTwo"
            label="Obstacle 2"
            type="text"
            fullWidth={true}
            name="obTwo"
            value={values.obTwo}
            multiline={true}
            variant="outlined"
            onChange={(e) => handleChange(e)}
          />
        </Box>
      </Mycard>
      <Mycard>
        <Typography variant="body1">
          Beginning with the first positive aspect, write a few sentences about
          what it will be like to experience it:
        </Typography>
      </Mycard>
      <Mycard>
        <Typography variant="body1">
          Write a few sentences about the first obstacle, and why it's a
          problem:
        </Typography>
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

export default TwoPos;
