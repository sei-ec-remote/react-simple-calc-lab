import React, { Component } from "react";

class Calculator extends Component{
    state = {
        num1: " ",
        num2: " ",
        sum: " ",
        
    }
    setNum = (e, num) => {
        this.setState({ [num]: e.target.value });
    }
    setSum = (num1, num2) => {
        let number1 = parseInt(num1)
        let number2 = parseInt(num2)
        let sum = number1 + number2;
        this.setState({ sum: sum })
    }
    setMultiply = (num1, num2) => {
        let number1 = parseInt(num1)
        let number2 = parseInt(num2)
        let sum = number1 * number2;
        this.setState({ sum: sum })
    }
    setDivision = (num1, num2) => {
        let number1 = parseInt(num1)
        let number2 = parseInt(num2)
        let sum = number1 / number2;
        this.setState({ sum: sum })
    }
    setSubtract = (num1, num2) => {
        let number1 = parseInt(num1)
        let number2 = parseInt(num2)
        let sum = number1 - number2;
        this.setState({ sum: sum })
    }

    render() {
        return (
            < div className = "container" >
                <h1>Add with React!</h1>
                <div className="add">
                    <input type="number"
                        name="num1"
                        placeholder="Enter A Number here"
                        value={this.state.num1}
                        onChange={(e) => this.setNum(e, 'num1')}
                    />
                    <div>
                    <button onClick={(e) => this.setSum(this.state.num1, this.state.num2)}>+</button>
                    <button onClick={(e) => this.setSubtract(this.state.num1, this.state.num2)}>-</button>
                    <button onClick={(e) => this.setMultiply(this.state.num1, this.state.num2)}>*</button>
                    <button onClick={(e) => this.setDivision(this.state.num1, this.state.num2)}>/</button> 
                    </div>
                    

                    <input type="number"
                        name="num2"
                        placeholder="Enter A Number here"
                        value={this.state.num3}
                        onChange={(e) => this.setNum(e, 'num2')}
                    />
                    
                    <span> = </span>
                    <h3>{this.state.sum}</h3>
                </div>
            </div >
        )
    }
}
export default Calculator