import { useReducer } from "react";

function App() {

  const data = {message: 'Hello World number:', count: 0};
  const fnReducer = (state, action) => {

    switch(action.type) {
      case "INCREMENT":
        return {message: state.message, count: state.count + 1};
      default:
        return state;
    }

  };
  
  const [state, dispatch] = useReducer(fnReducer, data);

  setInterval(function(){
    dispatch({ type: "INCREMENT" });
  }, 1000);

  return (
    <div>
      {state.message} {state.count}!
    </div>
  );

}

export default App;