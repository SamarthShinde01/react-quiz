function StartScreen({ newQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{newQuestions} question to test your React mastery</h3>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}

export default StartScreen;