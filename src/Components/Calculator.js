import React, { Component } from 'react'

class Calculator extends Component {
    // will only need one state
    state = {
        // set the state = to types based on given JSX
        num1: 0,
        num2: 0,
        sum: ''
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value })
    }

    setSum = (num1, num2) => {
        let number1 = parseInt(num1, 10)
        let number2 = parseInt(num2, 10)
        let sum = (number1 + number2)
        this.setState({ sum })
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
                    <button onChange={ () => this.setSum(this.state.num1, this.state.num2)}>=</button>
                    <h3>{this.state.sum}</h3>
                </div>
            </div>        
        )
    }
}


export default Calculator

