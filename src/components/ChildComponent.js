// Calling a Parent Component function via the Child Component - Tutorial 15
// Pass the method as a prop from child to parent
import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
 