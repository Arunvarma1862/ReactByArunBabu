import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./todo.Slice";

function Todo({ id, Title, completed }) {
  const dispatch =useDispatch()
  function handleRemove(){
    dispatch(removeTodo(id))
  }
  function handleToggle(){
    dispatch(toggleTodo({id:id,completed:completed}))
  }
  return (
    <div
      style={{
        color: "blue",
        border: "1px solid blue",
        margin: " 1rem auto",
        padding: "1rem",
        width: "40%",
      }}
    >
      <p>id:{id}</p>
      <p className={completed?"line-through":""}>Title:{Title}</p>
      <p>Completed: {completed ? "true" : "false"}</p>
      <button onClick={handleRemove}>Delete</button>
      <button onClick={handleToggle} >Toggle</button>
    </div>
  );
}

export default Todo;
