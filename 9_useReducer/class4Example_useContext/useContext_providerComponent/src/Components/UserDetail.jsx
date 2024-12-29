
import { useAuth } from './AuthProvider'

function UserDetail() {
    const {auth,setAuth}=useAuth()
    function handleLogout(){
        setAuth({})
    }
  return (
    <div>
        <h4>name:{auth.username}</h4>
        <h4>email:{auth.email}</h4>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserDetail