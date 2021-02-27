
// Diifferent Ways of Binding Event Handlers - Tutorial 14
// Binding in the constrcutor or the is the best approach (#3)
// Approach 4 was an experimental feature at the time of this tutorial
import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello' 
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
    }
    

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
