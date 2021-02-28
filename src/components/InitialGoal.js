import React from 'react';
import TextField from '@material-ui/core/TextField';

const InitialGoal = () => {
  return (
    <div>
      <p>Write down your goal:</p>
      <TextField
        id="goal"
        label="Goal"
        type="text"
        multiline="true"
        variant="filled"
        required="true"
      />
    </div>
  );
};

export default InitialGoal;
