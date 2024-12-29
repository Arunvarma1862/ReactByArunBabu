import "./App.css";
import AddTodoForm from "./Components/AddTodoForm";
import Todos from "./Components/Todos";
import { ToastContainer } from "react-toastify";
import TodoProvider from "./Components/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <ToastContainer />
        <h1>Todo Application</h1>
        <AddTodoForm />
        <Todos />
      </div>
    </TodoProvider>
  );
}

export default App;
