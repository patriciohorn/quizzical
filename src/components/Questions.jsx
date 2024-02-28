import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function Questions({ data }) {
  // console.log(data);
  const { question, correct_answer, incorrect_answers } = data;

  const allAnswers = [correct_answer, ...incorrect_answers];

  return (
    <div className="question--container">
      <h3>{question}</h3>
      <ul className="answer--container">
        {allAnswers.map((answer, index) => (
          <li key={index}>
            <button styles={styles} className="answer" onClick={() => handleAnswerSelect(answer)}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
