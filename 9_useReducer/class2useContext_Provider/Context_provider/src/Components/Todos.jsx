import React from "react";
import Todolist from "./Todolist";
import { TodoContext } from "./TodoProvider";
import { useContext } from "react";

function Todos() {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {todos.map((todo) => {
        return <Todolist {...todo} key={todo.id} />;
      })}
    </div>
  );
}

export default Todos;
