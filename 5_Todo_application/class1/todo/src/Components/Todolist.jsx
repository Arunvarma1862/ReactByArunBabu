import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";

function Todolist({id,title,completed,toggleCompleted,handleRemove}) {
  return (
    <div className='todo' >
    <div className="todoTitle">
    <input type="checkbox" checked={completed} onChange={()=>{toggleCompleted(id)}}/>
    <p className={completed?"line":""}> {title}</p>
    </div>
    <div className="cross-title" onClick={()=>{handleRemove(id)}}><AiOutlineDelete/></div>
    
  </div>
  )
}

export default Todolist


 {/* checked={completed} controlled */}
{/* <p>completed: {completed?"true":"false"}</p> */}
    {/* <p>id:{id}</p> */}