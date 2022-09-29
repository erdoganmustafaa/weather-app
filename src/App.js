
import { useState } from 'react';
import './App.css';
import Background from './components/Background';
import SearchCity from './components/SearchCity';
import WeatherResult from './components/WeatherResult';

function App() {
  const [weatherResult , setWeatherResult] = useState({});
  
  return (
    <div className="weather-app">
      <Background/>
      <div id="title">Hava Durumu</div> 
      <SearchCity setWeatherResult={setWeatherResult}/>    
      <WeatherResult weatherResult={weatherResult}/>

    </div>
  );
}

export default App;
