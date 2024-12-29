import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { TodoContext } from './TodoProvider';


function AddTodoForm() {
    const {addTodo}=useContext(TodoContext)

    const[title,setTitle]=useState("")
    const todoInputRef= useRef()

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(title.trim().length===0){
            toast.info("empty title",{
                autoClose:2000
            })
            // alert("empty title");
            return
        }
        const newTodo={
            id:crypto.randomUUID().slice(0,5),
            title:title,
            completed:false
        }
        addTodo(newTodo)
         
        setTitle("")
    }
    useEffect(()=>{
       todoInputRef.current.focus() 
    },[])
  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter here' name='title' id='title' value={title} onChange={(e)=>setTitle(e.target.value)}  ref={todoInputRef}/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default AddTodoForm