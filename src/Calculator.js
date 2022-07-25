import React, { Component } from 'react'

export default class Calculator extends Component {

    state = {
        numberA: 0,
        numberB: 0,
        sum: ''
    }

    setNum = (e, num) => {
		this.setState({ 
			[num]: e.target.value
		})
	}

    addThem = (numberA, numberB) => {
        let integerA = Number(numberA)
        let integerB = Number(numberB)
        let sum = integerA + integerB

        this.setState({
            sum: sum
        })
    }

  render() {
    return (
        <div className="container">
        <h1>Add with React!</h1>
      
        <div className="add">
            <input 
				type="number"
				name="numberA" 
				placeholder="Enter your first number" 
				value={this.state.numberA}
				onChange={ (e) => this.setNum(e, 'numberA')}
				 />
          <span>+</span>
          <input 
				type="number"
				name="numberB" 
				placeholder="Enter your second number" 
				value={this.state.numberB}
				onChange={ (e) => this.setNum(e, 'numberB')}
				 />
          <button onClick={() => this.addThem(this.state.numberA, this.state.numberB)}>=</button>
          <h3>Addition results go here!: {this.state.sum}</h3>
        </div>
      </div>
    )
  }
}
