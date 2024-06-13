import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        Hello World number: {count}!
      </div>
      <button onClick={increment}>
        Click
      </button>
    </>
  );
}

export default App;
