import React from 'react'

function Todolist({id,title,completed,toggleCompleted}) {
  return (
    <div style={{
        border:"2px solid blue",
        padding:"1rem",
        margin:"5px",
        width:"50%"
    }}>
    <p>title: {title}</p>
    {/* checked={completed} controlled */}
    <input type="checkbox" checked={completed} onChange={()=>{toggleCompleted(id)}}/>
    <p>completed: {completed?"true":"false"}</p>
    <p>id:{id}</p>
  </div>
  )
}

export default Todolist