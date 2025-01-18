import React, { useContext, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [isLogged,setLoggedIn]=useState(false)
  return <AuthContext.Provider value={{isLogged,setLoggedIn}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
