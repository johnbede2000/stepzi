import React from 'react';
import InitialGoal from './InitialGoal';
import HowWillYouKnow from './HowWillYouKnow';
import Rewrite from './Rewrite';
import TwoPos from './TwoPos';
import Elaborate from './Elaborate';
import WhatNext from './WhatNext';
import { LinearProgress } from '@material-ui/core';

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
    switch (step) {
      case 0:
        return (
          <InitialGoal
            handleChange={handleChange}
            values={values}
            step={step}
            setStep={setStep}
          />
        );
      case 1:
        return (
          <HowWillYouKnow
            handleChange={handleChange}
            values={values}
            step={step}
            setStep={setStep}
          />
        );
      case 2:
        return (
          <Rewrite
            handleChange={handleChange}
            values={values}
            step={step}
            setStep={setStep}
          />
        );
      case 3:
        return (
          <TwoPos
            handleChange={handleChange}
            values={values}
            step={step}
            setStep={setStep}
          />
        );
      case 4:
        return (
          <Elaborate
            handleChange={handleChange}
            values={values}
            step={step}
            setStep={setStep}
          />
        );
      case 5:
        return <WhatNext values={values} step={step} setStep={setStep} />;
      default:
        return <p>There has been an error</p>;
    }
  };

  const progressValue = () => {
    return (step / 5) * 100;
  };

  return (
    <>
      <h1>1. Get Specific</h1>
      <LinearProgress variant="determinate" value={progressValue()} />
      {renderSwitch(step)}
    </>
  );
};

export default ParentSpecific;
