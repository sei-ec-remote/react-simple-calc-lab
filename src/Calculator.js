import React, { Component } from 'react'

class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0,
        sum: ''
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
      }

    addNumbers = (num1, num2) => {
        let number1 = Number(num1)
        let number2 = Number(num2)
        let sum = number1 + number2
        this.setState({
            sum: sum
        })
    }
    render () {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                <input type="number"
                    name="num1"
                    placeholder="Enter your first number"
                    value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1') }
                />
                <span>+</span>
                <input type="number"
                    name="num2"
                    placeholder="Enter your second number"
                    value={this.state.num2}
                    onChange={ (e) => this.setNum(e, 'num2') }
                />
                <button onClick={() => this.addNumbers(this.state.num1, this.state.num2)}>=</button>
                <h3>Addition results: {this.state.sum}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator