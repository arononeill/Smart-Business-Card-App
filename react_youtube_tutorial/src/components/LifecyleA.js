// Component Mounting Lifecycle Methods - Tutorial 23 & 24
// ComponetDidMount() is ran after the child component has completed rendered
// Console Logs are shown in order of LifeCyleA methods, LifeCycle B methods, LifecycleADidMount, LifecycleBDidMount
// ShouldComponentUpdate() gets ran before their component's render method.
import React, { Component } from 'react'
import LifecyleB from './LifecycleB'

class LifecyleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Aron'
        }
        console.log('Lifecyle A Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCyleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA ConsoleDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }

    render() {
        console.log('LifecycleA Render()')
        return (
            <div>
                <div>LifecycleA</div>        
                <button onClick={this.changeState}>Change State</button>   
                <LifecyleB/>
            </div>
        )
    }
}

export default LifecyleA
