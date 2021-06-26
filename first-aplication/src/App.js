import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Bulb from "./components/Bulb"
import Input from './components/Input';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
       <h5>{ counter }</h5>
       <button type= "button" onClick ={() => {setCounter(counter + 1); console.log(counter);}} > Uno más  </button>
       <button type= "button" onClick ={() => setCounter(counter - 1)} > Uno menos  </button>
       <Bulb />
       <Input />
      </header>
    </div>
  );
}

export default App;
