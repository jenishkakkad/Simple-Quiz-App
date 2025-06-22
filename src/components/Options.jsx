import React from "react";

const Options = ({ options, selected, onSelect }) => {
  const labels = ["A", "B", "C", "D"];

  return (
    <div className="options-container">
      {options.map((option, index) => (
        <label
          key={index}
          className={`option-label ${selected === option ? "option-selected" : ""}`}
        >
          <input
            type="radio"
            name="quiz-option"
            value={option}
            checked={selected === option}
            onChange={() => onSelect(option)}
          />
          <span className="option-prefix">{labels[index]}.</span>
          {option}
        </label>
      ))}
    </div>
  );
};

export default Options;
