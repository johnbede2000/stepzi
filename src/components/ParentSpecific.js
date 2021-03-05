import React from 'react';
import InitialGoal from './InitialGoal';
import HowWillYouKnow from './HowWillYouKnow';
import Rewrite from './Rewrite';
import TwoPos from './TwoPos';
import Elaborate from './Elaborate';
import WhatNext from './WhatNext';
import { LinearProgress, Box } from '@material-ui/core';

const ParentSpecific = () => {
  const [step, setStep] = React.useState(0);
  const [values, setValues] = React.useState({
    goal: '',
    moment: '',
    rewrite: '',
    posOne: '',
    posTwo: '',
    obOne: '',
    obTwo: '',
    elPosOne: '',
    elPosTwo: '',
    elObOne: '',
    elObTwo: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const renderSwitch = (step) => {
    const reusedProps = {
      handleChange,
      values,
      step,
      setStep,
    };

    switch (step) {
      default:
        return <InitialGoal {...reusedProps} />;
      case 1:
        return <HowWillYouKnow {...reusedProps} />;
      case 2:
        return <Rewrite {...reusedProps} />;
      case 3:
        return <TwoPos {...reusedProps} />;
      case 4:
        return <Elaborate {...reusedProps} />;
      case 5:
        return <WhatNext {...reusedProps} />;
    }
  };

  const progressValue = () => {
    return (step / 5) * 100 + 20;
  };

  return (
    <Box pb={2}>
      <h1>1. Get Specific</h1>
      <LinearProgress variant="determinate" value={progressValue()} />
      {renderSwitch(step)}
    </Box>
  );
};

export default ParentSpecific;
