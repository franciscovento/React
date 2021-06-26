import React, { useState } from 'react'
import Data from '../quotes.json'

const Quotes = () => {
    
    const aleatorioButton = () =>{
        const limite = 102;
        return Math.floor(Math.random()*limite)
      };   
    
    let [state, setState] = useState(Math.floor(Math.random()*102));
    
    const setearEstado = () => {
        setState(state = aleatorioButton())
    
    }
    
    const author = Data.quotes[state]["author"];
    const phrase = Data.quotes[state]["quote"];


    return (
        <div>
            <p className="phrase">{phrase}</p>
            <p className="author">{author}</p>
            <button onClick={setearEstado} > Otra frase {state} </button>
        </div>
    )

}

export default Quotes
