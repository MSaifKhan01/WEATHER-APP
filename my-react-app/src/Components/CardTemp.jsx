



import React, { useState, useEffect } from 'react';

import { 
  Cloud, 
  Sun, 
  CloudRain, 
  
  MapPin,

  Droplets,
  Clock,
 
} from 'lucide-react';


// Modern Weather Card Component
const WeatherCard = ({ data }) => {

  const getWeatherIcon = (condition) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('sun') || conditionLower.includes('clear')) {
      return <Sun className="h-16 w-16 text-yellow-400" />;
    } else if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
      return <CloudRain className="h-16 w-16 text-blue-400" />;
    } else {
      return <Cloud className="h-16 w-16 text-gray-400" />;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 transform hover:scale-105 transition-all duration-300">
      <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 rounded-2xl shadow-2xl">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              {data.current.condition.icon ? (
                <img 
                  src={data.current.condition.icon} 
                  alt={data.current.condition.text}
                  className="h-16 w-16"
                />
              ) : (
                getWeatherIcon(data.current.condition.text)
              )}
            </div>
            <h2 className="text-2xl font-bold flex items-center justify-center">
              <MapPin className="h-5 w-5 mr-2" />
              {data.location.name}
            </h2>
            <p className="text-white/80">{data.location.country}</p>
          </div>

          {/* Temperature */}
          <div className="text-center mb-6">
            <div className="text-5xl font-light mb-2">{data.current.temp_c}°</div>
            <div className="text-white/80">Feels like {data.current.feelslike_c}°C</div>
            <div className="text-sm text-white/70 mt-1">{data.current.temp_f}°F</div>
          </div>

          {/* Weather Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-3 text-center">
              <Droplets className="h-5 w-5 mx-auto mb-1 text-blue-300" />
              <div className="text-xs text-white/80">Humidity</div>
              <div className="font-semibold">{data.current.humidity}%</div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-3 text-center">
              <Clock className="h-5 w-5 mx-auto mb-1 text-green-300" />
              <div className="text-xs text-white/80">Local Time</div>
              <div className="font-semibold text-xs">{new Date(data.location.localtime).toLocaleTimeString()}</div>
            </div>
          </div>

          {/* Condition */}
          <div className="mt-4 text-center">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-lg font-medium">{data.current.condition.text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};





export default WeatherCard;

