import React from 'react';
import InitialGoal from './InitialGoal';
import HowWillYouKnow from './HowWillYouKnow';
import Rewrite from './Rewrite';
import TwoPos from './TwoPos';
import Elaborate from './Elaborate';
import WhatNext from './WhatNext';

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

  return (
    <>
      <h1>Get Specific</h1>
      {renderSwitch(step)}
    </>
  );
};

export default ParentSpecific;

/*
parent holds state for step, values
each page affects value by receiving handleChange which invokes setValue - which checks current step
each page has a next button which checks a specific field and if it's empty will highlight it for a second. It can select that field by receiving which field to receive as a prop? Then if not empty then can invoke setStep - which it needs to receive too
*/
