
// // import React,{useState} from "react"
// // import {useNavigate,Link} from 'react-router-dom'

// // const Signup=()=>{
// //     const [name,setName]=useState("")
// //     const [email,setEmail]=useState("")
// //     const [password,setPassword]=useState("")
// //     const [preferredcity,setPreferredcity]=useState("")
// //     const navigate=useNavigate()
// //     // const navigate=useNavigate()


// //     const HandleData=async()=>{
// //         // let Result= await fetch('https://weather-app-sw7g.onrender.com/user/register',{
// //         let Result= await fetch('http://localhost:4039/user/register',{
         
// //             method:"POST",
// //             body:JSON.stringify({name,email,password,preferredcity}),
// //             headers:{
// //                 "Content-Type":"Application/json"
// //             }
// //         })

// //         try {
// //             Result=await Result.json()
// //              console.log(Result)
// //              navigate("/login")
// //             //  if(Result.msg=="Registration Succesful"){
// //             //     navigate("/")
// //             //  }
// //         } catch (error) {
// //             console.log(error)
// //         }
// //     }

// //     return(
// //         <div className="Register">
// //             <h1 >Register</h1>

// //             <input className="inputBox"  type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>

// //             <input className="inputBox"  type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>

// //             <input className="inputBox"  type="Password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>

// //             <input className="inputBox"  type="text" onChange={(e)=>setPreferredcity(e.target.value)} placeholder="Enter City"/>

// //             <button className="inputBox" onClick={HandleData}>Submit</button>

// //             <div className="navi">  Already have an acccount ? 
// //                 <Link to="/login"> Login</Link>
// //             </div>
// //         </div>
// //     )

// // }

// // export default Signup;





// import { 

//   Mail,
//   Lock,
//   MapPin,

//   Eye,
//   EyeOff,

// } from 'lucide-react';
// import React, { useState, useEffect } from 'react';
// import {useNavigate } from 'react-router-dom';


// // Modern Signup Component
// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [preferredcity, setPreferredcity] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleData = async () => {
//     if (!name || !email || !password || !preferredcity) {
//       alert("Please fill in all fields");
//       return;
//     }

//     setLoading(true);
//     try {
//       let result = await fetch('http://localhost:4039/user/register', {
//         method: "POST",
//         body: JSON.stringify({ name, email, password, preferredcity }),
//         headers: {
//           "Content-Type": "application/json"
//         }
//       });

//       result = await result.json();
//       console.log(result);
//       alert("Registration successful! Please login.");
//       navigate("/login");
//     } catch (error) {
//       console.log(error);
//       alert("Registration failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
//       <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md">
//         <div className="text-center mb-8">
//           <div className="bg-white/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
//             <User className="h-10 w-10 text-white" />
//           </div>
//           <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
//           <p className="text-white/80">Join WeatherPro today</p>
//         </div>

//         <div className="space-y-4">
//           <div className="relative">
//             <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Full Name"
//               className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
//             />
//           </div>

//           <div className="relative">
//             <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email Address"
//               className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
//             />
//           </div>

//           <div className="relative">
//             <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
//             <input
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               className="w-full pl-12 pr-12 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
//             >
//               {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//             </button>
//           </div>

//           <div className="relative">
//             <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
//             <input
//               type="text"
//               value={preferredcity}
//               onChange={(e) => setPreferredcity(e.target.value)}
//               placeholder="Preferred City"
//               className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
//             />
//           </div>

//           <button
//             onClick={handleData}
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
//           >
//             {loading ? 'Creating Account...' : 'Create Account'}
//           </button>
//         </div>

//         <div className="mt-6 text-center">
//           <p className="text-white/80">
//             Already have an account?{' '}
//             <Link to="/login" className="text-white font-semibold hover:underline">
//               Sign In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import { 
  Mail,
  Lock,
  MapPin,
  Eye,
  EyeOff,
  User,
} from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// Modern Signup Component
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [preferredcity, setPreferredcity] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleData = async () => {
    if (!name || !email || !password || !preferredcity) {
      toast.warning("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      let result = await fetch('http://localhost:4039/user/register', {
        method: "POST",
        body: JSON.stringify({ name, email, password, preferredcity }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      result = await result.json();
      console.log(result);

      toast.success("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-white/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <User className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-white/80">Join WeatherPro today</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-12 pr-12 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
            <input
              type="text"
              value={preferredcity}
              onChange={(e) => setPreferredcity(e.target.value)}
              placeholder="Preferred City"
              className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
            />
          </div>

          <button
            onClick={handleData}
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/80">
            Already have an account?{' '}
            <Link to="/login" className="text-white font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
