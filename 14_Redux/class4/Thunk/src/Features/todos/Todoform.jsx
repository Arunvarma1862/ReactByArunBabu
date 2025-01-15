import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodos } from './todo.Slice';
import bouncedLoader from "../../assets/bouncedLoader.svg";


function Todoform() {
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null)
    const dispatch= useDispatch()
    const [title,setTitle]=useState("")
    function handleSubmit(e){
      setIsLoading(true)
        e.preventDefault();
        dispatch(addTodos(title)).unwrap().then(()=>{
          setTitle("")
        }).catch((err)=>{
          setError(err.message)
        }).finally(()=>{
          setIsLoading(false)
        })
       
    }
 
  return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text" name='title' id='title' value={title} onChange={(e)=>setTitle(e.target.value)} autoComplete='off' />
        <button type='submit' disabled={isLoading}>{isLoading ?"adding...":"Add"}</button>
        {error?error.message:""}
    </form>
  )
}

export default Todoform