import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        Hello World number: {count}!
      </div>
      <ChildComponent onIncrement={increment}/>
    </>
  );
}

export default ParentComponent;
