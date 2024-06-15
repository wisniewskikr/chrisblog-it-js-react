import { useRef } from "react";

function App() {
  
  const inputRef = useRef(null);
  const nameRef = useRef(null);

  const handleInputChange = () => {
    const value = inputRef.current.value;
    nameRef.current.innerHTML = value;
  };

  return (
    <div>
      <input type="text" ref={inputRef}
        onChange={handleInputChange} placeholder="Name..."/>
      <p>Hello World: <span ref={nameRef}/>!</p>
    </div>
  );

};

export default App;