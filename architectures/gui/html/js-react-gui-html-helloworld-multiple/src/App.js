import { useState } from "react"
import { Init } from "./Init"
import { HelloWorld } from "./HelloWorld";

function App() {
  const [start, setStart] = useState(true)

  return (
    <>
      { start ? <Init /> : <HelloWorld /> }
    </>  
  );
}

export default App;
