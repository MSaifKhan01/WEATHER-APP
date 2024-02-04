import { Routes, Route } from "react-router-dom";


import LandingPage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
import WeatherCardPage from "../Pages/WeatherCardPage";

import GetMySearchPage from "../Pages/MySearchPage";
function Path(){
    return (
        <Routes>
                <Route path="/" element={<LandingPage />} />
                
                <Route path="/Register" element={<SignupPage />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/weather" element={<WeatherCardPage />} />
                <Route path="/Search" element={<GetMySearchPage />} />
            </Routes>
    )
}

export default Path;