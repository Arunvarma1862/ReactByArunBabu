import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodos } from "../Features/Todos/TodoSlice";


function AddTodo() {
   const [title,setTitle]=useState("")
   const dispatch=useDispatch()

   function handleSubmit(e){
    e.preventDefault()
    dispatch(AddTodos(title))
    setTitle("")
   }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Todo here" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}
         autoComplete="off"/>
      <button type="submit ">Add</button>
    </form>
  );
}

export default AddTodo;
