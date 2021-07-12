import { useEffect, useState } from 'react';
import './App.css';
import InformationWorld from './components/InformationWorld';
import ResidentsContainer from './components/ResidentsContainer';
import SearchBox from './components/SearchBox';
import { getResidentsInfo } from './services/getResidentInfo';
import { getResidentsLocation } from './services/getResidentsLocation'

function App() {

  const [data, setData] = useState([])
  const [locationTerm, setlocationTerm] = useState('earth')
  const [caracterIds, getCaracterIds] = useState([])
  const [caracterInfo, setCaracterInfo] = useState([])
  const [info, setInfo] = useState([])
  const [infoWorld, setInfoWorld] = useState(["Dimension C-137", "Earth (C-137)", "Planet"])
  

useEffect(() => {
if (caracterInfo !== [] && caracterInfo.length <= 10) {
  let list = caracterInfo.map((value) => <ResidentsContainer key={value.id} name ={value.name} status={value.status} img={value.image} gender={value.gender} episodes={value.episode.length}/>)
  setInfo(list)
}

},[caracterInfo])


  useEffect(() => {

    if (locationTerm) {
      const func = async () =>{
        const resp = await getResidentsLocation(locationTerm)
        if (resp.results !== undefined) {
          setData(resp.results[0].residents)
          let arrayInfo = [resp.results[0].dimension, resp.results[0].name, resp.results[0].type]
         setInfoWorld(arrayInfo)
        }else{
          setData(null)
        }
      }
      func(); 
    }
  },[locationTerm])

  useEffect(() => {

    if (caracterIds) {
      const func = async () =>{
        const resp = await getResidentsInfo(caracterIds)
        setCaracterInfo(resp)
      }
      func(); 
    }
  },[caracterIds])


  useEffect(()=>{
    if (data) {
      const getIdResidents = () =>{
        let residentsInfo = []
        for (let i = 0; i < data.length; i++) {
          let element = data[i];
          if (i < 10) {
            let urlData = element.split('/')
            residentsInfo.push(urlData[urlData.length - 1])
          }
        }
        getCaracterIds(residentsInfo)
      }
      getIdResidents()
    }
    
  },[data])


  const handleSearch = (query) =>{
    setlocationTerm(query)
  }




  return (
    <div className="App">
      <header className="App-header">
      <SearchBox onSearch={handleSearch}/>
      {data ?
      <h1 style={{textAlign: 'center' , color: 'white', backgroundColor: 'black', padding: '5px' , marginTop: '10px'}}>Ingresa un planeta para ver los residentes</h1>
        :
        <h1 style={{textAlign: 'center' , color: 'white', backgroundColor: 'black', padding: '5px' , marginTop: '10px'}}>Lo sentimos, ese planeta no existe... por ahora...</h1>
      }
      </header>
      <InformationWorld dimension={infoWorld[0]} name={infoWorld[1]} type={infoWorld[2]} />
      <div className='containerCards'>
      {info}
      </div>
    </div>
  );
}

export default App;
