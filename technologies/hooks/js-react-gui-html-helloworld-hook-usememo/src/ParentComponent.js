import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <>
      <ChildComponent count={count}/>
      <button onClick={increment}>
        Click
      </button>
    </>
  );
}

export default ParentComponent;
