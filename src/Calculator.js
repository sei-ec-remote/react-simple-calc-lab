import React, {Component} from 'react'

class Calculator extends Component {
    state = {
        firstNumber: '',
        secondNumber: '',
        sum: ''
    }

    // handleFirstNumberChange = (event) => {
    //     event.preventDefault()
    //     const newNumber = event.target.value
    //     this.setState(() => {
    //         return {
    //             firstNumber: Number(newNumber)
    //         }
    //     })
    // }

    // handleSecondNumberChange = (event) => {
    //     event.preventDefault()
    //     const newNumber = event.target.value
    //     this.setState(() => {
    //         return {
    //             secondNumber: Number(newNumber)
    //         }
    //     })
    // }

    handleSetNum = (event, num) => {
        const newNumber = Number(event.target.value)
        this.setState({[num]: parseInt(newNumber)})
    }

    render () {
        return (
            <div className="container">
                <h1>Add with React!</h1>
                <div className="add">
                    <input type="text" name="firstNumber" value={this.state.firstNumber} onChange={(event) => this.handleSetNum(event, 'firstNumber')}/>
                    <span>+</span>
                    <input type="text" name="secondNumber" value={this.state.secondNumber} onChange={(event) => this.handleSetNum(event, 'secondNumber')}/>
                    {/* <input type="text" value={this.state.secondNumber} onChange={this.handleSecondNumberChange}/> */}
                    <button>=</button>
                    <h3>Addition results go here!</h3>
                    <h1>{this.state.firstNumber + this.state.secondNumber}</h1>
                </div>
            </div>
        )
    }
}

export default Calculator