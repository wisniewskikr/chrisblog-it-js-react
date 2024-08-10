function App() {

  if (process.env.NODE_ENV === 'development') {
    console.log("You are running in development mode.")
  } else if (process.env.NODE_ENV === 'production') {
    console.log("You are running in production mode.")
  }

  const message = process.env.REACT_APP_MESSAGE;

  return (
    <div>
      {message}
    </div>
  );
}

export default App;
