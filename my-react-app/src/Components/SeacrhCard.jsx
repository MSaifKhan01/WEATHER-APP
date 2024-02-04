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
  
  const handleCityChange = () => {
    
    console.log("yvv",token)
    if(!token){
      
      Swal.fire("login First")
      navigate("/login")
     
    }
    console.log("city is : ",city)
    
    // if (city === '') return; 
    fetch(`https://weather-app-sw7g.onrender.com/city?city=${city}`,{
      headers:{
        "Authorization":`${token}`
      }
    })
      .then(response => {
        console.log("fhvn ")
        if(response.statusText==="Too Many Requests"){

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
        
        
        
        let res= response.json();
        console.log("Res : ",res)
        return res;
      })
      .then(data => {
        console.log("cgcgc",data);
       
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
