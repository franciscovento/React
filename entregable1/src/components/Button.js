import React, { useState } from 'react'


const Button = () => {

 const aleatorioButton = () =>{
    const limite = 102;
    return Math.floor(Math.random()*limite)
  };   

let [state, setState] = useState(1);

const setearEstado = () => {
    setState(state = aleatorioButton())
}

    return (
        <div>
            <button onClick={setearEstado} > Otra frase {state} </button>
            {console.log(state)}
        </div>      
    )
}

export default Button
