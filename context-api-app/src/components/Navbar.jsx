import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
export const Navbar = () => {

    const {auth,setAuth}=useContext(AuthContext)
    const navigate=useNavigate()

    const handleLogout=()=>{
      setAuth(false)
      navigate("/")
    }
  return (
    <div style={{width:"40%",display:"flex",justifyContent:"space-evenly",margin:"auto",backgroundColor:"orange",padding:"20px"}}>
        
        <Link to="/home">Home</Link>
       {auth? <button onClick={handleLogout}>Logout</button>:
        <Link to="/">Login</Link>}

    </div>
  )
}
