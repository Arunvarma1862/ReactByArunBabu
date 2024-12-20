import { useState } from "react";
import Todoform from "./Components/Todoform";
import Todos from "./Components/Todos";


function App() {

  const [todos,setTodos]=useState([
    {id:1,title:"go to movie",completed:false},
    {id:2,title:"go to class",completed:true},
    {id:3,title:"go to college",completed:false},
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
  return (
    <div >
      <h1 className="main-list">Todo-List</h1>
      <Todoform  addTodo={addTodo}/>
      <Todos  todos={todos} toggleCompleted={toggleCompleted}/>
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
