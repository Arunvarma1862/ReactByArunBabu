import React from "react";
import Todoform from "./Todoform";
import TodoList from "./TodoList";

function TodoApp() {
  return (
    <div>
      <h1>TodoApp</h1>
      <Todoform />
      <TodoList/>
    </div>
  );
}

export default TodoApp;
