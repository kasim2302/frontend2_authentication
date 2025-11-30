import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  
   const [logindata, setLogindata] = useState({email:"",password:""})

   const [error,setError] = useState({email:"",password:""})

   const nav_to_dashboard = useNavigate()


   const collectLogindata = (e) => {
      setLogindata({...logindata,[e.target.name]:e.target.value})
     
   }

   
   const handlelogindata = (e) => {
 
    e.preventDefault()

    const newErrors ={}

    if (!/^\S+@\S+\.\S+$/.test(logindata.email)) {
      newErrors.email = "Enter a valid email address."
    }
    
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(logindata.password)) {
     newErrors.password =  "Password must be at least 8 letters"
    }
    if(Object.keys(newErrors).length>0){
      setError(newErrors)
      return
    }
     setError({});

   
    const getexistdata = JSON.parse(localStorage.getItem("websiteusers")) || []

    const match_data = getexistdata.find((d)=> d.email === logindata.email && d.password === logindata.password )

    if(match_data){
      localStorage.setItem("Currentuser",JSON.stringify(match_data))
      nav_to_dashboard("/dashboard")
      setLogindata({email:"",password:""})
     
   }
   else{
      alert("Invalid login data!")
   }
  
   }

   
  return (
   <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm" onSubmit={handlelogindata}  autoComplete="on">
        {/* Top Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Login Form</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name = "email"
            onChange={collectLogindata}
            value={logindata.email}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-sm text-red-600 ">{error.email}</span>
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            name='password'
            onChange={collectLogindata}
            value={logindata.password}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-sm text-red-600 ">{error.password}</span>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors">
          Login
        </button>
      </form>
    </div>
   </>
  )
}

export default Login