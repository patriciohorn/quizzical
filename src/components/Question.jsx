export default function Question({ question, handleSelect }) {
  console.log(question);
  return (
    <div className="question--container">
      <h3>{question.question}</h3>
      <div className="answer--container">
        {question.answers.map((answer, index) => (
          <button key={index} className="answer">
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
