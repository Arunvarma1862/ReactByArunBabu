import React from "react";
import { useTodo } from "./TodoProvider";

function Todolist({ id, title, completed }) {
 const {handleToggle,handledelete}=useTodo()
  return (
    <div
      className="todolist"
      style={{fontFamily:"sans-serif", backgroundColor: "#cecece", color: "browwn", padding: "1rem", margin:"1rem" }}
    >
      <p>id:{id}</p>
      <p  style={{textDecoration:completed?"line-through":"solid"}}>title:{title}</p>
      <p>status:{completed ? "true" : "false"}</p>
      <button onClick={()=>{handledelete(id)}}>Remove</button>
      <button onClick={()=>{handleToggle(id)}}>toggleCompleted</button>
    </div>
  );
}

export default Todolist;
