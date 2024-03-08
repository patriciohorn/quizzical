import QuestionList from './QuestionList';
import ResultBar from './ResultBar';
import LoadingSpinner from './LoadingSpinner';
import { useState } from 'react';

export default function Quiz({ quizData, onPlayAgain, isLoading }) {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  function handleSelected(index, selectedAnswer) {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = selectedAnswer;
    setSelectedAnswers(newSelectedAnswers);
  }

  function handleCheckAnswer() {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  }

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="container">
          <QuestionList
            quizData={quizData}
            selectedAnswers={selectedAnswers}
            onSelect={handleSelected}
            showAnswer={showAnswer}
          />
          <ResultBar
            selectedAnswers={selectedAnswers}
            quizData={quizData}
            showAnswer={showAnswer}
            setShowAnswer={handleCheckAnswer}
            onPlayAgain={onPlayAgain}
          />
        </div>
      )}
    </div>
  );
}
