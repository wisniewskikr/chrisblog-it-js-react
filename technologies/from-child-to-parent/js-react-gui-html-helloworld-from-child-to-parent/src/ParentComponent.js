import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  
  const [name, setName] = useState('Stranger'); 
  
  const callback = (data) => {
    setName(data);
  };

  return (
    <>
        <div>Hello World, {name}!</div>
        <div>
            <ChildComponent fromChild={callback} />
        </div>
    </>
  );
};
export default ParentComponent;