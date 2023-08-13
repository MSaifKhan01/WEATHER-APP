import React from 'react';

function WeatherCard({ data }) {
//   const { name, main, weather } = data;

  return (
    <div className='mainCont'>
    <div className="weather-card">
      <img src={data.current.condition.icon} alt="" />
      <h2>{data.location.name}</h2>
      <div>
        <p>Temperature: {data.current.temp_c}°C , {data.current.temp_f} F </p>
        
        <p>Humidity: {data.current.humidity}%</p>

        <p>Local Time: {data.location.localtime}</p>
        {/* <p>Weather: {weather[0].description}</p> */}
        

      </div>
    </div>
    </div>
  );
}

export default WeatherCard;
