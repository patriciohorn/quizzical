import { useState } from 'react';
import { decode } from 'html-entities';
// import AnswerOption from './AnswerOption';

export default function Question({ questionData }) {
  const [answers, setAnswers] = useState(questionData.answers);

  const handleAnswerClick = (index) => {
    const updatedAnswers = answers.map((answer, i) => ({
      ...answer,
      isSelected: i === index ? !answer.isSelected : answer.isSelected
    }));
    setAnswers(updatedAnswers);
  };
  return (
    <div className="question--container">
      <h3>{decode(questionData.question)}</h3>
      <ul className="answer--container">
        {answers.map((answer, index) => (
          <li key={index}>
            <button
              className={`answer ${answer.isSelected ? 'selected' : ''}`}
              onClick={() => handleAnswerClick(index)}>
              {decode(answer.text)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
