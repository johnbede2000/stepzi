import React from 'react';
import {
  Card,
  Box,
  CardContent,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
import { PrevButton, NextButton } from './Buttons';
import { makeStyles } from '@material-ui/core/styles';
import Error from './Error';
import Vertical from './Vertical';

const useStyles = makeStyles((theme) => ({
  cursive: {
    fontFamily: 'Caveat, cursive',
    fontSize: '2em',
    color: '#002884',
  },
}));

const Rewrite = ({ values, handleChange, step, setStep }) => {
  const [err, setErr] = React.useState(false);
  const classes = useStyles();
  return (
    <Vertical>
      <Card>
        <CardContent>
          <Typography variant="body1">Your goal:</Typography>
          <Typography variant="body1" className={classes.cursive}>
            {values.goal}
          </Typography>
          <Divider style={{ margin: '1em 0' }} />
          <Typography variant="body1">
            The moment you'll know you've reached your goal:
          </Typography>
          <Typography
            variant="body1"
            component="span"
            className={classes.cursive}
          >
            {values.moment}
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="body1">
        Now rewrite the goal using the information:
      </Typography>
      <Box>
        <TextField
          id="rewrite"
          label="My improved goal"
          type="text"
          error={err}
          fullWidth="true"
          name="rewrite"
          value={values.rewrite}
          multiline="true"
          variant="filled"
          onChange={(e) => handleChange(e)}
        />
        <Error err={err} />
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <PrevButton step={step} setStep={setStep}></PrevButton>
        <NextButton
          field={values.rewrite} // is there shorthand for these?
          step={step}
          setStep={setStep}
          setErr={setErr}
        />
      </Box>
    </Vertical>
  );
};

export default Rewrite;
