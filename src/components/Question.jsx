import { useState } from 'react';
import { decode } from 'html-entities';

export default function Question({ questionData, onSelect, selectedAnswer }) {
  return (
    <div className="question--container">
      <h3>{decode(questionData.question)}</h3>
      <ul className="answer--container">
        {questionData.answers.map((answer, index) => (
          <li key={index}>
            <button
              className={`answer ${selectedAnswer === answer ? 'selected' : ''}`}
              onClick={() => onSelect(answer)}>
              {decode(answer)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
