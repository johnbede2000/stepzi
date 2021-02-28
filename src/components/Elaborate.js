import React from 'react';
import Button from '@material-ui/core/Button';

const Elaborate = ({ prev, next }) => {
  return (
    <>
      <p>Fifth page!</p>
      <Button variant="contained" onClick={prev}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={next}>
        Next
      </Button>
    </>
  );
};

export default Elaborate;
