import React from 'react'

function Ubication(props) {
    return (
        <div className = "ubication-container">
            <p>{props.locationName} - {props.city}, {props.country}</p>
        </div>
    )
}

export default Ubication
