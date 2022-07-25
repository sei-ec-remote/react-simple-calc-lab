import React, { Component } from "react";

class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0,
        result: 0
    }
    
    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }
    
    setResult = (num1, num2) => {
        let number1 = parseInt(num1)
        let number2 = parseInt(num2)
        let result = (number1 + number2)
        this.setState({ result: result })
    }
    
    render () { 
        return (
            <>
                <div className="container">
                    <h1>Add with React!</h1>
                        <div className="add">
                        <input 
                            type="number" 
                            name="num1"
                            placeholder="Enter your first number"
                            value={this.state.num1}
                            onChange={ (e) => this.setNum(e, 'num1') }
                        />
                            <span>+</span>
                        <input 
                            type="number" 
                            name="num1"
                            placeholder="Enter your first number"
                            value={this.state.num1}
                            onChange={ (e) => this.setNum(e, 'num1') }
                        />                            
                        <button 
                            onClick={() => this.setResult(this.state.num1, this.state.num2)}>=</button>
                            <h3>{this.state.result}</h3>
                        </div>
                </div>
            </>
        )
    }
}

export default Calculator