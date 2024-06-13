import { useState } from "react";
import { Link } from "react-router-dom";

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
      <Link onClick={increment}>
        Click
      </Link>
    </>
  );
}

export default App;
