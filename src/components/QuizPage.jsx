import QuestionsList from './QuestionsList';

export default function Quiz({ quizData }) {
  return (
    <div>
      <h2>Select only one answer for each question</h2>
      <QuestionsList questions={quizData} />
    </div>
  );
}
