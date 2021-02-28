import React from 'react';
import Button from '@material-ui/core/Button';

const HowWillYouKnow = ({ prev, next }) => {
  return (
    <>
      <p>Second page!</p>
      <Button variant="contained" onClick={prev}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={next}>
        Next
      </Button>
    </>
  );
};

export default HowWillYouKnow;
