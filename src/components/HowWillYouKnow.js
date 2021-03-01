import React from 'react';
import TextField from '@material-ui/core/TextField';

const HowWillYouKnow = ({ values, handleChange }) => {
  console.log(values);
  return (
    <>
      <p>Your goal: {values.goal}</p>
      <p>
        How will you know I know when you’ve succeeded? Describe the moment when
        you know you will have reached your goal:
      </p>
      <TextField
        id="rewrite"
        label="Goal"
        type="text"
        name="moment"
        value={values.moment}
        multiline="true"
        variant="filled"
        required="true"
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default HowWillYouKnow;
