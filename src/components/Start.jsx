export default function Start({ handleStart }) {
  return (
    <section className="start">
      <div>
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
      </div>

      <button className="btn btn--lg" onClick={handleStart}>
        Start Quiz
      </button>
    </section>
  );
}
