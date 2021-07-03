import React from 'react'

function ItemWeather(props) {
    return (
        <div style={{textAlign: 'center'}}>
            <h4>{props.title}</h4>
            <div>{props.content}{props.text}</div>
        </div>
    )
}

export default ItemWeather
