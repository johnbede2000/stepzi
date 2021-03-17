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
          want to achieve, and the obstacles that stand in your way. First
          imagine how you will feel attaining your goal, picture it as vividly
          as you can in your mind.
        </Typography>
        <Typography variant="body1">
          Crucially, rather than stopping there, next think &amp; get specific
          about the obstacles that stand in your way of getting what you want.
        </Typography>

        <Info text="This should kick your brain into gear for the next page, bringing attention &amp; clarity to what you will need to do to make the goal happen." />
      </Mycard>
      <Mycard>
        <Typography variant="body1">Your goal:</Typography>
        {values.rewrite ? (
          <Typography variant="body1" style={custom().cursive}>
            {values.rewrite}
          </Typography>
        ) : (
          <Typography variant="body1" style={custom().example}>
            Build and deploy a web app with at least one working example of
            conditional rendering
          </Typography>
        )}
        <Typography variant="body1">
          Think about two positive aspects of reaching the goal (and optionally
          write a few sentences about what it will be like to experience it),
          and two obstacles that lie in the way (and optionally write a few
          sentences about why it's a problem).
        </Typography>
        <TextField
          id="contrastOne"
          label="Positive aspect 1"
          type="text"
          fullWidth={true}
          name="contrastOne"
          value={values.contrastOne}
          multiline={true}
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="contrastThree"
          label="Obstacle 1"
          type="text"
          fullWidth={true}
          name="contrastThree"
          value={values.contrastThree}
          multiline={true}
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="contrastTwo"
          label="Positive aspect 2"
          type="text"
          fullWidth={true}
          name="contrastTwo"
          value={values.contrastTwo}
          multiline={true}
          variant="outlined"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id="contrastFour"
          label="Obstacle 2"
          type="text"
          fullWidth={true}
          name="contrastFour"
          value={values.contrastFour}
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

export default TwoPos;
