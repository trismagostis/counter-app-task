import React from "react";
import "./Counter.css";
import Step from "./Step";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";
import Clock from "./Clock";
import { useState } from "react";

function Counter(props) {
  const [counterValue, setCounterValue] = useState(props.initValue);
  const [showClock, setShowClock] = useState(true);
  const [stepValue, setStepValue] = useState(1);


  const changeValue = (action) => {
    let currentCounterValue = counterValue;

    if (action === "add") {
      currentCounterValue += parseInt(stepValue);
    } else if (action === "reinit") {
      currentCounterValue = props.initValue;
    } else {
      currentCounterValue = 0;
      setStepValue(1);
    }
    setCounterValue(currentCounterValue);
  };

  const changeStep = (currentstepValue) => {
    setStepValue(currentstepValue);
  };

  const toggleClock = () => {
    setShowClock((prevShowClock)=>{return !prevShowClock});
   //setShowClock(!showClock)
  };

  // let clockElement = "";

  // if (showClock) {
  //   clockElement = <Clock toggleClockMethod={toggleClock} />;
  // } else {
  //   clockElement = (
  //     <span onClick={toggleClock} className="show-clock">
  //       show clock
  //     </span>
  //   );
  // }

  return (
    <div className="counter">
      Counter:
      <Display displayValue={counterValue} />
      <ButtonsPanel buttonMethod={changeValue} stepValue={stepValue} />
      {showClock?<Clock toggleClockMethod={toggleClock} />:<span onClick={toggleClock} className="show-clock">
        show clock
      </span>} 
      <Step onStepChange={changeStep} stepValue={stepValue}/>
    </div>
  );
}

export default Counter;

// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

// export default Counter;
