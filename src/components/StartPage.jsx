export default function Start({ handleStart }) {
  const generateAPIUrl = () => {
    let apiUrl = `https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple`;
    return apiUrl;
  };
  return (
    <div className="start">
      <div className="">
        <h1>SporTrivia</h1>
        <p>Test your sports knowledge!</p>
      </div>
      <button className="btn btn--lg" onClick={() => handleStart(generateAPIUrl())}>
        Start quiz
      </button>
    </div>
  );
}
