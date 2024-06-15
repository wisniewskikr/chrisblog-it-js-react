import { useState } from "react";

function App() {
 
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';   
    return newErrors;
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length === 0) {
      setGreeting(`Hello World, ${name}!`);
      setName('');
      setErrors({});
    } else {
      setGreeting('');
      setErrors(formErrors);
    }

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

      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

    </>
  );

}

export default App;
