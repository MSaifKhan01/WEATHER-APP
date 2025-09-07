



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Cloud, 
Search,
  History,

  MapPin,

  Clock,

} from 'lucide-react';


// Modern My Searches Component
const MySearches = () => {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

//   function getData() {
//     fetch("http://localhost:4039/city/usercity", {
//       headers: {
//         "Authorization": `${token}`
//       }
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("from searches", data);
//         setArr(data.citiesvisited || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setLoading(false);
//         if (!token) {
//           navigate("/login");
//         }
//       });
//   }


function getData() {
  fetch("http://localhost:4039/city/usercity", {
    headers: {
      "Authorization": `${token}`
    }
  })
    .then(async (res) => {
      if (!res.ok) {
        // Server responded with error (like 429 Too Many Requests)
        const text = await res.text();
        throw new Error(text || "Failed to fetch searches");
      }
      return res.json();
    })
    .then((data) => {
      console.log("from searches", data);
      setArr(data.citiesvisited || []);
      setLoading(false);
    })
    .catch((err) => {
      console.log("Error fetching searches:", err.message);
      setLoading(false);
      if (!token) {
        navigate("/login");
      }
    });
}


  useEffect(() => {
    getData();
  }, [arr]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Loading your searches...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Weather Searches
          </h1>
          <p className="text-white/80 text-lg">
            Track all your previous weather searches
          </p>
        </div>

        {Array.isArray(arr) && arr.length > 0 ? (
          <div className="grid gap-4 md:gap-6">
            {arr.map((ele, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <span className="text-white font-bold text-lg">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-white text-xl font-semibold flex items-center">
                        <MapPin className="h-5 w-5 mr-2" />
                        {ele.city}
                      </h3>
                      {/* <p className="text-white/70 flex items-center mt-1">
                        <Clock className="h-4 w-4 mr-2" />
                        {new Date(ele.visitedAt).toLocaleString()}
                      </p> */}
                                 <p className="text-white/70 flex items-center mt-1">
                        <Clock className="h-4 w-4 mr-2" />
                        {ele.visitedAt}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Cloud className="h-6 w-6 text-white/60" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-white/80 mt-12">
            <History className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-semibold mb-2">No Searches Yet</h3>
            <p className="text-lg mb-6">Start searching for weather to see your history here</p>
            <Link
              to="/weather"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Search Weather</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default MySearches;