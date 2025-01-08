import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider'
import { useLocation } from 'react-router-dom'

function RequiredAuth({children}) {
   const {isLoggedIn,setLoggedIn}=useAuth()
   const loaction = useLocation()
//    console.log(loaction)
    if(isLoggedIn){
        return children
    }
  return <Navigate to="/login" replace state={{
        previouspath:loaction.pathname
  }} />    // <navigate/> to login component
}

export default RequiredAuth