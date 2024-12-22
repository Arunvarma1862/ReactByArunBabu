import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";


function TodoList({id,title,completed,handleToggle,handleRemove}) {
  return (
    <div className='todolist'>
        {/* <p>id:{id}</p> */}
        <div className='todolists'>
        <input type="checkbox" checked={completed} onChange={()=>{handleToggle(id)}}/>
        <p className={completed?"line_through":""}> {title}</p>
        </div>
        <div onClick={()=>handleRemove(id)} className='delete_btn'>
         {/* <p>completed:{completed?"true":"false"}</p> */}
         <RiDeleteBin6Line/>
       </div>
       
       
    </div>
  )
}

export default TodoList