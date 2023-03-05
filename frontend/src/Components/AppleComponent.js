import React, { useState } from "react";

function AppleComponent() {
  const [numberOfApples, setNumberOfApples] = useState(1);

  function AppleDisplay(numberOfApples) {
    if (numberOfApples === 0 || numberOfApples === 1) {
      return `John has a ${numberOfApples} apple`;
    } else if (numberOfApples > 1) {
      return `John has a ${numberOfApples} apples`;
    } else {
      return `John owes us ${Math.abs(numberOfApples)} apples`;
    }
  }

  function IncreaseApples() {
    setNumberOfApples(currentValue => currentValue + 1);
  }

  function DecreaseApples() {
    setNumberOfApples(currentValue => currentValue - 1);
  }

  function TooManyDisplay() {
    if (numberOfApples > 5) {
      return <h1> John has too many apples</h1>;
    } else {
      return "";
    }
  }
  return (
    <>
      <div>
        <h1>{AppleDisplay(numberOfApples)}</h1>
      </div>
      <button onClick={IncreaseApples} className="add-btn">
        increase
      </button>
      <button
        style={{ display: numberOfApples <= 0 ? "None" : "" }}
        onClick={DecreaseApples}
        className="decrease-btn"
      >
        decrease
      </button>
      {/* {TooManyDisplay()} */}
      {numberOfApples > 10 ? <h1> John has too many apples</h1> : ""}
    </>
  );
}

export default AppleComponent;
