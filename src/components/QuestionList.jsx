import QuestionRow from './QuestionRow';
import AnswerRow from './AnswerRow';

export default function Questions({ quizData, selectedAnswers, onSelect, showAnswer }) {
  const questionElement = quizData.map((quizQuestion, index) => {
    return (
      <div key={index} className="question--container">
        <QuestionRow key={quizQuestion.question} question={quizQuestion.question} />
        <AnswerRow
          key={index}
          quizQuestion={quizQuestion}
          onSelect={(selectedAnswer) => onSelect(index, selectedAnswer)}
          selectedAnswer={selectedAnswers[index]}
          showAnswer={showAnswer}
        />
      </div>
    );
  });

  return <div>{questionElement}</div>;
}
