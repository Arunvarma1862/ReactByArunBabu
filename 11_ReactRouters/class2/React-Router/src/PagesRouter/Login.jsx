import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import { useNavigate,useLocation } from 'react-router-dom'

function Login() {
  const {isLogged,setLogged}=useAuth()
  const location =useLocation()
  console.log(location)
  const previousPath=location.state?.previousPath || "/"
  const navigate= useNavigate()
  function login(){
    setLogged(true)
    navigate(previousPath,{replace:true}) // replace:true, wont navigate to loginpage

  }
  return (
    <>
    <h1>Login Page</h1>
    <button  onClick={login}>Login</button>
    </>
  )
}

export default Login