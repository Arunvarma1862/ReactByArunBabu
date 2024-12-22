import { useState } from "react";
import Todoform from "./Components/Todoform";
import Todos from "./Components/Todos";
import { ToastContainer } from 'react-toastify';


function App() {

  const [todos,setTodos]=useState([
    {id:1,title:"Go to movie",completed:false},
    {id:2,title:"Go to class",completed:true},
    {id:3,title:"Go to college",completed:false},
  ]);

  const addTodo=(newTodo)=>{
    console.log(newTodo);
      setTodos((currentState)=>{
        return [...currentState,newTodo]
      })
  }
   function toggleCompleted(id){
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

    //  setTodos((currentState)=>{
    //     return currentState.filter((todo)=>{
    //            return todo.id !== id
    //     })
    //  })

     setTodos((currentState)=>currentState.filter((todo)=>todo.id !== id))
   }
  return (
    <div className="container">
      <ToastContainer />
      <h1 className="main-list">Todo-List</h1>
      <Todoform  addTodo={addTodo}/>
      <Todos  todos={todos} toggleCompleted={toggleCompleted} handleRemove={handleRemove}/>
    </div>
  );
}

export default App;









// function toggleCompleted(id){
//   // console.log(id,"toggle completed");
//   const newTodos=[];
//   for(let todo of todos){
//     if(todo.id===id){
//       newTodos.push({...todo, completed:!todo.completed})
//     }
//     else{
//        newTodos.push(todo)
//     }
   
//   }
//   setTodos(newTodos)
// }
