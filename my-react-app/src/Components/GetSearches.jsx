import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';


function MySearches() {
    const [arr, setArr] = useState([]); 
    const navigate=useNavigate()
    let token=localStorage.getItem("token")

    function GetData() {
        
        fetch("https://weather-app-sw7g.onrender.com/city/usercity",{
            headers:{
                "Authorization":`${token}`
              }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("from searches", data);
               
               
                
                    //  Swal.fire(data.msg);
                    //  localStorage.removeItem("user")
                    //  localStorage.removeItem("token")
                 

                    // navigate("/login")

             
                setArr(data.citiesvisited);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        GetData(); 
    }, []);

    return (
        <div id="main">
            <div>
               <h2>All Searches By you</h2>
            </div>
           
            {Array.isArray(arr) && arr.length > 0 ? (
                arr.map((ele,i) => (
                    <div key={i}>
                        <ul class="ListSearch">
                            <li>{i+1} <p>City:-  {ele.city}</p> 
                            <p>visitedAt:-  {ele.visitedAt}</p>
                            </li>
                        </ul>
                   
                     
                    </div>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default MySearches;