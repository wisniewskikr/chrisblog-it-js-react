import { useState } from "react";

function App() {
 
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreeting(`Hello World, ${name}!`);
  };

  return (
    <>
    
      <form onSubmit={handleSubmit}>        
        <div>
          <input
            type="text"
            value={name}
            placeholder="Name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {greeting && <p>{greeting}</p>}

    </>
  );

}

export default App;
