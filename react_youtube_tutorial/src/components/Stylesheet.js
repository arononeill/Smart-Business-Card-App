// Styling & CSS Basics - Tutorial 20
// Styling classes using condition & props
import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Styleshe ets</h1>
        </div>
    )
}

export default Stylesheet
