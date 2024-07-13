import { connect } from "react-redux";
import { increment, decrement } from "./actions";

const App = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Hello World number: {count}!</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapDispatchToProps = {
  increment,
  decrement,
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count, 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);