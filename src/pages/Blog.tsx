import React, { useContext } from "react";
import { UnicornContext } from "../context/UnicornProvider";

function Blog() {
  const { setUnicornName, unicornName } = useContext(UnicornContext);
  return (
    <div>
      <h1>{unicornName}</h1>
      <input
        type="text"
        onChange={(e) => setUnicornName(e.target.value)}
        value={unicornName}
      />
    </div>
  );
}

export default Blog;
