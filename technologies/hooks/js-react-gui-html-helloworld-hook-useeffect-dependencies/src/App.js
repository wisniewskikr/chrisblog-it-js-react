import { useState, useEffect } from "react";

function App() {

  const [id, setId] = useState(1);
  const [count, setCount] = useState(0);  

  useEffect(() =>{

    const fetchData = async () => {

      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const result = await response.json();
      setCount(result.id);

    };

    fetchData();

  }, [id]);  

  setInterval(function(){
    setId(id + 1);
  }, 1000);

  return (
    <div>
      Hello World number: {count}!
    </div>
  );

}

export default App;