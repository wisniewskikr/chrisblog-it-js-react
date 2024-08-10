function App() {

  const message = process.env.REACT_APP_MESSAGE;

  return (
    <div>
      {message}
    </div>
  );
}

export default App;
