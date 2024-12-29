import React from "react";
import Todolist from "./Todolist";
import { useContext } from 'react';
import { TodoContext } from './TodoProvider';

function Todos() {
  const{todos}=useContext(TodoContext)
  return (
    <div>
      {todos.map((todo) => {
        return <Todolist key={todo.id} {...todo}  />;
      })}
    </div> 
  );
}

export default Todos;
