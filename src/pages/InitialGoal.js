import React from 'react';
import { Typography, TextField, Box, Button } from '@material-ui/core';
import Vertical from '../components/Vertical';
import Mycard from '../components/Mycard';
import Info from '../components/Info';

const InitialGoal = ({ values, handleChange, setStep, step }) => {
  return (
    <Vertical>
      <Mycard>
        <Typography variant="h4">Introduction</Typography>
        <Typography variant="body1">
          Stepzi is a web app to help you choose and take the next action on a
          goal. It will guide you through best practices according to decades of
          research by scientific pysochologists who study motivation.
        </Typography>
      </Mycard>
      <Mycard>
        <Typography variant="body1">
          Choose a goal that's about getting better (developing ability, and
          learning to master a new skill), rather than being good (proving you
          have a lot of ability and already know what you're doing).
        </Typography>
        <Info text="This will help you take difficulty in stride, and enjoy the journey." />
        <Typography variant="body1">
          Choose a goal that focuses on what you will do, not what you won't do;
          if you want to stop something, then choose a goal that answers what
          you'll do instead.
        </Typography>
      </Mycard>
      <Mycard>
        <Typography variant="body1">Write down your goal:</Typography>
        <Box>
          <TextField
            id="goal"
            label="My Goal"
            type="text"
            fullWidth={true}
            name="goal"
            value={values.goal}
            multiline={true}
            variant="outlined"
            onChange={(e) => handleChange(e)}
          />
        </Box>
      </Mycard>
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          // onClick={() => {
          //   if (!values.goal) {
          //     setValidate(true);
          //     setSnackbar(true);
          //     setTimeout(() => {
          //       setValidate(false);
          //     }, 3000);
          //   } else {
          //     setStep(step + 1);
          //   }
          // }}
          onClick={() => setStep(step + 1)}
        >
          Next
        </Button>
      </Box>
    </Vertical>
  );
};

export default InitialGoal;
