import React, { useState } from 'react'
import { createContext,useContext } from 'react'


const AuthContext= createContext()
function AuthProvider({children}) {
    const [isLogged,setLogged]=useState(false)
  return (
    <AuthContext.Provider value={{isLogged,setLogged}}>{children}</AuthContext.Provider>
  )
}
 
export function useAuth(){
    return useContext(AuthContext)
}
export default AuthProvider