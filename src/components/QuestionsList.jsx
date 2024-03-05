import Question from './Question';

export default function QuestionsList({ questions }) {
  console.log(questions);
  return (
    <div>
      {questions.map((question, index) => (
        <Question key={index} questionData={question} />
      ))}
    </div>
  );
}
