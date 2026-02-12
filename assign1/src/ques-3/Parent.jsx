import { useState } from "react";
import "../ques2/counter.css"
const Parent = () => {
  const [message, setMessage] = useState("Hello from Parent!");

  const changeMessage = () => {
    setMessage("Message updated using setMessage");
  };

  return (
    <div className="counter-wrapper">
      <div className="counter-card">

      <h2>Parent Component</h2>
      <p>{message}</p>

      <button onClick={changeMessage}>
        Change Message
      </button>
      </div>
    </div>
  );
};

export default Parent;
