import React from 'react';
import Vertical from './Vertical';
import Mycard from './Mycard';
import {
  Typography,
  Box,
  Button,
  Snackbar,
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  ListItemText,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

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
        <Typography variant="body1">
          What do you need to do next? Add as many items as come to mind.
        </Typography>
      </Mycard>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          style={{ borderRadius: '20px' }}
          startIcon={<AddIcon />}
        >
          Add a new task
        </Button>
      </Box>
      <Box bgcolor="#fff" border="1px solid #dadce0" borderRadius="8px">
        <List>
          {values.actions.map((item) => {
            return (
              <>
                <ListItem>
                  <ListItemText>{item}</ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </>
            );
          })}
        </List>
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
