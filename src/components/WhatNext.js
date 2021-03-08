import React from 'react';
import Vertical from './Vertical';
import Mycard from './Mycard';
import { Typography, Box, Button, Snackbar, Fab } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';
import Item from './Item';

const WhatNext = ({ values, handleChange, step, setStep }) => {
  const [snackbar, Setsnackbar] = React.useState(false);

  const checkValues = () => {
    if (values.actions.length < 1) {
      Setsnackbar(true);
    } else {
      setStep(step + 1);
    }
  };
  return (
    <Vertical>
      <Mycard>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1">
            What do you need to do next? Add as many items as come to mind.
          </Typography>
          <Box flexShrink="0" ml={2}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Box>
        </Box>
      </Mycard>
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        {values.actions.map((item) => {
          return <Item text={item} />;
        })}
      </Box>

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
      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => Setsnackbar(false)}
      >
        <Alert onClose={() => Setsnackbar(false)} severity="error">
          Please add at least one action!
        </Alert>
      </Snackbar>
    </Vertical>
  );
};

export default WhatNext;
