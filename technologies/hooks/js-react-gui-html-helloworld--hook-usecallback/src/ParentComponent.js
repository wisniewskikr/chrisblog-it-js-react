import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {

  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

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
