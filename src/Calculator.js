import React, { Component } from 'react'

class Calculator extends Component{
    state = {
        num1: '',
        num2: '',
        sum: ''
    }
    setNum = (e,num) => {
        this.setState({[num]:parseInt(e.target.value)})
    }
    addNum = (num1, num2) => {
        this.setState({
            sum:num1+num2
        })
    }
    render() {
        return (
            <div className="container">
            <h1>Add with React!</h1>
          
            <div className="add">
                    <input
                        type="text"
                        name='num1'

                        onChange={(e)=>{
                            this.setNum(e,"num1")
                        }}
                    />
              <span>+</span>
                    <input
                        type="text"
                        name="num2"
                        onChange={(e) => {
                            this.setNum(e,'num2')
                        }}
                    />
              <button onClick={()=>this.addNum(this.state.num1,this.state.num2)}>=</button>
                    <h3>Addition results go here!</h3>
                    <h2>{this.state.sum}</h2>
            </div>
          </div>
        )
    }
}
export default Calculator