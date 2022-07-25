import React, { Component } from 'react'

export default class Calculator extends Component {
     state = {
          numberOne: 0,
          numberTwo: 0,
          results: null
     }
     handleNumberOne = (e) => {
          this.setState(() => {
          return {
               numberOne: e.target.value
          }
      })
     }
     handleNumberTwo = (e) => {
          this.setState(() => {
          return {
               numberTwo: e.target.value
          }
      })
     }
     submitCalulator = (e) => {
          e.preventDefault()

          const answer = parseInt(this.state.numberOne) + parseInt(this.state.numberTwo) 
          this.setState(()=>{return {results: answer}})
     }
     displayResalts = () => {
          if (this.state.results) {
               return <h3>{this.state.results}!</h3>
          }
     }
     render() {
          return (
               <div className="container">
                    <h1>Add with React!</h1>
                    <div className="add">
                         <input 
                              type="number" 
                              // value={this.state.numberOne}
                              onChange={this.handleNumberOne}/>
                         <span>+</span>
                         <input 
                              type="number" 
                              // value={this.state.numberTwo}
                              onChange={this.handleNumberTwo}
                          />
                         <button onClick={this.submitCalulator}>=</button>
                         {this.displayResalts()}
                         
                    </div>
               </div>
          )
     }
}