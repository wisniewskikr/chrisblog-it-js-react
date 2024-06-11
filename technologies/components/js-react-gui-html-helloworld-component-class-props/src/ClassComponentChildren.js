import { Component } from "react";

class ClassComponentChildren extends Component {

  render() {

    return (
      <div>
        {this.props.message}
      </div>
    );

  }
  
}

export default ClassComponentChildren;
