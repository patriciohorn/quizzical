import { decode } from 'html-entities';

export default function Question({ questionData }) {
  const { question, answers } = questionData;

  return (
    <div className="question--container">
      <h3>{decode(question)}</h3>
      <ul className="answer--container">
        {answers.map((answer, index) => (
          <li key={index}>
            <button className="answer">{decode(answer)}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
