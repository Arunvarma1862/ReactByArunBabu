import React from 'react'

function Todolist({id,title,completed,dispatch}) {

    const handledelete=()=>{
         dispatch({
            type:"DELETE",
            payload:{
                id:id
            }
         })
    }

    const handleToggle =()=>{
        dispatch({
            type:"TOGGLE",
            payload:{
                id:id
            }
        })
    }
  return (
    <div className='todolist' style={{backgroundColor:"skyblue",color:"blue",padding:"1rem",margin:"1rem"}}>
        <h4>id:{id}</h4>
        <h4 style={{textDecoration:completed?"line-through":"solid",opacity:completed?"0.5":"1"}}>title:{title}</h4>
        <h4>status:{completed?"true":"false"}</h4>
        <button onClick={handledelete}>Remove</button>
        <button onClick={handleToggle}>Togglecompleted</button>
    </div>
  )
}

export default Todolist