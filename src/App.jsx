import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Start from './components/Start';
import Questions from './components/Questions';

export default function App() {
  const [showQuestions, setShowQuestions] = useState(false);
  const [questions, setQuestions] = useState([]);
  // const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple`
      );
      const data = await res.json();
      const questionsData = data.results.map((item) => {
        const { question, correct_answer, incorrect_answers } = item;
        return {
          id: nanoid(),
          question: question,
          answers: [correct_answer, ...incorrect_answers]
        };
      });
      setQuestions(questionsData);
    }

    const timer = setTimeout(() => {
      fetchQuestions();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // function handleSelect(answerId, id) {
  //   setQuestions(prevQuestions => (
  //     prevQuestions.map(question => (
  //       question.id ===  answerId ? {...question, selec}
  //     ) )
  //   ))
  // }

  const allQuestions = questions.map((question, index) => (
    <Questions key={index} {...question} handleSelect={handleSelect} />
  ));

  return (
    <main>
      <section className="container">
        {showQuestions ? allQuestions : <Start handleStart={() => setShowQuestions(true)} />}
      </section>
    </main>
  );
}
