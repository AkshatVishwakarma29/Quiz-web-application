import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import QuizService from "./QuizService";
import "./QuizComponent.css";

const QuizComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [lives, setLives] = useState(5);
  const [score, setScore] = useState(0);
  const [quizOver, setQuizOver] = useState(false);

  useEffect(() => {
    // Fetch questions and start the quiz immediately after
    QuizService.fetchQuestions().then((data) => {
      setQuestions(data);
    });
  }, []);

  const handleOptionClick = (option) => {
    if (showAnswer) return; // Disable further clicks after an answer is shown

    setSelectedOption(option);
    setShowAnswer(true);
    if (option === questions[currentQuestion].answer) {
      setScore((prev) => prev + 10);
    } else {
      setLives((prev) => prev - 1);
      if (lives - 1 <= 0) {
        setQuizOver(true);
      }
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizOver(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setLives(5);
    setScore(0);
    setQuizOver(false);
  };

  if (quizOver) {
    return (
      <div className="quiz-over">
        <h1>Quiz Over!</h1>
        <p>Your Score: {score}</p>
        <button className="restart-button" onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {questions.length > 0 && (
        <div>
          <div className="question-header">
            <Timer duration={15 * 60} />
            <div className="lives-container">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={`heart ${i < lives ? "active" : "inactive"}`}>
                  ❤️
                </span>
              ))}
            </div>
          </div>
          <p className="question-text">{questions[currentQuestion].question}</p>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedOption === option
                    ? option === questions[currentQuestion].answer
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                onClick={() => handleOptionClick(option)}
                disabled={showAnswer}
              >
                {option}
              </button>
            ))}
          </div>
          {showAnswer && (
            <p className="answer-text">
              Correct Answer: {questions[currentQuestion].answer}
            </p>
          )}
          <button
            className="next-button"
            onClick={handleNext}
            disabled={!showAnswer}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
