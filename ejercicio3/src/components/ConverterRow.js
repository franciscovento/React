import React, { useState } from 'react'


export default function ConverterRow(props) {
    const toRadian = (grades) => {
        return grades * 0.01745;
      };
    
      const toDegrees= (radians) => {
        return radians * 57.296;
      };

    const [value, setValue] = useState(1);
   
   
    return (
        <div>
        <h1>{props.title}</h1>
        <input type ="number" className="inputs" value ={value} onChange={e => setValue(e.target.value)} placeholder = {props.placeholder} />
        <input type ="number" className="inputs" value ={toRadian(value)} onChange={e => setValue(e.target.value)} placeholder = {props.placeholder} />
    </div>
    )
}
