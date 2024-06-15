import { useState } from "react";

function App() {
  
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue}
        onChange={handleInputChange} placeholder="Name..."/>
      <p>Hello World: {inputValue}!</p>
    </div>
  );

};

export default App;