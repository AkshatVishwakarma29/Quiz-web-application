const QuizService = {
  fetchQuestions: async () => {
    // Directly embedding the API data here
    const questions = [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
      },
      {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare",
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter",
      },
      {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Osmium", "Oxide"],
        answer: "Oxygen",
      },
      {
        question: "What year did the Titanic sink?",
        options: ["1905", "1912", "1920", "1918"],
        answer: "1912",
      },
    ];

    // Simulate asynchronous fetching
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(questions);
      }, 500);
    });
  },
};

export default QuizService;
