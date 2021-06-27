import './App.css';
import Quotes from './components/Quotes';
import Button from './components/Button';
import { useState } from 'react'
import Data from './quotes.json'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'


function App() {

  const aleatorioButton = (x) =>{
    const limit = x;
    return Math.floor(Math.random()*limit)
  };   

const [state, setState] = useState(Math.floor(Math.random()*102));


const setearEstado = () => {
    const num = aleatorioButton(102)
    setState(num)
}

const author = Data.quotes[state]["author"];
const phrase = Data.quotes[state]["quote"];



const color = {
  0: "#845EC2",
  1: "#FF9671",
  2: "#FFC75F",
  3: "#FF6F91",
  4: "#0089BA",
  5: "#2C73D2",
  6: "#FF8066",
  7: "#00C9F8",
  8: "#68EDCB",
  9: "#FFD489"
}

const ale = aleatorioButton(10); 

function shareOnTwitter() {
  let url = "https://twitter.com/intent/tweet?text=" + phrase + " - "+ author;
  window.open(url, '_blank').focus();
 }

 
                                     
  return (
    <div className="App" style={{background: color[ale]}} >
      <div className="Container">
        <Quotes 
          phrase = {phrase} 
          author = {author}
        />
        <div className = "buttons-container">
        <Button 
          onClick = {() => shareOnTwitter()}
          title = "Share on Twitter"
          background = {{background: color[ale]}}
          icon = {faTwitter}
        /> 

        <Button 
          onClick = {setearEstado}
          title = "New Quote"
          background = {{background: color[ale]}}
          icon = {faCaretRight}
        /> 

        
        </div>
      </div> 
    </div>
  );
}

export default App;
