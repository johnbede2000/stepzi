import React from 'react';
import { Card, CardContent, CardHeader, TextField } from '@material-ui/core';

const Rewrite = ({ values, handleChange }) => {
  return (
    <>
      <Card>
        <CardHeader title="Your goal"></CardHeader>
        <CardContent>{values.goal}</CardContent>
      </Card>

      <Card>
        <CardHeader title="The moment"></CardHeader>
        <CardContent>
          The moment you'll know you've reached your goal: {values.moment}
        </CardContent>
      </Card>
      <p>Now rewrite the goal using the information:</p>
      <TextField
        id="rewrite"
        label="My improved goal"
        type="text"
        name="rewrite"
        value={values.rewrite}
        multiline="true"
        variant="filled"
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default Rewrite;
