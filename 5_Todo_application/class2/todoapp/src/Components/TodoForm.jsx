import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from 'react-toastify';

function TodoForm({ AddTodo }) {
  const [title, setTitle] = useState("");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const titleValue= title.trim();
    if (titleValue.length === 0) {
      toast.error("please fill the input",{
        autoClose:2000,
        closeOnClick: false,
      })
      return;
    }
    let newTodo = {
      id: uuid().slice(0, 5),
      title: title,
      completed: false,
    };
    AddTodo(newTodo);
    setTitle("");
  }

  return (
    <form action="" onSubmit={handleSubmit} className="todoform">
      <input type="text" value={title.toUpperCase()} onChange={handleChange}  className="todo_input" placeholder="Enter Todo here"/>
      <button type="submit" className="todo_btn">Add</button>
    </form>
  );
}

export default TodoForm;
