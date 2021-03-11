import React from 'react';
import InitialGoal from './InitialGoal';
import HowWillYouKnow from './HowWillYouKnow';
import Rewrite from './Rewrite';
import TwoPos from './Contrasting';
import WhatNext from './WhatNext';
import { LinearProgress, Typography } from '@material-ui/core';
import Vertical from '../components/Vertical';
import Mycard from '../components/Mycard';
import Ifthen from './Ifthen';
import End from './End';

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
    actions: [],
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
        return <WhatNext {...reusedProps} setValues={setValues} />;
      case 6:
        return <Ifthen {...reusedProps} />;
      case 7:
        return <End {...reusedProps} />;
    }
  };

  const renderTitle = (step) => {
    if (step < 4) {
      return '1. Get Specific';
    } else if (step === 4) {
      return '2. Mental Contrasting';
    } else if (step > 4) {
      return '3. If-Then Planning';
    }
  };

  const progressValue = (tot) => {
    return (step / tot) * 100;
  };

  return (
    <Vertical>
      <LinearProgress variant="determinate" value={progressValue(7)} />
      <Mycard>
        <Typography variant="h4">{renderTitle(step)}</Typography>
      </Mycard>
      {renderSwitch(step)}
    </Vertical>
  );
};

export default ParentSpecific;
