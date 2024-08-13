import './App.css';

const App = () => {

  const isMessage = true;

  return (
    <div className={isMessage ? 'message' : ''}>
      Hello World!
    </div>
  );
}

export default App;