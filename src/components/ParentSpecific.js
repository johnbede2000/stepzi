import React from 'react';
import InitialGoal from './InitialGoal';
import HowWillYouKnow from './HowWillYouKnow';
import Rewrite from './Rewrite';
import TwoPos from './TwoPos';
import Elaborate from './Elaborate';
import WhatNext from './WhatNext';
import Button from '@material-ui/core/Button';

const ParentSpecific = () => {
  const [step, setStep] = React.useState(0);
  const [input, setInput] = React.useState({
    goal: '',
    HowWillYouKnow: '',
    posOne: '',
    posTwo: '',
    obOne: '',
    obTwo: '',
    elPosOne: '',
    elPosTwo: '',
    elObOne: '',
    elObTwo: '',
  });

  const PrevButton = (step) => {
    if (step > 0) {
      return (
        <Button variant="contained" onClick={() => setStep(step - 1)}>
          Back
        </Button>
      );
    }
  };

  handleChange = (input) => (e) => {
    setInput({ [input]: e.target.value });
  };

  const NextButton = (step) => {
    if (step < 5) {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setStep(step + 1)}
        >
          Next
        </Button>
      );
    }
  };

  const renderSwitch = (step) => {
    switch (step) {
      case 0:
        return <InitialGoal />;
      case 1:
        return <HowWillYouKnow />;
      case 2:
        return <Rewrite />;
      case 3:
        return <TwoPos />;
      case 4:
        return <Elaborate />;
      case 5:
        return <WhatNext />;
      default:
        return <p>There has been an error</p>;
    }
  };
  return (
    <>
      <h1>Get Specific</h1>
      {renderSwitch(step)}
      {PrevButton(step)}
      {NextButton(step)}
    </>
  );
};

export default ParentSpecific;
