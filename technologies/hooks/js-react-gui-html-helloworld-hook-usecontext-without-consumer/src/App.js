import ChildComponent from "./ChildComponent";
import MyContext from "./MyContext";

function App() {
  const message = "Hello World!";
  return (
      <MyContext.Provider value={message}>
        <ChildComponent/>
      </MyContext.Provider>
  );
}

export default App;