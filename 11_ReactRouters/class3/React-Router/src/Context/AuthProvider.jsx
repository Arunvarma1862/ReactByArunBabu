import React, { useState } from 'react'
import { createContext,useContext } from 'react'

const AuthContext= createContext()

function AuthProvider({children}) {
    const [isLoggedIn,setLoggedIn]=useState(false)
  return (
    <AuthContext.Provider value={{isLoggedIn,setLoggedIn}}>{children}</AuthContext.Provider>
  )
}
export function useAuth(){
    return useContext(AuthContext)
}

export default AuthProvider