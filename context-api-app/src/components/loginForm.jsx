import React from "react";
import styled from "styled-components";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import { IsAuth } from "../context/IsAuth";
// import {useNavigate} from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
// import { useNavigate } from "react-router-dom";




const LoginForm=styled.div`
width:20%;
margin:auto;
display:flex;
flex-direction:column;
gap:20px;
margin-top:50px;
`


function LoginPage(){

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");



// const [Token,setToken]=React.useState("")
const {handleLogin}=useContext(AuthContext)

// const navigate=useNavigate()
 




// const handleLogin=()=>{
 
//   // console.log(email,password)
//   axios({
//     method:"post",
//     url:"https://reqres.in/api/login",
//     data:{
//       email:email,
//       password:password
//     }
//   }).then((res)=>setToken(res.data.token))

//   if(Token){
//   // handleAuth()
//   setAuth(!auth)
//   navigate("/home")
//   console.log(auth)
//   }
//  }
 
//  const handleLogout=()=>{

//  }
    

    return(
       <LoginForm>
        <input type={"text"}  name={"email"} value={email} placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
        <input type={"password"} name={"password"} value={password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
        <button onClick={()=>{handleLogin(email,password)}}>Login</button>
        {/* <div>{data}</div> */}
       </LoginForm>
       

    )
}

export default LoginPage