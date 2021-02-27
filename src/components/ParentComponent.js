// Calling a Parent Component function via the Child Component - Tutorial 15
import React, { Component } from "react";
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    // Notation used by ES6, not required for React
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return <div>
        <ChildComponent greetHandler={this.greetParent} />
    </div>;
  }
}

export default ParentComponent;
