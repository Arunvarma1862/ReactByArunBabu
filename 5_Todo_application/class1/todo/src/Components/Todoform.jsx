import React, { useState } from "react";
import {v4 as uuid} from "uuid"
import { toast } from 'react-toastify';

function Todoform({addTodo}) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const titlevalue= title.trim()
    if(titlevalue.length === 0){
        toast.info("❤️please fill the input",{
          autoClose:2000,
          pauseOnHover: true,
          theme: "light",
        })
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
      <form action="" onSubmit={handleSubmit} className="todoform">
        <input
          className="todoform_input"
          type="text"
          placeholder="Enter todo"
          value={title.toLocaleUpperCase()}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit" className="todoform_btn">Add</button>
      </form>
    </>
  );
}

export default Todoform;
