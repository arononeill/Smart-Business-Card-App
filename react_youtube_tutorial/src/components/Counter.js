// setState Tutorial 11
import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // You have to use setState to change the State
  // Callback function must be used for code to be carried out after setState
  increment() {
    // this.setState({
    //     count: this.state.count + 1
    // },
    // () => {
    //     console.log('callback value', this.state.count)
    // }
    // )

    // Pass a function to be able to work with the previous State and not the original global State
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count)
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count} </div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
