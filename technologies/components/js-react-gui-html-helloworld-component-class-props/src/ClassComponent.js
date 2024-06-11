import { Component } from "react";
import ClassComponentChildren from "./ClassComponentChildren";

class ClassComponent extends Component {

  render() {

    return (
      <ClassComponentChildren message="Hello World!"/>
    );

  }
  
}

export default ClassComponent;
