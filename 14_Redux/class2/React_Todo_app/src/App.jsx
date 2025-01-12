import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todolist from "./Components/Todolist";

function App() {
  return (
    <>
         <h1>Todo App</h1>
         <AddTodo />
         <Todolist />
    </>
  );
}

export default App;
