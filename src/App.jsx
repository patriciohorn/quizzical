import { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Start from './components/StartPage';
import axios from 'axios'; // HTTP Library

export default function App() {
  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startPage, setStartPage] = useState(true);
  const [customURL, setCustomURL] = useState('');

  useEffect(() => {
    if (customURL) {
      const fetchData = async () => {
        try {
          const response = await axios.get(customURL);
          const transformedData = response.data.results.map((result) => ({
            question: result.question,
            correct_answer: result.correct_answer,
            answers: [result.correct_answer, ...result.incorrect_answers].sort(
              () => Math.random() - 0.5
            )
          }));

          setQuizData(transformedData);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      };
      const timer = setTimeout(() => {
        fetchData();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [customURL]);

  function handleStart(url) {
    setCustomURL(url);
    setStartPage(false);
  }

  function handlePlayAgain() {
    setQuizData([]);
    setCustomURL('');
    setStartPage(true);
    setIsLoading(true);
  }

  return (
    <div>
      {startPage ? (
        <Start handleStart={handleStart} />
      ) : (
        <Quiz quizData={quizData} onPlayAgain={handlePlayAgain} isLoading={isLoading} />
      )}
    </div>
  );
}
