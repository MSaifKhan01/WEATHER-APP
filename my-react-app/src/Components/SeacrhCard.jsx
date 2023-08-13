import React, { useState, useEffect } from 'react';
import WeatherCard from './CardTemp';
// import './App.css';

function WeatherSearchCard() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); 

console.log("hi")
// useEffect(() => {
//     handleCityChange(city)
//   }, [city]);
  
  const handleCityChange = () => {
 
    if (city === '') return; 
    fetch(`http://localhost:4039/city?city=${city}`)
      .then(response => {
        if (!response.ok) {
          console.log(response)
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setWeatherData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className='searchCont'>
      <div >
        <input className='inputTag'
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleCityChange}>Search</button>
      </div>
      
      </div>
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default WeatherSearchCard;
