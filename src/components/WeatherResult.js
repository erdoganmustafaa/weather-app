import React from 'react'

function WeatherResult({weatherResult}) {
    
  return (
    <>
    {weatherResult.name && (
    <div className='weather'>
        <div className='city'>{weatherResult.name}</div>
        <div className='city-detail'>
            <div className='temperature'>{Math.round(weatherResult.main.temp)}°C</div>
            <div className='status'>Min °C : {weatherResult.main.temp_min}</div>
            <div className='status'>Max °C : {weatherResult.main.temp_max}</div>
            <div className='status'>{weatherResult.weather[0].description.toUpperCase()}</div>
        </div>
     
   
    </div>)
    }
    </>
  )
 
}

export default WeatherResult