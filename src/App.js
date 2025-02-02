import React, { useState } from "react";
import StartCountdown from "./StartCountdown";
import QuizComponent from "./QuizComponent";
import "./App.css";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="App">
      {!quizStarted ? (
        <StartCountdown onStart={handleStartQuiz} />
      ) : (
        <QuizComponent />
      )}
    </div>
  );
}

export default App;