import React, { useState, useEffect } from "react";

function Countdown({ onStartQuiz }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      onStartQuiz(); // Trigger quiz start when countdown reaches 0
    } else {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(timer); // Cleanup on unmount
    }
  }, [count, onStartQuiz]);

  return (
    <div className="countdown">
      <h2>{count > 0 ? count : "Go!"}</h2>
    </div>
  );
}

export default Countdown;

