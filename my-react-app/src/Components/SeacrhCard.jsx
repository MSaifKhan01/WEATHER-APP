

// import { 
//   Cloud, 

//   Search, 
 
//   MapPin,


// } from 'lucide-react';
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import WeatherCrad from "./CardTemp"


// // Modern Weather Search Component
// const WeatherSearchCard = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [city, setCity] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
  
//   let token = localStorage.getItem("token");

//   const handleCityChange = async () => {
//     try {
//       if (!token) {
//         alert("Login First");
//         navigate("/login");
//         return;
//       }

//       if (city === '') {
//         alert("Please enter a city name");
//         return;
//       }

//       setLoading(true);
//       const response = await fetch(`http://localhost:4039/city?city=${city}`, {
//         headers: {
//           "Authorization": `${token}`
//         }
//       });

//       if (response.statusText === "Too Many Requests") {
//         alert('You Have Made Too Many Requests. Please Login again');
//         localStorage.removeItem("user");
//         localStorage.removeItem("token");
//         navigate("/login");
//         return;
//       }

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log("Response data:", data);
//       setWeatherData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       alert('Failed to fetch weather data. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleCityChange();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4">
//       <div className="max-w-4xl mx-auto pt-8">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Weather Search
//           </h1>
//           <p className="text-white/80 text-lg">
//             Search for weather information in any city worldwide
//           </p>
//         </div>

//         {/* Search Section */}
//         <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-xl">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="relative flex-1">
//               <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
//               <input
//                 type="text"
//                 placeholder="Enter city name (e.g., London, New York)"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
//               />
//             </div>
//             <button
//               onClick={handleCityChange}
//               disabled={loading}
//               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 min-w-[120px]"
//             >
//               {loading ? (
//                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//               ) : (
//                 <>
//                   <Search className="h-5 w-5" />
//                   <span>Search</span>
//                 </>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Weather Card */}
 

//            {weatherData && <WeatherCrad data={weatherData} />}
        
//         {!weatherData && !loading && (
//           <div className="text-center text-white/80 mt-12">
//             <Cloud className="h-16 w-16 mx-auto mb-4 opacity-50" />
//             <p className="text-xl">Enter a city name to get started</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default WeatherSearchCard;

















import { 
  Cloud, 
  Search, 
  MapPin,
} from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WeatherCrad from "./CardTemp"
import { toast } from 'react-toastify';

// Modern Weather Search Component
const WeatherSearchCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  let token = localStorage.getItem("token");

  const handleCityChange = async () => {
    try {
      if (!token) {
        toast.error("Please login first");
        navigate("/login");
        return;
      }

      if (city === '') {
        toast.warning("Please enter a city name");
        return;
      }

      setLoading(true);
      const response = await fetch(`http://localhost:4039/city?city=${city}`, {
        headers: {
          "Authorization": `${token}`
        }
      });

      if (response.statusText === "Too Many Requests") {
        toast.error('You have made too many requests. Please login again');
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
      toast.success(`Weather data for ${city} loaded!`);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCityChange();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Weather Search
          </h1>
          <p className="text-white/80 text-lg">
            Search for weather information in any city worldwide
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-xl">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              <input
                type="text"
                placeholder="Enter city name (e.g., London, New York)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
              />
            </div>
            <button
              onClick={handleCityChange}
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 min-w-[120px]"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Weather Card */}
        {weatherData && <WeatherCrad data={weatherData} />}
        
        {!weatherData && !loading && (
          <div className="text-center text-white/80 mt-12">
            <Cloud className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p className="text-xl">Enter a city name to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherSearchCard;

