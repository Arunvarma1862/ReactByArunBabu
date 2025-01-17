import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodos, EditTodo, ToggleTodos } from "./todoSlice";
import { FaEdit } from "react-icons/fa";

function Todo({ id, title, completed }) {
  const dispatch =useDispatch()
  const [isEditing,setEditing]=useState(false)
  const [newTitle,setNewTitle]=useState(title)

  function handleDelete(){
     dispatch(deleteTodos(id))
  }
  function handleToggle(){
      dispatch(ToggleTodos({id,completed}))
  }
  function handleEdit(){
    // if(newTitle.trim().length!==0){
    //   return setEditing(true) , setNewTitle("")
    // }
    // // setNewTitle("")
    setEditing(true)
  }
  const handleSave = () => {
    dispatch(EditTodo({id,title:newTitle}))
    setEditing(false);
  };
  const handleCloseEdit=()=>{

    setEditing(false)
  }

  return (
    <div style={{border:"1px solid blue",padding:"1rem",margin:"1rem auto",width:"30%"}}>
      <p>id:{id}</p>
      {isEditing? <input type="text" name='title' value={newTitle}  onChange={(e)=>{setNewTitle(e.target.value)}} autoComplete='off'/>:<p className={completed?"line-through":""}  >Title:{newTitle} <span onClick={handleEdit}><FaEdit/></span></p>}
      {isEditing && <button
          onClick={handleSave} >
          Save
        </button>}
        {isEditing && <button
          onClick={handleCloseEdit} >
          close
        </button>}
      <p>status:{completed ? "true" : "false"}</p>
      
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}

export default Todo;


