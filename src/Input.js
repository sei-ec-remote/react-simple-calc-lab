import React, { Component } from "react"


class Input extends Component {
    return() {

        <>
            <input type="number"
            name="num1"
            placeholder="Enter your first number"
            value={this.state.num1}
            onChange={ (e) => this.setNum(e, 'num1') }
            />
        </>
    }

}

export default Input