import React from 'react'

function Button(props) {
    return (
        <div style ={{
            display: "flex",
            justifyContent: "Center"
        }}>
            <button onClick={props.onClick} className="btn">{props.content}</button>
        </div>
    )
}

export default Button
