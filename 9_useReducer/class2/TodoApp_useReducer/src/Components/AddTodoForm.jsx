import React, { useState } from 'react'
import { toast } from 'react-toastify';


function AddTodoForm({dispatch}) {

    const[title,setTitle]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(title.trim.length===0){
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
        dispatch({
            type:"ADD",
            payload:{newTodo:newTodo}
        })
        
        setTitle("")
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter here' name='title' id='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default AddTodoForm