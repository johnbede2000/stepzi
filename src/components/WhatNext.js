import React from 'react';
import Button from '@material-ui/core/Button';

const WhatNext = ({ prev, next }) => {
  return (
    <>
      <p>Sixth!</p>
      <Button variant="contained" onClick={prev}>
        Back
      </Button>
      {/*
      <Button variant="contained" color="primary" onClick={next}>
        Next
      </Button>
      */}
    </>
  );
};

export default WhatNext;
