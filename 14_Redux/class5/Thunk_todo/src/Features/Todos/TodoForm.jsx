import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from './todoSlice'
import { toast, ToastContainer} from 'react-toastify';

function TodoForm() {
  const [isLoading,setIsLoading]=useState(false)  
  const [title,setTitle]=useState("")
  const [error,setError]=useState(null)
  const dispatch= useDispatch()
  function handleSubmit(e){ 
      e.preventDefault()
      if(title.trim().length===0){
        return toast.error("please fill the input field",{
          autoClose:500
        })
      }
       setIsLoading(true)  
    dispatch(addTodos(title)).unwrap().then(()=>{
       setTitle("")   
    }).catch((err)=>{
      setError(err.message)
    }).finally(()=>{
      setIsLoading(false)
    })

    toast.info("Todo item Added!!!!",{autoClose:500})
   
  }
  return (
     <form action="" onSubmit={handleSubmit}>
      <input type="text" name='title' value={title}  onChange={(e)=>{setTitle(e.target.value)}} autoComplete='off'/>
      <button type='submit' disabled={isLoading}>{isLoading?"adding...":"Add"}</button>
     </form>
  )
}

export default TodoForm