import React, { Component } from "react";

class Counter extends Component {
  /* constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  } 

   constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  
  handleIncrease() {
    console.log('increase');
  }

  
  handleDecrease() {
    console.log('decrease');
  }*/

  state = {
    counter: 0,
  };

  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        {/* <button onClick={() => this.handleIncrease()}>+1</button>
    <button onClick={() => this.handleDecrease()}>-1</button> */}
      </div>
    );
  }
}

export default Counter;
