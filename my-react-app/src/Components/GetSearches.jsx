import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function MySearches() {
    const [arr, setArr] = useState([]); 
    const navigate=useNavigate()

    function GetData() {
        const token=localStorage.getItem('user');
        fetch("http://localhost:4039/city/usercity")
            .then((res) => res.json())
            .then((data) => {
                console.log("from searches", data);
               
                if(token){
                    
                }else{
                    if(data.msg=="Login first"){
                        alert(data.msg)
                        navigate("/login")

                    }
                }
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
                        <h1>City:-{ele}</h1>
                     
                    </div>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default MySearches;
