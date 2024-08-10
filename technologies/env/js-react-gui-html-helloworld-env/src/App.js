function App() {

  const message = process.env.REACT_APP_MESSAGE;

  if (process.env.NODE_ENV === 'development') {
    console.log('Running in development mode');
  } else if (process.env.NODE_ENV === 'production') {
    console.log('Running in production mode');
  }

  return (
    <div>
      {message}
    </div>
  );
}

export default App;
