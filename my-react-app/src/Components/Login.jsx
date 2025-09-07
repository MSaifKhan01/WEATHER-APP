



// import { 

//   User, 

//   Mail,
//   Lock,

//   Eye,
//   EyeOff,

// } from 'lucide-react';
// import React, { useState, useEffect } from 'react';
// import {  Link, useNavigate } from 'react-router-dom';


// // Modern Login Component
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleData = async () => {
//     if (!email || !password) {
//       alert("Please fill in all fields");
//       return;
//     }

//     setLoading(true);
//     try {
//       let result = await fetch('http://localhost:4039/user/login', {
//         method: "POST",
//         body: JSON.stringify({ email, password }),
//         headers: {
//           "Content-Type": "application/json"
//         }
//       });

//       result = await result.json();
//       console.log("Login result:", result);

//       if (result.msg === "login succesful") {
//         localStorage.setItem("user", JSON.stringify(result.user));
//         localStorage.setItem("token", result.token);
//         alert(result.msg);
//         navigate("/weather");
//       } else {
//         alert("Please enter valid credentials");
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
//       <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md">
//         <div className="text-center mb-8">
//           <div className="bg-white/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
//             <User className="h-10 w-10 text-white" />
//           </div>
//           <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
//           <p className="text-white/80">Sign in to your account</p>
//         </div>

//         <div className="space-y-6">
//           <div className="relative">
//             <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
//             />
//           </div>

//           <div className="relative">
//             <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
//             <input
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
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

//           <button
//             onClick={handleData}
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {loading ? 'Signing In...' : 'Sign In'}
//           </button>
//         </div>

//         <div className="mt-6 text-center">
//           <p className="text-white/80">
//             Don't have an account?{' '}
//             <Link to="/register" className="text-white font-semibold hover:underline">
//               Create Account
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
//  export default Login;

















import { 
  User, 
  Mail,
  Lock,
  Eye,
  EyeOff,
} from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Modern Login Component
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleData = async () => {
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      let result = await fetch('http://localhost:4039/user/login', {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      result = await result.json();
      console.log("Login result:", result);

      if (result.msg === "login succesful") {
        localStorage.setItem("user", JSON.stringify(result.user));
        localStorage.setItem("token", result.token);
        toast.success(result.msg);
        navigate("/weather");
      } else {
        toast.error("Please enter valid credentials");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="bg-white/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <User className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-white/80">Sign in to your account</p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
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

          <button
            onClick={handleData}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/80">
            Don't have an account?{' '}
            <Link to="/register" className="text-white font-semibold hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>

   
    </div>
  );
};

export default Login;
