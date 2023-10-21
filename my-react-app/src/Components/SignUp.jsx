
import React,{useState} from "react"
import {useNavigate} from 'react-router-dom'

const Signup=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [preferredcity,setPreferredcity]=useState("")
    const navigate=useNavigate()
    // const navigate=useNavigate()


    const HandleData=async()=>{
        let Result= await fetch('https://weather-app-sw7g.onrender.com/user/register',{
            method:"POST",
            body:JSON.stringify({name,email,password,preferredcity}),
            headers:{
                "Content-Type":"Application/json"
            }
        })

        try {
            Result=await Result.json()
             console.log(Result)
             navigate("/login")
            //  if(Result.msg=="Registration Succesful"){
            //     navigate("/")
            //  }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="Register">
            <h1 >Register</h1>

            <input className="inputBox"  type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>

            <input className="inputBox"  type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>

            <input className="inputBox"  type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>

            <input className="inputBox"  type="text" onChange={(e)=>setPreferredcity(e.target.value)} placeholder="Enter City"/>

            <button className="inputBox" onClick={HandleData}>Submit</button>
        </div>
    )

}

export default Signup;