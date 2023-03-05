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
  return (
    <div>
      <h1>{AppleDisplay(numberOfApples)}</h1>
    </div>
  );
}

export default AppleComponent;
