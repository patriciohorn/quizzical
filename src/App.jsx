import { useState } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';

export default function App() {
  const [quiz, setQuiz] = useState(false);

  function startQuiz() {
    setQuiz((prevQuiz) => !prevQuiz);
  }

  return (
    <main>
      <section className="container">{quiz ? <Quiz /> : <Start handleStart={startQuiz} />}</section>
    </main>
  );
}
