import { nanoid } from 'nanoid';
import Question from './Question';
import { useState, useEffect } from 'react';

export default function Questions() {
  const [quizData, setQuizData] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    async function fetchQuiz() {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple`
      );
      const data = await response.json();
      const results = data.results.map((result) => ({
        id: nanoid(),
        question: result.question,
        correctAnswer: result.correct_answer,
        answers: [result.correct_answer, ...result.incorrect_answers].sort(
          () => Math.random() - 0.5
        ),
        selectedAnswer: ''
      }));
      setQuizData(results);
    }

    const timer = setTimeout(() => {
      fetchQuiz();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  function updateAnswer(answer, currentQuestion) {
    setQuizData((prevQuizData) =>
      prevQuizData.map((result) => {
        return result.question === currentQuestion
          ? {
              ...result,
              selectedAnswer: answer
            }
          : result;
      })
    );
  }

  function checkAnswer() {}

  const quizElement = quizData.map((result, index) => {
    return (
      <Question
        key={index}
        question={result.question}
        answers={result.answers}
        selectedAnswer={result.selectedAnswer}
        updateAnswer={updateAnswer}
      />
    );
  });

  return (
    <div className="quiz">
      <div>{quizElement}</div>
      <div className="check--answers">
        <button className="btn btn--md" onClick={checkAnswer}>
          Check Answers
        </button>
      </div>
    </div>
  );
}
