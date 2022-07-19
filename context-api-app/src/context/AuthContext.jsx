import React from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = React.useState(false); 
  const [token,setToken]=React.useState("")
  const [mail,setMail]=React.useState("")
  const [pass,setPass]=React.useState("")
// const { auth, setAuth }=useContext(AuthContext)


  // const handleAuth=()=>{
  //   setAuth(!auth)
  // }
  const navigate=useNavigate()
  
const handleLogin=(Email,Password)=>{
 
  // console.log(email,password)
  axios({
    method:"post",
    url:"https://reqres.in/api/login",
    data:{
      email:Email,
      password:Password
    }
  }).then((res)=>setToken(res.data.token))

  if(token){
  // handleAuth()
  setAuth(true)
  setMail(Email)
  setPass(Password)
  navigate("/home")
  // console.log(auth)
  }
 }

 

  
  return (
    <AuthContext.Provider value={{auth,setAuth,handleLogin,token,mail,pass}} >
      {children}
    </AuthContext.Provider>
  );
}
