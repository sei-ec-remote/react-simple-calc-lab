import React, { Component } from 'react'


class Calculator extends Component {
    state = {
        num1: null,
        num2: null,
        result: 0
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }

    setResult = (num1, num2) => {
        let number1 = parseInt(num1)
        let number2 = parseInt(num2)
        let result = (number1 + number2)
        this.setState({result: result})
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
                onChange={(e) => this.setNum(e, 'num1')}
                />
                <span>+</span>

                <input type="number"
                name="num2"
                placeholder="Enter your second number"
                value={this.state.num2}
                onChange={(e) => this.setNum(e, 'num2')}
                />
                <button
                    onClick={() => this.setResult(this.state.num1, this.state.num2)}>=</button>
                <h3>{this.state.result}</h3>
            </div>
        </div>
        

    )}
}

export default Calculator