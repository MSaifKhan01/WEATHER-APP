import React from 'react';

function WeatherCard({ data }) {
//   const { name, main, weather } = data;

  return (
    <div className="weather-card">
      <h2>{data.location.name}</h2>
      <div>
        <p>Temperature: {data.current
.temp_c}°C</p>
        <p>Humidity: {data.current.humidity}%</p>
        {/* <p>Weather: {weather[0].description}</p> */}
        <img src={data.current.condition.icon} alt="" />

      </div>
    </div>
  );
}

export default WeatherCard;
