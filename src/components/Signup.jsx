import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
     name: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigationtologin = useNavigate();
  const handleformdata = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let newErrors = {}

  const collectdata = (e) => {
    e.preventDefault();

    if (!/^[A-Za-z]{3,}$/.test(data.name)) {
      
       newErrors.name =  "Name must be at least 3 letters and contain no numbers."
    
    }
    if (!/^[0-9]{10}$/.test(data.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits."
    }

    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Enter a valid email address."
    }

    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(data.password)) {
     newErrors.password =  "Password must be at least 8 letters"
    }

    if (Object.keys(newErrors).length > 0) {
    setError(newErrors);
    return;
    }


    const get_olddata = JSON.parse(localStorage.getItem("websiteusers")) || [];

    get_olddata.push(data);

    localStorage.setItem("websiteusers", JSON.stringify(get_olddata));

    alert("forms saved successfully");

    navigationtologin("/login");

    setData({ name: "", phone: "", email: "", password: "" });
  };

  return (
    <>
      <div className="max-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={collectdata}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
          autoComplete="on"
        >
          {/* Top Heading */}
          <h2 className="text-2xl font-bold text-center mb-6">Signup Form</h2>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={data.name}
              onChange={handleformdata}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-sm text-red-600 ">{error.name}</span>
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              onChange={handleformdata}
              name="phone"
              value={data.phone}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-sm text-red-600 ">{error.phone}</span>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleformdata}
              name="email"
              value={data.email}
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
              placeholder="Enter your password"
              onChange={handleformdata}
              name="password"
              value={data.password}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-sm text-red-600 ">{error.password}</span>
          </div>

          {/* Signup Button */}
          <button className="w-full bg-green-800 text-white py-2 rounded font-semibold hover:bg-green-700 transition-colors">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
