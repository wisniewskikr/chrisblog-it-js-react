import { useMemo } from "react";

function ChildComponent( {count} ) {

  // Heavy function which should be memorized
  const processCount = (count) => {
    return "Hello World number: " + count + "!";
  };

  const processedCount = useMemo(() => {
    return processCount(count);
  }, [count]);

  return (    
    <div>
      {processedCount}
    </div>
  );
}

export default ChildComponent;
