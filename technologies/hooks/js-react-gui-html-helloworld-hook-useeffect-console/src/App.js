import { useEffect } from "react";

function App() {

  useEffect(() =>{

    const fetchData = async () => {

      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const result = await response.json();
      console.log("Hello World number: " + result.id + "!");

    };

    fetchData();

  }, []);

  return (
    <div>
      Hello World!
    </div>
  );

}

export default App;