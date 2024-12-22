
import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [todos,setTodos]=useState([
    {id:1,title:"Go to college",completed:false},
    {id:2,title:"Go to gym",completed:true},
    {id:3,title:"Go to class",completed:false},
  ])

 const AddTodo=(newTodo)=>{
     setTodos((currentState)=>{
        return [...currentState,newTodo]
     })
 }

 const handleToggle=(id)=>{
       setTodos((currentState)=>{
        return currentState.map((todo)=>{
          if(todo.id === id){
            return {...todo,completed:!todo.completed}
          }
          else{
            return todo
          }
        })
       })
 }
 function handleRemove(id){
     setTodos((currentState)=>currentState.filter((todo)=>todo.id !==id))
 }
  return (
    <div className="container">
      <ToastContainer/>
        <h1 className="main-title">Todo-List</h1>
        <TodoForm AddTodo={AddTodo}/>
        <Todos  todos={todos} handleToggle={handleToggle} handleRemove={handleRemove}/>
    </div>
  );
}

export default App;
