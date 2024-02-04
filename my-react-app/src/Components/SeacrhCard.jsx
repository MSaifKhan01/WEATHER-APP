import React, { useState } from 'react';
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
  
const handleCityChange = async () => {
  try {
    if (!token) {
      Swal.fire("Login First");
      navigate("/login");
      return;
    }

    if (city === '') return;

    const response = await fetch(`https://weather-app-sw7g.onrender.com/city?city=${city}`, {
      headers: {
        "Authorization": `${token}`
      }
    });

    if (response.statusText === "Too Many Requests") {
      Swal.fire('You Have Made Too Many Requests. Please Login again');
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/login");
      return;
    }

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log("Response data:", data);
    setWeatherData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Weather App</h1>

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
