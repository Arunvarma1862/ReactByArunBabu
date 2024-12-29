import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { TodoContext } from "./TodoProvider";
import { useContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function AddTodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const TodoInputref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      toast.info("Empty field", {
        autoClose: 2000,
      });
      return;
    }
    let newTodo = {
      id: crypto.randomUUID().slice(0, 5),
      title: title,
      completed: false,
    };
    addTodo(newTodo);
    setTitle("");
  };

  useEffect(() => {
    TodoInputref.current.focus();
  },[]);
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo here"
        name="title"
        id="title"
        value={title}
        ref={TodoInputref}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
