import MyContext from "./MyContext";

function ChildComponent() {

  return (
    
    <MyContext.Consumer>
      {(message) => <div>{message}</div>}
    </MyContext.Consumer>

  );

}

export default ChildComponent;