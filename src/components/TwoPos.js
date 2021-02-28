import React from 'react';
import Button from '@material-ui/core/Button';

const TwoPos = ({ prev, next }) => {
  return (
    <>
      <p>Fourth page!</p>
      <Button variant="contained" onClick={prev}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={next}>
        Next
      </Button>
    </>
  );
};

export default TwoPos;
