import './App.css';
import React, {Component} from "react";

class Calculator extends Component{

    state = {
        num1: 0,
        num2: 0,
        sum: ''
    }

    handleAddChange = (e) => {
        e.preventDefault()

        const inputVar = e.target.value

        this.state.num1 + this.state.num2 = sum


        this.setNum = (e, num) => {
            this.setState({ [num]: e.target.value});
        }


    }


    render (){
        return (
            <div className="container">
                <h1>Add with React!</h1>

                <input type="number"
                    name="num1"
                    placeholder="Enter your first number"
                    value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1') }
/>
<span>+</span>
                <input type="number"
                name="num2"
                placeholder="Enter your first number"
                value={this.state.num1}
                onChange={ (e) => this.setNum(e, 'num2') }
                />  


            <button onClick={() => {this.handleAddChange(this.state.num1,
            this.stat.num2)}}>=</button>
            </div>

        )
    }


}

export default Calculator