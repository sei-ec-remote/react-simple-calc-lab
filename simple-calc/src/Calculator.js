import React, { Component } from 'react'

class Calculator extends Component {
  state = {
    num1: 0,
    num2: 0,
    sum: 0,
  }
  setNum = (e, num) => {
    this.setState({[num]:e.target.value});
  }
  addNumbers = (num1, num2) => {
    let number1 = parseInt(num1)
    let number2 = parseInt(num2)
    let sum = (number1 + number2)
    this.setState({ sum: sum })
  }

  render() {
    return (
      <div className='container'>
        <h1>Add with React!</h1>
        
        <div className='add'>
          <input type='number'
                name='num1'
                placeholder="enter your first number"
                value={this.state.num1}
                onChange={(e) => this.setNum(e, 'num1')}
                />
              <span>+</span>
          <input type='number'
                name='num2'
                  placeholder='enter your second number'
                  value={this.state.num2}
                  onChange={(e) => this.setNum (e, 'num2')}
                  />
                  <button>=</button>
                  <h3>Addition results go here!</h3>
        </div>
      </div>  
    )
  }
}

export default Calculator