import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./SignUp";
import Login from "./Login";
import Nav from "./Nav";
import HomePage from "./Home"


const Main = () => {
    return (
        
        <Router>
            <Routes>
                <Route path="/" element={<Nav />} />
                {/* <Route path="/" element={< HomePage/>} /> */}
                <Route path="/Register" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default Main;
