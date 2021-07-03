import React from 'react'

function Title(props) {
    return (
        <div className="title-container">
            <img src={props.src} alt="" />
           <h1 className="title-app">{props.title}</h1>
        </div>
    )
}

export default Title
