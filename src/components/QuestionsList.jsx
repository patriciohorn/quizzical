import Question from './Question';
import { useState } from 'react';

export default function QuestionsList({ questions }) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  console.log(selectedAnswers);

  function handleSelectAnswer(index, selectedAnswer) {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = selectedAnswer;
    setSelectedAnswers(newSelectedAnswers);
  }
  return (
    <div>
      {questions.map((question, index) => (
        <Question
          key={index}
          questionData={question}
          onSelect={(selectedAnswer) => handleSelectAnswer(index, selectedAnswer)}
          selectedAnswer={selectedAnswers[index]}
        />
      ))}
    </div>
  );
}
