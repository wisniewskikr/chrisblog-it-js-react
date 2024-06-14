import useCustomHook from "./useCustomHook";

const App = () => {

  const {count, increment, decrement} = useCustomHook(0);

  return (
    <>
      <div>Hello World number: {count}!</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );

}

export default App;