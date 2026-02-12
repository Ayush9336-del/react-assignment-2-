import { useState } from "react";
import "./counter.css";

const Counter = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    count++;
    setCount(count);
  };

  const decrement = () => {
    count--;
    setCount(count);
  };

  const reset = () => {
    count = 0;
    setCount(count);
  };

  return (
    <div className="counter-wrapper">
      <div className="counter-card">
        <h2>Counter</h2>
        <p className="count">{count}</p>

        <div className="buttons">
          <button className="btn minus" onClick={decrement}>−</button>
          <button className="btn reset" onClick={reset}>Reset</button>
          <button className="btn plus" onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
