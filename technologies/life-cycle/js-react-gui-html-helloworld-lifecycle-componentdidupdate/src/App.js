import { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: null
    };
  }  

  componentDidMount() {

    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const result = await response.json();
      return result.id;
    };

    fetchData().then((count) => {      
      this.setState({
        count: count
      });
    });

  }

  componentDidUpdate(prevProps) {

    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const result = await response.json();
      return result.id;
    };
    
    if (this.props.id !== prevProps.id) {
      fetchData().then((count) => {
        this.setState({ count: count });
      });    
    }    

  }

  render() {   
    return (
      <div>
        Hello World number: {this.state.count}!
      </div>
    );
  }
  
}

export default App;