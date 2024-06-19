import { useState, useEffect } from "react";

function App() {

  const [country, setCountry] = useState(0);

  useEffect(() =>{

    const fetchData = async () => {

      const response = await fetch("https://countries.trevorblades.com/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query {
              countries {
                name
              } 
            }
          `
        })
      });
      const result = await response.json();
      setCountry(result.data.countries[0].name);

    };

    fetchData();

  }, []);

  return (
    <div>
      Hello World, {country}!
    </div>
  );

}

export default App;