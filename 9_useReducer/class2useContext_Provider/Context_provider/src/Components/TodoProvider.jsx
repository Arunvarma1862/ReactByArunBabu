import React from 'react'
import { useReducer } from 'react';
import { createContext } from "react";

export const TodoContext=createContext()
function reducer(todos,action){
    if(action.type==="DELETE"){
      return todos.filter((todo)=>todo.id!== action.payload.id)
    }
    if(action.type==="ADD_TODO"){
      return [action.payload.newTodo,...todos]
    }

    if(action.type==="TOGGLE"){
      return todos.map((todo)=>{
          if(todo.id===action.payload.id){
            return {...todo,completed:!todo.completed}
          }
          else{
           return todo
          }
      })
    }
    return todos
}
const intialState=[
  {id:"1",title:"go to college",completed:false},
  {id:"2",title:"go to movie",completed:true},
  {id:"3",title:"edit videos",completed:false},
]
function TodoProvider({children}) {
  const[todos,dispatch]=useReducer(reducer,intialState)
  function handleDelete(id){
    dispatch({
        type:"DELETE",
        payload:{
            id:id
        }
    })
}

function handleToggle(id){
    dispatch({
        type:"TOGGLE",
        payload:{
            id:id
        }
    })
}

const addTodo=(newTodo)=>{
  dispatch({
    type: "ADD_TODO",
    payload: {
      newTodo: newTodo,
    },
  });
}
  return (
    <TodoContext.Provider value={{
      todos:todos,
      handleDelete,
      handleToggle,
      addTodo
    }}>{children}</TodoContext.Provider>
  )
}

export default TodoProvider