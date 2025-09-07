// import React from "react";
// import {Link,useNavigate} from 'react-router-dom';
// const Nav=()=>{
//     const auth=localStorage.getItem('user');
//     const navigate=useNavigate();
//     const logout=()=>{
//         localStorage.removeItem("user")
//         localStorage.removeItem("token")
//         navigate('/')
//     }
//     return(
//         <div className="nav">
//             <img className="logo" src="https://www.logolynx.com/images/logolynx/3f/3f4799b72f90d3c7e0609d4fe2f07d5b.jpeg" alt="logo" />

//            {auth ? <ul className="nav-ul">


//                 <li><Link to="/">Home </Link></li>
//                 <li><Link to="/Register">Sign Up</Link></li>
//                 <li><Link to="/weather">Weather</Link></li>
//                 <li><Link to="/Search">My Searches</Link></li>
//                 {/* <li><Link to="/weather">Weather</Link></li> */}
//                 <li><Link onClick={logout} to="/Register">Logout ({JSON.parse(auth).name})</Link></li>
//                </ul> 
//                 :
//                     <ul className="nav-ul nav-right">
//                     <li><Link to="/">Home </Link></li>

//                     <li><Link to="/Register">Sign Up</Link></li>

//                     <li><Link to="/Login">Login</Link></li>
//                     <li><Link to="/weather">Weather</Link></li>
//                     <li><Link to="/Search">My Searches</Link></li>
//             </ul>
//         }
//         </div>
//     )
// }
// export default Nav;













import React, { useState, useEffect } from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import { 
  Cloud, 
  Sun, 

  LogOut, 
  Home, 
  History,
  Menu,
  X,

} from 'lucide-react';

// Modern Navigation Component
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 shadow-lg sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white p-2 rounded-lg shadow-md">
              <Cloud className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-white font-bold text-xl">WeatherPro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {auth ? (
                <>
                  <Link to="/" className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                  <Link to="/weather" className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1">
                    <Sun className="h-4 w-4" />
                    <span>Weather</span>
                  </Link>
                  <Link to="/Search" className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1">
                    <History className="h-4 w-4" />
                    <span>My Searches</span>
                  </Link>
                  <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1">
                    <LogOut className="h-4 w-4" />
                    <span>Logout ({JSON.parse(auth).name})</span>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/" className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                  <Link to="/weather" className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1">
                    <Sun className="h-4 w-4" />
                    <span>Weather</span>
                  </Link>
                  <Link to="/Register" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200">
                    Sign Up
                  </Link>
                  <Link to="/Login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200">
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/20 p-2 rounded-md"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/20 backdrop-blur-md rounded-lg mt-2 p-4">
            {auth ? (
              <>
                <Link to="/" onClick={() => setIsOpen(false)} className="block text-white hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium mb-2">
                  <Home className="h-4 w-4 inline mr-2" />
                  Home
                </Link>
                <Link to="/weather" onClick={() => setIsOpen(false)} className="block text-white hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium mb-2">
                  <Sun className="h-4 w-4 inline mr-2" />
                  Weather
                </Link>
                <Link to="/Search" onClick={() => setIsOpen(false)} className="block text-white hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium mb-2">
                  <History className="h-4 w-4 inline mr-2" />
                  My Searches
                </Link>
                <button onClick={logout} className="w-full text-left bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-base font-medium">
                  <LogOut className="h-4 w-4 inline mr-2" />
                  Logout ({JSON.parse(auth).name})
                </button>
              </>
            ) : (
              <>
                <Link to="/" onClick={() => setIsOpen(false)} className="block text-white hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium mb-2">
                  <Home className="h-4 w-4 inline mr-2" />
                  Home
                </Link>
                <Link to="/weather" onClick={() => setIsOpen(false)} className="block text-white hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium mb-2">
                  <Sun className="h-4 w-4 inline mr-2" />
                  Weather
                </Link>
                <Link to="/Register" onClick={() => setIsOpen(false)} className="block bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-base font-medium mb-2">
                  Sign Up
                </Link>
                <Link to="/Login" onClick={() => setIsOpen(false)} className="block bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium">
                  Login
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};



export default Nav;