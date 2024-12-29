import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react'
import { useReducer } from 'react';

function reducer(todos, action) {
    if (action.type === "DELETE") {
      return todos.filter((todo) => todo.id !== action.payload.id);
    }
    if (action.type === "TOGGLE") {
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    }
  
    if (action.type === "ADD") {
      return [...todos, action.payload.newTodo];
    }
    return todos;
  }
  const intialTodos = [
    { id: "1", title: "Go to college", completed: false },
    { id: "2", title: "Go to class", completed: true },
    { id: "3", title: "Go to cmovie", completed: false },
  ];
   
  export const TodoContext=createContext()

function TodoProvider({children}) {

    const [todos, dispatch] = useReducer(reducer, intialTodos);
    function handledelete(id){
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
            type:"ADD",
            payload:{newTodo:newTodo}
        })
    }
  return (
    <TodoContext.Provider value={{
        todos:todos,
        handleToggle,
        handledelete,
        addTodo
    }}>{children}</TodoContext.Provider>
  )
}

export function useTodo(){
    return useContext(TodoContext)
}

export default TodoProvider