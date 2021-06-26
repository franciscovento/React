import './App.css';
import Quotes from './components/Quotes';
import Button from './components/Button';
import { useState } from 'react'
import Data from './quotes.json'




function App() {

  const aleatorioButton = (x) =>{
    const limite = x;
    return Math.floor(Math.random()*limite)
  };   

const [state, setState] = useState(Math.floor(Math.random()*102));


const setearEstado = () => {
    const num = aleatorioButton(102)
    setState(num)
}

const author = Data.quotes[state]["author"];
const phrase = Data.quotes[state]["quote"];

const color = {
  1: "#845EC2",
  2: "#FF9671",
  3: "#FFC75F",
  4: "#FF6F91",
  5:"#0089BA",
  6: "#2C73D2",
  7: "#FF8066",
  8:"#00C9F8",
  9: "#68EDCB",
  10: "#FFD489"
}

const ale = aleatorioButton(10);


  return (
    <div className="App" style={{background: color[ale]}} >
      <div className="Container">
        <Quotes 
          phrase = {phrase} 
          author = {author}
        />
        <Button 
          onClick = {setearEstado}
          title = "Siguiente"
          background = {{background: color[ale]}}
        /> 
      </div> 
    </div>
  );
}

export default App;
