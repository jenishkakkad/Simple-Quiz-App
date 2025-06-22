import React from "react";

const Score = ({ score, total, onRetry }) => {
  return (
    <div className="score-box">
      <h2>Quiz Completed ✅</h2>
      <p className="score-text">
        Your Score: {score} / {total}
      </p>
      <button className="try-again-button" onClick={onRetry}>
        Try Again
      </button>
    </div>
  );
};

export default Score;
