import { act, useReducer } from "react";
import "./App.css";
import AddTodoform from "./Components/AddTodoform";
import Todos from "./Components/Todos";
import { ToastContainer} from 'react-toastify';



function reducer(todos,action){
      if(action.type==="DELETE"){
        return todos.filter((todo)=>todo.id !==action.payload.id)
      }
      if(action.type==="ADD_TODO"){
        return [action.payload.newTodo,...todos]
      }

      if(action.type==="TOGGLE"){
          return todos.map((todo)=>{
            if(todo.id ===action.payload.id){
              return {...todo,completed:!todo.completed}
            }
            else{
              return todo
            }
          })
      }
      return todos
}

function App() {

  const intialState=[
    {id:"1",title:"edit videos",completed:false},
    {id:"2",title:"delete videos",completed:true},
    {id:"3",title:"go to movie",completed:false},

  ]

  const[todos,dispatch]=useReducer(reducer,intialState)
  return (
    <>
      <div className="app">
        <ToastContainer/>
        <h1>Todo Application</h1>
        <AddTodoform dispatch={dispatch}/>
        <Todos todos={todos} dispatch={dispatch}/>
      </div>
    </>
  );
}

export default App;
