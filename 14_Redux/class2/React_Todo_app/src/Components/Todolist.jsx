import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";

function Todolist() {
    const todos=useSelector((state)=>{
        return state.myTodo
    })

  return <div>
      {todos.map((todo)=>{
        return <Todo key={todo.id} {...todo}/>
      })}
  </div>;
}

export default Todolist;
