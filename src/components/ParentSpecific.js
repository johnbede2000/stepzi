import React from 'react';
import InitialGoal from './InitialGoal';
import HowWillYouKnow from './HowWillYouKnow';
import Rewrite from './Rewrite';
import TwoPos from './TwoPos';
import Elaborate from './Elaborate';
import WhatNext from './WhatNext';

const ParentSpecific = () => {
  const [step, setStep] = React.useState(0);
  const [goal, setGoal] = React.useState('');
  const [howKnow, setHowKnow] = React.useState('');
  const [posOne, setPosOne] = React.useState('');
  const [posTwo, setPosTwo] = React.useState('');
  const [obOne, setObOne] = React.useState('');
  const [ObTwo, setObTwo] = React.useState('');
  const [elPosOne, setElPosOne] = React.useState('');
  const [elPosTwo, setElPosTwo] = React.useState('');
  const [elObOne, setelObOne] = React.useState('');
  const [elObTwo, setelObTwo] = React.useState('');

  const clickNext = () => {
    setStep(step + 1);
  };

  const clickPrev = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 0:
      return <InitialGoal next={clickNext} />;
    case 1:
      return <HowWillYouKnow next={clickNext} prev={clickPrev} />;
    case 2:
      return <Rewrite next={clickNext} prev={clickPrev} />;
    case 3:
      return <TwoPos next={clickNext} prev={clickPrev} />;
    case 4:
      return <Elaborate next={clickNext} prev={clickPrev} />;
    case 5:
      return <WhatNext next={clickNext} prev={clickPrev} />;
    default:
      return <p>There has been an error</p>;
  }
};

export default ParentSpecific;
