import { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  } 
  
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  } 
  
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }

  render() {   
    return (
      <>
        <div>Hello World number: {this.state.count}!</div>
        <button>Increase</button>
      </>
    );
  }
  
}

export default App;