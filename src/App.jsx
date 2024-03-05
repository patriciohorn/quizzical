import { useState, useEffect } from 'react';
import QuizPage from './components/QuizPage';
import Start from './components/StartPage';
import axios from 'axios'; // HTTP Library

export default function App() {
  const [quizData, setQuizData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple'
        );
        console.log(response.data);
        const concatenatedData = response.data.results.map((result) => ({
          ...result,
          answers: [result.correct_answer, ...result.incorrect_answers]
        }));

        const transformedData = concatenatedData.map((question) => ({
          ...question,
          answers: question.answers.map((answer) => ({
            text: answer,
            isSelected: false
          }))
        }));
        setQuizData(transformedData);
      } catch (error) {
        console.log(error);
      }
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  function handleIsPlaying() {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  }

  return (
    <div className="container">
      {isPlaying ? <QuizPage quizData={quizData} /> : <Start handleIsPlaying={handleIsPlaying} />}
    </div>
  );
}
