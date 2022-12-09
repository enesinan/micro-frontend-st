import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const [count, setCount] = useState(0);
const onIncrement = () => setCount(count++);

export const Counter = () => (
  <div>
    <h1>Counter: {count}</h1>
    <button onClick={onIncrement}>Increment</button>
  </div>
);
