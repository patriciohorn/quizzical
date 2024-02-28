import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Start from './components/Start';
import Questions from './components/Questions';

export default function App() {
  const [showQuestions, setShowQuestions] = useState(false);
  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple`
      );
      const data = await res.json();
      setQuestionsData(data.results);
    }

    const timer = setTimeout(() => {
      fetchQuestions();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main>
      <section className="container">
        {showQuestions ? (
          questionsData.map((question, index) => (
            <Questions key={index} data={question} selected={isSelected} />
          ))
        ) : (
          <Start handleStart={() => setShowQuestions(true)} />
        )}
      </section>
    </main>
  );
}
