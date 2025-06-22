import React, { useState } from "react";
import Questions from "./Question";
import Options from "./Options";
import Score from "./Score";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Shakespeare", "Dickens", "Homer", "Tolstoy"],
    answer: "Shakespeare",
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = () => {
    if (selected === quizData[current].answer) {
      setScore(score + 1);
    }

    setSelected("");

    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setSelected("");
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return <Score score={score} total={quizData.length} onRetry={restartQuiz} />;
  }

  return (
    <div className="quiz-container">
      <Questions text={quizData[current].question} />
      <Options
        options={quizData[current].options}
        selected={selected}
        onSelect={setSelected}
      />
      <button
        className="next-button"
        onClick={handleNext}
        disabled={!selected}
      >
        Next
      </button>
    </div>
  );
};

export default Quiz;
