import React from 'react'

function Button(props) {
    return (
        <div>
            <button onClick={props.onClick} className="btn">{props.content}</button>
        </div>
    )
}

export default Button
