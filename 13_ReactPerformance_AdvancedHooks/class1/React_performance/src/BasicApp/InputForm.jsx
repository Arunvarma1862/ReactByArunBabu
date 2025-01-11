
import  { useState } from 'react'

function InputForm({children}) {
    console.log("Input form Renderd")
    const [username,setUsername]=useState("")
    function handleSubmit(e){
        e.preventDefault()
    }
  return (
    
    <form onSubmit={handleSubmit}>
        <input type="text" name="username" id="username" onChange={(e)=>{setUsername(e.target.value)}}  value={username} autoComplete="off"/> <br /><br />
          {children}
        <button type="submit" onClick={()=>setUsername("")}>clear input</button>
    </form>
  )
}

export default InputForm