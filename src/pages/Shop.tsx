import React, { useContext } from "react";
import { UnicornContext } from "../context/UnicornProvider";

function Shop() {
  const { setUnicornName } = useContext(UnicornContext);
  return (
    <div>
      <h1>Hello Shop</h1>
      <button onClick={() => setUnicornName("sparkles")}>change Name</button>
    </div>
  );
}

export default Shop;
