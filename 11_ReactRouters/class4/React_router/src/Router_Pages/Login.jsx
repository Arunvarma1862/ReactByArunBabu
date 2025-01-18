import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import { replace, useLocation, useNavigate } from 'react-router-dom'

function Login() {
  const {isLogged,setLoggedIn}=useAuth()
  const location= useLocation();
  console.log("locationLogin",location)
  const previousPath=location.state?.previousPath || "/"
  const navigate= useNavigate()
  function login(){
    setLoggedIn(true)
    navigate(previousPath,{replace:true})
  }
  return (
    <div>
      <p>Login Page</p>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login