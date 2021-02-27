import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        // Destucturing Props & State - Tutorial 12
        const {name, heroName} = this.props
        // const {state1, state2} = this.state
        return <h1>
            Welcome {name} , {heroName}
        </h1>
    }
}

export default Welcome