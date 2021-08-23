import './App.css';
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"


function App() {

const [quotes, setQuotes] = useState();

const {register, handlesubmit } = useForm()  


  return (
    <div className="App">
<h1>Hola mundo</h1>
    </div>
  );
}

export default App;
