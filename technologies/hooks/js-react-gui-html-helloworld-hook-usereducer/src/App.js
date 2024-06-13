import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);  

  setInterval(function(){
    setCount(count + 1);
  }, 1000);

  return (
    <div>
      Hello World number: {count}!
    </div>
  );

}

export default App;