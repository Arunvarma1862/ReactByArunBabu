import React, { useEffect, useRef, useState } from 'react'
import {  toast } from 'react-toastify';

function AddTodoform({dispatch}) {

    const [title,setTitle]=useState("")
    const todoinput=useRef("")

    function handlechange(e){
         setTitle(e.target.value)
    }

    function handlesubmit(e){
      e.preventDefault();
      if(title.trim().length==0){
         toast.info("Please fill the input field",{
            autoClose:2000
         })
         return
      }
      let newTodo={
        id:crypto.randomUUID().slice(0,5),
        title:title,
        completed:false
      }
      dispatch({
        type:"ADD_TODO",
        payload:{
            newTodo:newTodo
        }

      })
      setTitle("")
    }

    useEffect(()=>{
      todoinput.current.focus()
    },[])
  return (
     <form action="" onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter Todo here' name='title' id='title' value={title} onChange={handlechange} ref={todoinput}/>
        <button type='submit'>Add</button>
     </form>
  )
}

export default AddTodoform