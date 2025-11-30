import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const [dbdata, setDbdata] = useState([])
  const navtologin = useNavigate()

  const dashboardhandle = () => {
    const allUsers = JSON.parse(localStorage.getItem("websiteusers")) || []

    if (allUsers.length === 0) {
      navtologin("/login")
    } 
    else {
      setDbdata(allUsers) 
    }
  }

  useEffect(() => {
    dashboardhandle()
  }, [])

  // Logout specific user
  const handleLogout = (email) => {
    const updatedUsers = dbdata.filter(user => user.email !== email)
    localStorage.setItem("websiteusers", JSON.stringify(updatedUsers))
    setDbdata(updatedUsers)
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm w-full px-20 py-20">
      <h2 className="text-2xl font-semibold mb-4 text-center">Users Credentials</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 border-b border-gray-200">S.No</th>
              <th className="px-4 py-3 text-left border-b border-gray-200">Name</th>
              <th className="px-4 py-3 text-left border-b border-gray-200">Phone</th>
              <th className="px-4 py-3 text-left border-b border-gray-200">Email</th>
              <th className="px-4 py-3 text-left border-b border-gray-200">Password</th>
              <th className="px-4 py-3 text-left border-b border-gray-200">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">
            {dbdata.map((data, i) => (
              <tr className="hover:bg-gray-50" key={i}>
                <td className="px-4 py-3 border-b text-center border-gray-200">{i + 1}</td>
                <td className="px-4 py-3 border-b border-gray-200">{data.name || "-"}</td>
                <td className="px-4 py-3 border-b border-gray-200">{data.phone || "-"}</td>
                <td className="px-4 py-3 border-b border-gray-200">{data.email || "-"}</td>
                <td className="px-4 py-3 border-b border-gray-200">{data.password || "-"}</td>
                <td className="px-4 py-3 border-b border-gray-200">
                  <button 
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleLogout(data.email)}
                  >
                    Logout
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default Dashboard
