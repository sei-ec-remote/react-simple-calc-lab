import { Component } from "react"

export default class Calc extends Component {
  state = {
    num1: null,
    num2: null,
    sum: 0,
    operator: '+'
  }

  calculate = (e) => {
    e.preventDefault()
    if (this.state.num1 === null || this.state.num2 === null) return console.log('nope!')
    // this.setState({ 
    //   sum: this.state.num1 + this.state.num2 
    // })

    this.setState(prevState => {
      let operation = 0
      switch (this.state.operator) {
        case '+':
          operation = prevState.num1 + prevState.num2
          break
        case '*':
          operation = prevState.num1 * prevState.num2
          break
        case '-':
          operation = prevState.num1 - prevState.num2
          break
        case '/':
          operation = prevState.num1 / prevState.num2
          break
        default:
          console.log('I have never heard of that math before!')
          break
      }
      return {
        sum: operation
      }
    })

  }

  setNum = (e) => {
    // this.setState({ [num]: e.target.value })
    this.setState({ [e.target.name]: parseInt(e.target.value) })
    console.log(0 === true)
  }

  handleSetOp = (e) => {
    this.setState({
      operator: e.target.name
    })
  }

  render() {
    return (
      <div className="caclulator">
        <h1>Add with React!</h1>

         <form onSubmit={this.calculate}>
            <input type="number" 
                name="num1"
                value={this.state.num1 || ''}
                onChange={this.setNum}
            />
            <span>{this.state.operator}</span>
            <input type="number" 
                name="num2"
                value={this.state.num2 || ''}
                onChange={this.setNum}
            />
            <button>=</button>
            <h3>{this.state.sum}</h3>
         </form>

         <button 
          name='+'
          onClick={this.handleSetOp}
          >
            +
          </button>
    

         <button 
          name='-'
          onClick={this.handleSetOp}
          >
            -
          </button>
    

         <button 
          name='*'
          onClick={this.handleSetOp}
          >
            *
          </button>
    

         <button 
          name='/'
          onClick={this.handleSetOp}
          >
            /
          </button>
    
 
      </div>
    )
  }
}