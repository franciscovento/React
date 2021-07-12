import React from 'react'

function ResidentsContainer({name, status, gender, img, episodes }) {
  return (
    <div className='ResidentsContainer'>
        <div>
        <img src={img} alt={name} />
        </div>
        <div className='contentContainer' style={{backgroundColor: '#e7e5e5', width:'300px'}}>
            <p><strong >Name:</strong>  {name}</p>
            <p><strong >Status:</strong>  {status}</p>
            <p><strong >Gender: </strong> {gender}</p>
            <p><strong >Episodes:</strong> {episodes}</p>
        </div>   
    </div>
  )
}

export default ResidentsContainer
