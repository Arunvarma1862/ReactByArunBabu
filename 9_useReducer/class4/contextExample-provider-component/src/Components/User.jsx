import React from 'react'
import UserDetails from './UserDetails'
import { useAuth } from './AuthProvider'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'

function User() {

    const {aut,setAut}= useContext(AuthContext)
    function handleLogin(){
        setAut({
            username:"virat",
            email:"virat12556@gmail.com"
        })
    }  
  return (
    <>
    <h1>UserProfile</h1>
    {aut.username?<UserDetails/>:<button onClick={handleLogin}>Login</button>}
    </>
  )
}

export default User