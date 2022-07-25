import React, { Component } from 'react';

class Calculator extends Component {
    state = {
        num1: '',
        num2: '',
        sum: 0,
    }

    //want to make a method that will intake user input into an array and reduce the array (add them)
    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }

    setSum = () => {
        const newSum = parseInt(this.state.num1) + parseInt(this.state.num2)
        // want to add both num1 and num2 together
        this.setState(() => {
            return {
                sum: newSum,
            }
        })
    }
    render() {
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
                        name="num1"
                        placeholder="Enter your first number"
                        value={this.state.num2}
                        onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    <button 
                        onClick={this.setSum}
                    >
                        =
                    </button>
                    <h3>Addition results go here: {this.state.sum}</h3>
                </div>
            </div>
        );
    }
}

export default Calculator;
