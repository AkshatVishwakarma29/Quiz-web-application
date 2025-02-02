import React, { useState, useEffect } from "react";
import "./StartCountdown.css";

const StartCountdown = ({ onStart }) => {
  const [count, setCount] = useState(null);

  const handleStartClick = () => {
    setCount(3);
  };

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else if (count === 0) {
      onStart();
    }
  }, [count, onStart]);

  return (
    <div className="countdown-container">
      {count === null ? (
        <button className="start-button" onClick={handleStartClick}>
          Start Quiz
        </button>
      ) : count > 0 ? (
        <h1 className="count-number">{count}</h1>
      ) : (
        <h1 className="count-go">GO!</h1>
      )}
    </div>
  );
};

export default StartCountdown;