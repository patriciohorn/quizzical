import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function Questions({ question, answers, id, handleSelect }) {
  const allAnswers = answers.map((text) => {
    const answer = {
      answer: text,
      id: nanoid(),
      selected: false
    };
    return answer;
  });

  return (
    <div className="question--container">
      <h3>{question}</h3>
      <ul className="answer--container">
        {allAnswers.map((answer) => (
          <li key={answer.id}>
            <button id={answer.id} className="answer" onClick={() => handleSelect(answer.id, id)}>
              {answer.answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
