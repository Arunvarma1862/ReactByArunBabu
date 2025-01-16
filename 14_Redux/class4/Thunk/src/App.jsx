import "./App.css";
import TodoApp from "./Features/todos/TodoApp";
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <TodoApp />
    </>
  );
}

export default App;
