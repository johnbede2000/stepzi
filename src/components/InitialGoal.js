import React from 'react';
import Button from '@material-ui/core/Button';

const InitialGoal = ({ next }) => {
  return (
    <div>
      <p>first page</p>
      <Button variant="contained" color="primary" onClick={next}>
        Next
      </Button>
    </div>
  );
};

export default InitialGoal;
