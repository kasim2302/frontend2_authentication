import './App.css'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Navbar1 from './components/Navbar1'
import Home from './pages/Home'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
    <div>
       <main>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
           </BrowserRouter>


       </main>
    </div>
    </>
  )
}

export default App