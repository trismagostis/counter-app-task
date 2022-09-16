import React from "react";

function Step(props) {
  return (
    <div className="stepContainer">
      <input
        name="stepValue"
        type="number"
        onChange={(event) => props.onStepChange(event.target.value)}
        min="1"
        value={props.stepValue}
      />
    </div>
  );
}
export default Step;
