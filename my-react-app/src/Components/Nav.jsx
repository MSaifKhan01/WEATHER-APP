import React from "react";
import {Link,useNavigate} from 'react-router-dom';
const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        navigate('/')
    }
    return(
        <div className="nav">
            <img className="logo" src="https://www.logolynx.com/images/logolynx/3f/3f4799b72f90d3c7e0609d4fe2f07d5b.jpeg" alt="logo" />

           {auth ? <ul className="nav-ul">


                <li><Link to="/">Home </Link></li>
                <li><Link to="/Register">Sign Up</Link></li>
                <li><Link to="/weather">Weather</Link></li>
                <li><Link to="/Search">My Searches</Link></li>
                {/* <li><Link to="/weather">Weather</Link></li> */}
                <li><Link onClick={logout} to="/Register">Logout ({JSON.parse(auth).name})</Link></li>
               </ul> 
                :
                    <ul className="nav-ul nav-right">
                    <li><Link to="/">Home </Link></li>

                    <li><Link to="/Register">Sign Up</Link></li>

                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/weather">Weather</Link></li>
                    <li><Link to="/Search">My Searches</Link></li>
            </ul>
        }
        </div>
    )
}
export default Nav;