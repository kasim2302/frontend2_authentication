import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
   <>
   <div className="flex justify-between items-center p-3 shadow-sm">
    <div>
       <h2 className='text-2xl text-bold'>Authentication</h2>
    </div>
    <div className="flex items-center gap-10">
        <Link className="hover:bg-black  p-2 rounded hover:text-white" to="/">Home</Link>
        <Link className="hover:bg-black  p-2 rounded hover:text-white" to="/dashboard">Dashboard</Link>
        <Link className="bg-blue-600  px-2 py-1 rounded text-white hover:bg-blue-700" to="/login">Login</Link>
        <Link className="bg-green-800  px-2 py-1 rounded text-white hover:bg-green-700" to="/signup">Signup</Link>
    </div>
   </div>
   </>
  )
}

export default Navbar1