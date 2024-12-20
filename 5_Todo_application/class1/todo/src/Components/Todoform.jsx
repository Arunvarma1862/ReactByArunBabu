import React, { useState } from "react";
import {v4 as uuid} from "uuid"

function Todoform({addTodo}) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const titlevalue= title.trim()
    if(titlevalue.length === 0){
        alert("please fill the input")
        return ""
    }
    const newTodo={
        id:uuid(),
        title:title,
        completed:false
    }
    addTodo(newTodo);
    setTitle(" ")
    
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Todoform;
