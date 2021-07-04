import './App.css';
import {useState, useEffect} from 'react'
import Title from './components/Title'
import Temperature from './components/Temperature';
import Ubication from './components/Ubication';
import ItemWeather from './components/ItemWeather';
import Button from './components/Button';
import DayVideo from './components/video/background-weahterapp-day.mp4';
import NigthVideo from './components/video/background-weahterapp-nigth.mp4'
import PuffLoader from "react-spinners/PuffLoader";


function App() {

const [loading, setLoading] = useState(false);
const [latitude, getCurrentLatitude] = useState(null);
const [longitude, getCurrenLongitude] = useState(null);
const [data, setData] = useState([]);
const [typeDegrees, setTypeDegrees] = useState(true);
const [videoBackground, setVideoBackground] = useState(DayVideo);


useEffect(() => {
  if (latitude == null && longitude == null) {
    setLoading(true)
  } else{
    setLoading(false)
  }

}, [latitude, longitude])



useEffect(() => {
if (latitude !== null && longitude !== null) {
  let apiKey = "ada4f8d047a9437b9dd11847210207"
  let url = "https://api.weatherapi.com/v1/current.json?key="+apiKey+"&q="+ latitude + ","+ longitude + "&aqi=no"
  const getData = async () =>{
    const response = await fetch(url).then(res => res.json())
    let arrayData = [response.location.country, response.location.name, response.location.region, response.location.localtime, response.current.condition.text, response.current.humidity, response.current.temp_c, response.current.temp_f, response.current.cloud, response.current.condition.icon, response.current.wind_kph, response.current.is_day ]
    setData(arrayData)
  }
  getData();
}


},[latitude, longitude])


useEffect(() => {
  navigator.geolocation.getCurrentPosition(get_location, geo_error);
}, [])

const get_location = position => {
  getCurrentLatitude(position.coords.latitude);
  getCurrenLongitude(position.coords.longitude);
}

const geo_error = () => {
  alert("Lo sentimos, no existe una geolocalización disponible");
}

const country = data[0];
const locationName = data[1];
const city = data[2];
const conditionTime = data[4];
const humidity = data[5];
const tempC = data[6];
const tempF = data[7];
const cloud = data[8];
const iconTime = data[9];
const windKph = data[10];
const isDay = data[11];



const buttonDegrees = ()=>{
    setTypeDegrees(!typeDegrees)
}

let temperature = tempC
let simbol = "°C"
if (typeDegrees) {
  temperature = tempC;
  simbol = "°C"
} else{
  temperature = tempF;
  simbol = "°F"
}



useEffect(() => {
  if (isDay === 1) {
   setVideoBackground(DayVideo)
  
  }else{
   setVideoBackground(NigthVideo)
 
  }

 },[isDay])



  return (
    <div className="App" >
     
      <video autoPlay loop muted
      style = {{
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: "-1"
      }}
      >
        <source src = {videoBackground} type="video/mp4" />
      </video>
      <div className="container">
      { loading?
        <PuffLoader 
        color={"#0073db"} 
        loading={loading} 
        size={75} />
        :
      <div>
        <Title title = "ClimApp"  src={iconTime} />
        <Ubication country = {country} city= {city} locationName = {locationName} />
        <div className="items-content">
        <ItemWeather title="Humedad" content={humidity} text="%" />
        <ItemWeather title="Nubes" content={cloud} text="%" />
        <ItemWeather title="Viento" content={windKph} text=" Kph" />
        </div>
        <Temperature content={temperature} simbol={simbol} condition={conditionTime}/>
        <Button content= "Celcius / Farenheit" onClick = {buttonDegrees} />
        </div>
    }
     </div>
    </div>
  );
}

export default App;
