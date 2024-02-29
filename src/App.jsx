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
      const questionsData = data.results.map((question) => ({
        id: nanoid(),
        question: question.question,
        correct_answer: question.correct_answer,
        answers: [
          { text: question.correct_answer, isSelected: false },
          ...question.incorrect_answers.map((answer) => ({ text: answer, isSelected: false }))
        ]
      }));
      setQuestions(questionsData);
    }

    const timer = setTimeout(() => {
      fetchQuestions();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // function generateAnswers(val, arr) {
  //   const newAnswers = [...arr, val];
  //   return newAnswers.map((val) => ({
  //     answer: val,
  //     id: nanoid(),
  //     isSelected: false
  //   }));
  // }

  function handleSelect(answerId, id) {
    // setQuestions(questions.map((q) => {
    //   OfflineAudioCompletionEvent(q.id === )
    // }))
  }

  // const allQuestions = questions.map((question, index) => (
  //   <Quiz key={index} quiz={questions} handleSelect={handleSelect} />
  // ));

  return (
    <main>
      <section className="container">
        {showQuestions ? (
          <Questions quiz={questions} onSelect={handleSelect} />
        ) : (
          <Start handleStart={() => setShowQuestions(true)} />
        )}
      </section>
    </main>
  );
}
