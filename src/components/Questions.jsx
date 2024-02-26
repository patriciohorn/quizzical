export default function Questions({ questions }) {
  console.log(questions);

  const questionElement = questions.map((question) => {
    return (
      <div className="question--container">
        <h2 className="question">{question.question}</h2>
        <div className="answer--container">
          <button className="answer">Adios</button>
          <button className="answer">Hola</button>
          <button className="answer">Au revoir</button>
          <button className="answer">Salir</button>
        </div>
      </div>
    );
  });
  return <section className="container">{questionElement}</section>;
}
