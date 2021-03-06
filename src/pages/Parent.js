import React from 'react';
import InitialGoal from './InitialGoal';
import HowWillYouKnow from './HowWillYouKnow';
import TwoPos from './Contrasting';
import WhatNext from './WhatNext';
import { LinearProgress } from '@material-ui/core';
import Vertical from '../components/Vertical';
import Ifthen from './Ifthen';
import End from './End';
import Rewrite from './Rewrite';

const ParentSpecific = () => {
  const [step, setStep] = React.useState(1);
  const [values, setValues] = React.useState({
    // split these into separate and only pass to specific page needed?
    goal: '',
    moment: '',
    rewrite: '',
    constrastOne: '',
    contrastTwo: '',
    contrastThree: '',
    contrastFour: '',
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

  const progressValue = (tot) => {
    return (step / tot) * 100;
  };

  return (
    <Vertical>
      <LinearProgress variant="determinate" value={progressValue(7)} />
      {renderSwitch(step)}
    </Vertical>
  );
};

export default ParentSpecific;
