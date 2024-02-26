import { useState, useEffect } from 'react';
import Start from './components/Start';
import Questions from './components/Questions';

export default function App() {
  const [showQuestions, setShowQuestions] = useState(false);
  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple`
      );
      const data = await res.json();
      setQuestionsData(data.results);
    }
    const timer = setTimeout(() => {
      getQuestions();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {showQuestions ? (
        <Questions questions={questionsData} />
      ) : (
        <Start handleStart={() => setShowQuestions(true)} />
      )}
    </main>
  );
}

// Keep track of new quiz
