import { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <>
        <div>Hello World number: { this.state.count }!</div>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
  
}

export default App;