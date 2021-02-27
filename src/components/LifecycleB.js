// Component Mounting Lifecycle Methods - Tutorial 23 & 24
// ComponetDidMount() is ran after the child component has completed rendered
// Console Logs are shown in order of LifeCyleA methods, LifeCycle B methods, LifecycleADidMount, LifecycleBDidMount
// ShouldComponentUpdate() gets ran before their component's render method.
import React, { Component } from 'react'

class LifecyleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Aron'
        }
        console.log('LifecyleB Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecyleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA ConsoleDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }
    
    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }

    render() {
        console.log('LifecycleB Render()')
        return (
            <div>
                LifecycleB     
            </div>
        )
    }
}

export default LifecyleB
