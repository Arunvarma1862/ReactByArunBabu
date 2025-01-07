import React, { useEffect, useState } from "react";
import { useAuth } from '../Context/AuthProvider'
import { useNavigate ,useLocation,useSearchParams} from "react-router-dom";

function Login() {
    const {isLoggedIn,setisLoggedIn}=useAuth()
    // const location =useLocation()
    // console.log(location)
    const[searchParams]=useSearchParams()
    const previousPath=searchParams.get("redirectTo") || "/"
    const navigate= useNavigate()
    useEffect(()=>{
        if(isLoggedIn){
          console.log(previousPath)
          navigate(previousPath,{replace:true})
        }
    },[isLoggedIn])
    function login(){ 
      setisLoggedIn(true) 

    }
  return (
    <>
      <h1>Login</h1>
      <button onClick={login}>Login Page</button>
    </>
  );
}

export default Login;
