import { useAuth } from "./AuthProvider"

function UserDetails() {
   const {aut,setAut}= useAuth()
   function handleLogout(){
    setAut({})
   }
  return (
    <div>
        <h4>name:{aut.username}</h4>
        <h4>email: {aut.email}</h4>
        <button onClick={handleLogout}>logout</button>
    </div>
  )
  
}

export default UserDetails