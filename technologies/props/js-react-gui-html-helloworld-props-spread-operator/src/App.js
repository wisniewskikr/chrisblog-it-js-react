import ChildComponent from "./ChildComponent";

function App() {

  const props = {message: 'Hello World!', otherAttribute: 'Other Attribute'};

  return (
      <ChildComponent {...props} />
  );
}

export default App;