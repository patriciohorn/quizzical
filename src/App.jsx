import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Start from './components/Start';
import Questions from './components/Questions';

export default function App() {
  const [showQuestions, setShowQuestions] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    //create a controller
    let controller = new AbortController();
    (async () => {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple`,
          {
            // connect the controller with the fetch request
            signal: controller.signal
          }
        );
        // handle success
        const data = await response.json();
        setQuestions(data.results);
        // remove the controller
        controller = null;
      } catch (error) {
        // Handle the error
        console.log(error);
      }
    })();
    //aborts the request when the component umounts
    return () => controller?.abort();
  }, []);

  return (
    <main>
      {showQuestions ? (
        <Questions questions={questions} />
      ) : (
        <Start handleStart={() => setShowQuestions(true)} />
      )}
    </main>
  );
}
