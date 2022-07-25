import React, { Component } from "react";

class Calculator extends Component {
  
  state = {
    value1: Math.floor(Math.random() * 10) + 1,
    value2: Math.floor(Math.random() * 10) + 1,
    operation: "+"
  }

  setValue = (event, valueName) => {
    const newValue = event.target.value;

    if (isNaN(newValue)) {
      alert("You must enter a number!");
      return;
    }

    this.setState((prevState) => {
      prevState[valueName] = newValue;
      return prevState;
    });
  }

  setOperation = (event) => {
    const PERMITTED_OPERATIONS = ["+", "-", "*", "x", "/", "^"];
    const newOperation = event.target.value;

    if (!PERMITTED_OPERATIONS.includes(newOperation)
        && newOperation !== "") {
      alert("You must enter a valid mathematical operation!");
      return;
    }

    this.setState((prevState) => {
      prevState.operation = newOperation;
      return prevState;
    })
  }

  calculate = () => {
    // explicitly typecasted to Number to properly handle decimals
    const num1 = Number(this.state.value1);
    const num2 = Number(this.state.value2);

    switch (this.state.operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
      case "x":
        return num1 * num2;
      case "/":
        return num1 / num2;
      case "^":
        return num1 ** num2;
      case "":
        return "";
      default:
        return `Error: "${this.state.operation}" is not a supported operation.`
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>
    
        <div className="add">
          <input
            type="text"
            value={this.state.value1}
            onChange={event => this.setValue(event, "value1")}
          />
          <input
            type="text"
            value={this.state.operation}
            onChange={this.setOperation}
          />
          <input
            type="text"
            value={this.state.value2}
            onChange={event => this.setValue(event, "value2")}
          />
          =
          <h3>{this.calculate()}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;