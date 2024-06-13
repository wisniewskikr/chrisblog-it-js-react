import { useContext } from "react";
import MyContext from "./MyContext";

function ChildComponent() {

  const message = useContext(MyContext);

  return (
    <div>
      {message}
    </div>
  );

}

export default ChildComponent;