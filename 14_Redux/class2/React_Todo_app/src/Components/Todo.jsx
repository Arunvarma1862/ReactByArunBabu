import React from 'react'
import { RemovoTodo,ToggleCompleted } from "../Features/Todos/TodoSlice";
import { useDispatch } from 'react-redux';

function Todo({id,title,completed}) {
    const dispatch=useDispatch()
    function handleRemove(){
        dispatch(RemovoTodo({id:id}))
    }
    function handleToggle(){
        dispatch(ToggleCompleted(id))
    }
  return (
    <div style={{backgroundColor:"skyblue", width:"50%", margin:"auto"}}>
        <p>id:{id}</p>
        <p className={completed?"strike":""}>Title:{title}</p>
        <p>status:{completed?"true":"false"}</p>
        <button onClick={handleToggle}>Toogle Completed</button>
        <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default Todo