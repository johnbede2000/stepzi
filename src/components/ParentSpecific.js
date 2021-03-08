import React from 'react';
import InitialGoal from './InitialGoal';
import HowWillYouKnow from './HowWillYouKnow';
import Rewrite from './Rewrite';
import TwoPos from './TwoPos';
import Elaborate from './Elaborate';
import WhatNext from './WhatNext';
import { LinearProgress, Typography } from '@material-ui/core';
import Vertical from './Vertical';
import Mycard from './Mycard';

const ParentSpecific = () => {
  const [step, setStep] = React.useState(1);
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
    actions: ['development dummy', 'development dummy two', 'dev dummy three'],
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
      case 2:
        return <HowWillYouKnow {...reusedProps} />;
      case 3:
        return <Rewrite {...reusedProps} />;
      case 4:
        return <TwoPos {...reusedProps} />;
      case 5:
        return <Elaborate {...reusedProps} />;
      case 6:
        return <WhatNext {...reusedProps} />;
    }
  };

  const renderTitle = (step) => {
    if (step < 4) {
      return '1. Get Specific';
    } else if (step > 3 && step < 6) {
      return '2. Mental Contrasting';
    } else if (step > 5) {
      return '3. If-Then Planning';
    }
  };

  const progressValue = (tot) => {
    return (step / tot) * 100;
  };

  return (
    <Vertical>
      <LinearProgress variant="determinate" value={progressValue(6)} />
      <Mycard>
        <Typography variant="h4">{renderTitle(step)}</Typography>
      </Mycard>
      {renderSwitch(step)}
    </Vertical>
  );
};

export default ParentSpecific;
