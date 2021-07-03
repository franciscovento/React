import React from 'react'

function Temperature(props) {
    return (
        <div className="temp-container">
            <h4>Temperatura</h4>
            <h5>{props.content} {props.simbol}</h5>
            <p>{props.condition}</p>
        </div>
    )
}

export default Temperature
