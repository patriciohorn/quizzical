import Question from './Question';

export default function Questions({ quiz, handleSelect }) {
  return (
    <div className="question--container">
      {quiz.map((question) => (
        <Question key={question.id} question={question} handleSelect={handleSelect} />
      ))}
    </div>
  );
}
