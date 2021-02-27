// Types of React If Else Statements - Tutorial 16
// JSX Version of an If Else Statement - Best Approach
import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    render() {        
        
        return this.state.isLoggedIn && <div>Welcome A-Ron</div>

        // JSX Version of an If Else Statement - Best Approach
        // this.state.isLoggedIn ? (
        //     <div>Welcome A-Ron</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // )

        // let message
        // If statements do not work inside JSX (div tags)
        // if (this.state.isLoggedIn) {
        //     return <div> Welcome A-Ron </div>
        // }
        // else {
        //     message = <div> Welcome Fella </div>
        // }

        // return <div>{message}</div>

        // return (
        //     <div>
        //         <div>Welcome A-Ron</div>
        //         <div>Welcome Fella</div>
        //     </div>
        // )
    }
}

export default UserGreeting
