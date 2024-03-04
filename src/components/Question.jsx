import { decode } from 'html-entities';

export default function Question(props) {
  function selectAnswer(answer, currentQuestion) {
    props.updateAnswer(answer, currentQuestion);
  }
  const answersElements = props.answers.map((answer, index) => {
    return (
      <button
        key={index}
        className={`answer ${answer === props.selectedAnswer ? 'selected' : ''}`}
        onClick={() => selectAnswer(answer, props.question)}>
        {decode(answer)}
      </button>
    );
  });
  return (
    <div className="question--container">
      <h3>{decode(props.question)}</h3>
      <div className="answer--container">{answersElements}</div>
    </div>
  );
}
