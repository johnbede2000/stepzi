import React from 'react';

const HowWillYouKnow = ({ values }) => {
  console.log(values);
  return (
    <>
      <p>Second page!</p>
      <p>{values.goal}</p>
    </>
  );
};

export default HowWillYouKnow;
