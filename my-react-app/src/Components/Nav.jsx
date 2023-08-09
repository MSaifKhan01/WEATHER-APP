import React from "react";
import {Link,useNavigate} from 'react-router-dom';
const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("user")
        navigate('/Register')
    }
    return(
        <div className="nav">
            <img className="logo" src="https://www.logolynx.com/images/logolynx/3f/3f4799b72f90d3c7e0609d4fe2f07d5b.jpeg" alt="logo" />

           {auth ? <ul className="nav-ul">
                
                <li><Link to="/Register">Register</Link></li>
                <li><Link onClick={logout} to="/Register">Logout ({JSON.parse(auth).name})</Link></li>
               </ul> 
                :
                    <ul className="nav-ul nav-right">

                    <li><Link to="/Register">Sign Up</Link></li>

                    <li><Link to="/Login">Login</Link></li>
            </ul>
        }
        </div>
    )
}
export default Nav;