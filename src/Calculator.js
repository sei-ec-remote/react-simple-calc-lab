import React, { Component, component } from 'react'

class Calculator extends Component {
    state = {
        num1: null,
        num2: null,
        sum: null
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }

    findSum = () => {
        this.setState((prevState, prevProps) => {
            return {
                sum: parseFloat(prevState.num1) + parseFloat(prevState.num2)
            }
        })
    }

    render () {
        return (
            <div className="container">
                <h1>Add with React!</h1>
    
                <div className="add">
                    <input type="number"
                        name="num1"
                        placeholder="Enter first number"
                        value={this.state.num1}
                        onChange={ (e) => this.setNum(e, 'num1') }
                    />
                    <span>+</span>
                    <input type="number"
                        name="num2"
                        placeholder="Enter second number"
                        value={this.state.num2}
                        onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    <button onClick={this.findSum}>=</button>
                    <h3>{this.state.sum}</h3>
                </div>
            </div>
        );
    }
    
}

export default Calculator;