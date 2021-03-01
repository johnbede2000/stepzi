import React from 'react';
import TextField from '@material-ui/core/TextField';

const InitialGoal = ({ values, handleChange }) => {
  return (
    <div>
      <p>Write down your goal:</p>
      <TextField
        id="goal"
        label="Goal"
        type="text"
        name="goal"
        value={values.goal}
        multiline="true"
        variant="filled"
        required="true"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default InitialGoal;
