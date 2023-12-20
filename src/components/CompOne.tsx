import React, { useContext } from "react";
import { UnicornContext } from "../context/UnicornProvider";

function CompOne() {
  const { unicornName } = useContext(UnicornContext);

  return (
    <div>
      <h1>{unicornName}</h1>
    </div>
  );
}

export default CompOne;
