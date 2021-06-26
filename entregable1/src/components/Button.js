import React from 'react'


const Button = (props) => {

    return (
        <div>
            <button className= "next-phrase" onClick={props.onClick} style={props.background} > {props.title} </button>
        </div>      
    )
}

export default Button
