import { useState, useEffect } from "react";

function App() {

  const [ shouldRunEffect, setShouldRunEffect ] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() =>{

    const fetchData = async () => {

      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const result = await response.json();
      setCount(result.id);

    };

    if (shouldRunEffect) {
      fetchData();
    }
    
  }, [shouldRunEffect]);

  return (
    <div>
      Hello World number: {count}!
    </div>
  );

}

export default App;