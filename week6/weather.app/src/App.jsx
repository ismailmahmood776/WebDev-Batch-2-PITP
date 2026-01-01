import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[weather, setweather] = useState()

  const [City, setCity] = useState()

  const fetchweather = async () => {
 
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=6e01b807f634445db49104206253012&q=${City}&aqi=no`)

  const data = await response.json()

  setweather(data)

  }

  return (
    <>
    <input type="text" value={City} onChange={(event)=> setCity(event.target.value)} placeholder='Enter City Name here..' />
    <h1>{weather?.location.name}</h1>
    <h2>Temprature: {weather?.current.temp_c} °C</h2>
    <h2>Condition: <img src={weather?.current.condition.icon} />{weather?.current.condition.text} </h2>
  <button type= 'button' onClick={fetchweather}>show Weather</button>
     
    </>
  )
}

export default App
