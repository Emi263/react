import React, { useState } from "react";

function Calculator() {
  const [firstValue, setFirstValue] = useState();
  const [secondValue, setSecondValue] = useState();
  const [result, setResult] = useState();

  function handleSecondValueChange(event) {
    setSecondValue(parseInt(event.target.value));
  }

  function handleFirstValueChange(event) {
    setFirstValue(parseInt(event.target.value));
  }

  function showResult() {
    setResult(firstValue + secondValue);
  }

  return (
    <div
      style={{
        paddingTop: 100,
        paddingLeft: 40,
      }}
    >
      <input type="number" onChange={handleFirstValueChange} />
      <input type="number" onChange={handleSecondValueChange} />

      <button onClick={showResult}>Add</button>

      <p>Result: {result} </p>
    </div>
  );
}

export default Calculator;
