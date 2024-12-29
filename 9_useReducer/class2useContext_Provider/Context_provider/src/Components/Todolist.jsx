import React from 'react'
import { TodoContext } from "./TodoProvider";
import { useContext } from "react";

function Todolist({id,title,completed}) {
     const {handleDelete,handleToggle}= useContext(TodoContext)
    
  return (
    <div style={{backgroundColor:"skyblue", color:"blue",padding:"1rem",margin:"1rem"}}>
        <h5>id:{id}</h5>
        <h5 style={{textDecoration:completed?"line-through":"solid", opacity:completed?"0.5":"1"}}>title:{title}</h5>
        <h5>status:{completed?"true":"false"}</h5>
        <button onClick={()=>{handleDelete(id)}}>Remove</button>
        <button onClick={()=>{{handleToggle(id)}}}>ToggleCompleted</button>
    </div>
  )
}

export default Todolist