import React, { useState } from "react";
import { useAuth } from '../Context/AuthProvider'
import { useNavigate ,useLocation} from "react-router-dom";

function Login() {
    const {isLoggedIn,setisLoggedIn}=useAuth()
    const location =useLocation()
    console.log(location)
    const previousPath=location.state?.previousPath || "/"
    const navigate= useNavigate()
    function login(){
      setisLoggedIn(true) 
      navigate(previousPath,{replace:true})
    }
  return (
    <>
      <h1>Login</h1>
      <button onClick={login}>Login Page</button>
    </>
  );
}

export default Login;
