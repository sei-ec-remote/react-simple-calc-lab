import React, { Component } from 'react'

class Calculator extends Component {
    state = {
        num1: '',
        num2: '',
        sum: ''
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
      }

    getSum = (e, num1, num2) => {
        e.preventDefault()
        this.setState(() => {
            return {
                sum: Number(num1) + Number(num2)
            }
        })

    }

    render () {
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <div className="add">
                    <input 
                        type='number'
                        name='num1'
                        placeholder='Enter your first number'
                        value={this.state.num1}
                        onChange={ (e) => this.setNum(e, 'num1')}
                    />
                    <span>+</span>
                    <input 
                        type='number'
                        name='num2'
                        placeholder='Enter your second number'
                        value={this.state.num2}
                        onChange={ (e) => this.setNum(e, 'num2')}
                    />
                    <button onClick={ (e) => this.getSum(e, this.state.num1, this.state.num2)}>=</button>
                    <h3>{this.state.sum}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator