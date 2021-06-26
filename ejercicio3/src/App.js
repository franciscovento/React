import React, { useState } from 'react'
import './App.css';
import ConverterRow from "./components/ConverterRow"

function App() {


  return (
    <div>
      <ConverterRow 
      title = "Grados"
      placeholder = "Ingresa grados"
      />

    </div>
  );
}

export default App;
