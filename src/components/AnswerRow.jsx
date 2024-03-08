import { decode } from 'html-entities';

export default function AnswerRow({ quizQuestion, onSelect, selectedAnswer, showAnswer }) {
  const { answers, correct_answer } = quizQuestion;

  const answersElements = answers.map((answer, index) => {
    const currentAnswer = answer === selectedAnswer;
    const className = ['answer'];
    if (currentAnswer) {
      className.push('selected');
    }

    const selectedCorrect = currentAnswer && selectedAnswer === correct_answer;
    const selectedWrong = currentAnswer && selectedAnswer !== correct_answer;
    if ((showAnswer && selectedCorrect) || (showAnswer && answer === correct_answer)) {
      className.push('correct');
    } else if (showAnswer && selectedWrong) {
      className.push('wrong');
    } else if (showAnswer) {
      className.push('show');
    }

    return (
      <li key={index}>
        <button
          className={`${className.join(' ')}`}
          onClick={() => {
            onSelect(answer);
          }}>
          {decode(answer)}
        </button>
      </li>
    );
  });

  return <ul className="answer--container">{answersElements}</ul>;
}
