import React, { useContext, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const[auth,setAuth]=useState({})
  return (
    <AuthContext.Provider
     value={{aut:auth,setAut:setAuth}}
    >
      {children}
    </AuthContext.Provider>
  );
}  

export function useAuth(){
  return useContext(AuthContext)
}

export default AuthProvider;
