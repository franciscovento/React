import React from 'react'

function InformationWorld({dimension, name, type}) {
  return (
    <div className='infoWorlds'>
            <p><strong >Name:</strong>  {name}</p>
            <p><strong >Dimension:</strong>  {dimension}</p>
            <p><strong >type: </strong> {type}</p>
    </div>
  )
}

export default InformationWorld
