import { decode } from 'html-entities';

export default function QuestionRow({ question }) {
  return (
    <>
      <h3>{decode(question)}</h3>
    </>
  );
}
