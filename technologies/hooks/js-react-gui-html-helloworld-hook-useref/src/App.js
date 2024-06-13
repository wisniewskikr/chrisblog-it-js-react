import { useRef } from "react";

function App() {

  const helloWorldRef = useRef();

  const fillRef = () => {
    helloWorldRef.current.innerHTML = "Hello World!";
  };

  return (
    <>
      <div>
        Message: <span ref={helloWorldRef}/>
      </div>
      <button onClick={fillRef}>Click</button>
    </>
  );

}

export default App;
