import React, { useState } from 'react'


const SearchBox = ({ onSearch}) => {
  
const [value, setValue] = useState('');

  return (
    <div className='SearchBox'>
        <input valuue={value} onChange={(e)=>{
          setValue(e.target.value)
        }} />
        <button onClick= {() =>{
          onSearch(value)
        }} >Search</button>
    </div>
  )
}

export default SearchBox
