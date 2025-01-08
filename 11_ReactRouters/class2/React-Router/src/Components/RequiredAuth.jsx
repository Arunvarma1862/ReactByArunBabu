import React  from 'react'
import { Navigate,useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

function RequiredAuth({children}) {
   
    const location =useLocation()
    console.log(location)
    const {isLogged,setLogged}=useAuth() 
    if(isLogged){
        return children
    }
  return <Navigate to="/login" replace state={{
    previousPath:location.pathname
  }}/>
}

export default RequiredAuth