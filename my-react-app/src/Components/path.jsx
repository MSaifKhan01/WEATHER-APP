import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LandingPage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import WeatherCardPage from "../Pages/WeatherCardPage";
function Path(){
    return (
        <Routes>
                <Route path="/" element={<LandingPage />} />
                
                <Route path="/Register" element={<SignupPage />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/weather" element={<WeatherCardPage />} />
            </Routes>
    )
}

export default Path;