import React from 'react'

const Quotes = (props) => {

    
    return (
        <div>
            <p className="phrase">{props.phrase}</p>
            <p className="author">{props.author}</p>
        </div>
    )
}

export default Quotes
