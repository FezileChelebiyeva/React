import React from "react";
import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
};

export default Counter;
