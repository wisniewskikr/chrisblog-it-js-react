import { useRef } from "react";

function App() {

  const helloWorldRef = useRef();

  const fillRef = () => {
    helloWorldRef.current.value = "Hello World!";
  };

  return (
    <>
      <div>
        <input ref={helloWorldRef}/>
      </div>
      <button onClick={fillRef}>Click</button>
    </>
  );

}

export default App;
