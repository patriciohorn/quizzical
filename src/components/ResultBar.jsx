export default function ResultBar({
  quizData,
  selectedAnswers,
  showAnswer,
  setShowAnswer,
  onPlayAgain
}) {
  const correctAnswers = quizData.map((question) => question.correct_answer);
  const score = correctAnswers.filter((answer, index) => answer === selectedAnswers[index]);

  return (
    <div className="check--answers">
      {showAnswer ? (
        <>
          <p>
            You scored
            <span className="score">{` ${score.length} / ${correctAnswers.length} `}</span>
            correct answers
          </p>
          <button className="btn btn--md" onClick={onPlayAgain}>
            Play again
          </button>
        </>
      ) : (
        <button className="btn btn--md" onClick={setShowAnswer}>
          Check Answer
        </button>
      )}
    </div>
  );
}
