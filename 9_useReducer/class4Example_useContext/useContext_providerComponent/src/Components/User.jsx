
import UserDetail from './UserDetail'
import { useContext } from 'react'
import { AuthContext } from './AuthProvider'

function User() {

    const {auth,setAuth}=useContext(AuthContext)
    function handleLogin(){
        setAuth({
            username:"virat",
            email:"virat1568@gmail.com"
        })
    }
  return (
    <div>
        <h1>User Profile</h1>
        {auth.username?<UserDetail/>:<button onClick={handleLogin}>Login</button>}
    
    </div>
  )
}

export default User