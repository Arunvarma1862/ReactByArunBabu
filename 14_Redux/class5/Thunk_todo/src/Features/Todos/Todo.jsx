import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodos, ToggleTodos } from "./todoSlice";

function Todo({ id, title, completed }) {
  const dispatch =useDispatch()
  function handleDelete(){
     dispatch(deleteTodos(id))
  }
  function handleToggle(){
      dispatch(ToggleTodos({id,completed}))
  }
  function handleEdit(){
    dispatch(ToggleTodos({title:title}))
  }
  return (
    <div style={{border:"1px solid blue",padding:"1rem",margin:"1rem auto",width:"30%"}}>
      <p>id:{id}</p>
      <p className={completed?"line-through":""}>title:{title}</p>
      <p>status:{completed ? "true" : "false"}</p>
      <button onClick={handleEdit}>EditTitle</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default Todo;


