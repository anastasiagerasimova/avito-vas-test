import React from 'react'
import classes from './input.module.css'

const Input = (props) => {
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`
    return(
        <div className={classes.input}>
            <input
                id={htmlFor}
                name={props.name}
                type={inputType}
                value={props.value}
                placeholder={props.placeholder}
                defaultChecked={props.checked}
                onChange={props.onChange}
                className={`${props.className} form-control form-control-sm`}
            >
            </input>
            <label htmlFor={htmlFor}>{props.label}</label>
        </div>
    )
}

export default Input