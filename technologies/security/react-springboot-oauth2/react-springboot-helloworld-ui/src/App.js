import { useState, useEffect } from "react";

function App() {

  const [message, setMessage] = useState(0);

  useEffect(() =>{

    const fetchData = async () => {

      const response = await fetch("http://localhost:8080");
      const result = await response.json();
      setMessage(result.message);

    };

    fetchData();

  }, []);

  return (
    <div>
      {message}
    </div>
  );

}

export default App;