import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function Questions({ questions }) {
  const createQuestion = (questionData) => {
    const { question, correct_answer, incorrect_answers } = questionData;

    const answers = [correct_answer, ...incorrect_answers];

    return {
      question,
      answers,
      correct_answer
    };
  };

  const questionElement = questions.map((questionData, index) => {
    const { question, answers } = createQuestion(questionData);
    return (
      <div className="question--container">
        <h3>{question}</h3>
        <ul className="answer--container">
          {answers.map((answer, answerIndex) => (
            <li key={answerIndex}>
              <button className="answer">{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  });

  return <section className="container">{questionElement}</section>;
}
