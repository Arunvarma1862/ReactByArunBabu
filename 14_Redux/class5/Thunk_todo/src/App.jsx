import "./App.css";
import TodoApp from "./Features/Todos/TodoApp";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <h1>Todo APP</h1>
      <TodoApp />
    </> 
  );
}

export default App;
