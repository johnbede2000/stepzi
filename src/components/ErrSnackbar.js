import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

const ErrSnackbar = ({ snackbar, setSnackbar }) => {
  return (
    <Snackbar
      open={snackbar}
      autoHideDuration={3000}
      onClose={() => setSnackbar(false)}
    >
      <Alert onClose={() => setSnackbar(false)} severity="error">
        Please complete all fields!
      </Alert>
    </Snackbar>
  );
};

export default ErrSnackbar;
