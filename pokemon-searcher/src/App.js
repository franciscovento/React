import './App.css';
import { useEffect, useState } from 'react'

function App() {

const [data, setData] = useState(null);
const [currentPokemon, setCurrentPokemon ] = useState("pikachu")
  
  useEffect(() =>{
   const getData = async () =>{
      let url = "https://pokeapi.co/api/v2/pokemon/" + currentPokemon;
      const response = await fetch(url).then(res => res.json())
      console.log(response)
      setData(response)
    }
    getData();
  },[])

const setPokemon = () =>{

}


  return (
    <div className="App">

      <h1>{currentPokemon}</h1>
      <input type="text" value= {currentPokemon} onInput={e => {
          const text = e.target.value
          setCurrentPokemon(text)
        }} />
      <button onClick = {setPokemon} >Buscar</button>
      


    </div>
  );
}

export default App;
