import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodos } from "../Features/Todos/TodoSlice";
import { nanoid } from "@reduxjs/toolkit";

function AddTodo() {
   const [title,setTitle]=useState("")
   const dispatch=useDispatch()
   function handleSubmit(e){
    e.preventDefault()
    const newTodo={
        id:nanoid().slice(0,5),title:title,completed:false
    }
    dispatch(AddTodos(newTodo))
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
