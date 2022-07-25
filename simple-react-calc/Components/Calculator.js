import React, { Component } from "react";

class Calculator extends Component {
    state = {
        num1: '',
        num2: '',
        sum: ''
    }

    setNum = (e, num) => {
      this.setState({ [num]: parseInt(e.target.value)})
    }

    addNums = (num1, num2) => {
      this.setState({
        sum: num1+num2
      })
    }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Add with React!</h1>

          <div className="add">
            <input
              name='num1' 
              type="text" 
              value={this.state.num1}
              onChange={ (e) => this.setNum(e, 'num1')}
              />
            <span>+</span>
            <input 
              name='num2'
              type="text"
              value={this.state.num2}
              onChange={ (e) => this.setNum(e, 'num2')}
            />
            <button onClick={() => this.addNums(this.state.num1, this.state.num2)}>=</button>
            <h3>Addition results go here!</h3>
            <h3>{this.state.sum}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator;