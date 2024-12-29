import React from 'react'
import Todolist from './Todolist'

function Todos({todos,dispatch}) {
  return (
    <div>
     {todos.map((todo)=>{
        return <Todolist key={todo.id} {...todo} dispatch={dispatch}/>
     })}
    </div>
  )
}

export default Todos