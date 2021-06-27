import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



const Button = (props) => {

    return (
        <div>
            <button className= "next-phrase" 
            onClick={props.onClick} 
            style={props.background} > 
            <FontAwesomeIcon icon = {props.icon}/> {props.title} 
            </button>
        </div>      
    )
}

export default Button
