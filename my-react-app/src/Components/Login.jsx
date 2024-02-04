
import React,{useState} from "react"
import {useNavigate,Link} from 'react-router-dom'
import Swal from 'sweetalert2';

const Login=()=>{

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate()


    const HandleData=async()=>{
        let Result= await fetch('https://weather-app-sw7g.onrender.com/user/login',{
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"Application/json"
            }
        })

        try {
            Result=await Result.json()
             console.log("gfhgfh",Result)
            //  if(){
                
               
               
            //  }
             if(Result.msg==="login succesful"){
                localStorage.setItem("user",JSON.stringify(Result.user));
                localStorage.setItem("token",Result.token);
               
                Swal.fire(Result.msg)
                navigate("/weather")
                // navigate("/")
            }
            else{
                alert("pleasse enter valid data")
            }
        } catch (error) {
            console.log(error)
        }

        // useEffect(()=>{
        //     const auth= localStorage.getItem('user');
        //     if(auth){
        //         navigate("/")
        //     }
        // }) 
    }

    return(
        <div className="Login">
            <h1>Login</h1>

            

            <input className="inputBox"  type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>

            <input className="inputBox"  type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>

            <button className="inputBox" onClick={HandleData}>Submit</button>

            <div className="navi">  Create an Account ? 
                <Link to="/register"> Register</Link>
            </div>
        </div>
    )

}

export default Login;