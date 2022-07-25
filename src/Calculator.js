// import React and Component 
// step 1: create a basic class component
import React, { Component } from 'react'
class Calculator extends Component {

    // step 2: setup the inital state of the component
    state = {
        num1: 0,
        num2: 0,
        sum: 0,
    }
    // step 3: 
    // step 4: trigger a function when a button is clicked
    
    setNum = (e, num) => {
        this.setState({ [num]: e.target.value})
    }

    getSum = (e, num1, num2) => {
        e.prevenDefault()
        this.setState(() => {
            return {
                sum: Number(num1) + Number (num2)
            }
        })
    }
    
    render () {
        return (
            <div className="container">
                <h1>Add with React!</h1>
                
                <div className="add">
                    <input 
                        type="number"
                        name="num1"
                        placeholder="Enter your first number"
                        value={this.state.num1}
                        onClick={ (e) => this.setNum(e, 'num1') }
                    />
                    <span>+</span>
                    <input 
                        type="number"
                        name="num1"
                        placeholder="Enter your first number"
                        value={this.state.num1}
                        onClick={ (e) => this.setNum(e, 'num2') }
                    />
                    <button onClick={(e) => this.getSum(this.state.num1, this.state.num2)}>=</button>
                    <h3>{this.state.sum}</h3>
                </div>
            </div>
        )
    }    
}