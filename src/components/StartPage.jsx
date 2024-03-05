export default function Start({ handleIsPlaying }) {
  return (
    <div className="start">
      <h1>Quizzical</h1>
      <p>Test your sports knowledge!</p>
      <button className="btn btn--lg" onClick={handleIsPlaying}>
        Start Quiz
      </button>
    </div>
  );
}
