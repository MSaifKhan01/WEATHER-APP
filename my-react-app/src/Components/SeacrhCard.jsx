import React, { useState, useEffect } from 'react';
import WeatherCard from './CardTemp';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'

// import './App.css';

function WeatherSearchCard() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); 
  const navigate=useNavigate()
  
let token=localStorage.getItem("token")
// useEffect(() => {
//     handleCityChange(city)
//   }, [city]);
  
  const handleCityChange = () => {
    
    console.log(token)
    if(!token){
      
      Swal.fire("login First")
      navigate("/login")
     
    }
    
    if (city === '') return; 
    fetch(`http://localhost:4039/city?city=${city}`,{
      headers:{
        "Authorization":`${token}`
      }
    })
      .then(response => {
        if(response.statusText=="Too Many Requests"){

           Swal.fire('You Have Make Too Many Request You need to Login again');
           localStorage.removeItem("user")
           localStorage.removeItem("token")
           navigate("/login")

          console.log("don")
        }
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
