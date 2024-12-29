import { useReducer } from "react";
import "./App.css";
import AddTodoForm from "./Components/AddTodoForm";
import Todos from "./Components/Todos";
import { ToastContainer } from 'react-toastify';


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

function App() {
  const [todos, dispatch] = useReducer(reducer, intialTodos);

  return (
    <>
      <div className="app">
        <ToastContainer/>
        <h1>Todo Application</h1>
        <AddTodoForm dispatch={dispatch} />
        <Todos todos={todos} dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
