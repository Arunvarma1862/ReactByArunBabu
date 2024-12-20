import Todolist from "./Todolist";
import {v4 as uuid}  from "uuid";

function Todos({ todos,toggleCompleted }) {
  return (
    <>
      <div>
        {todos.map((todo) => {
          return  <Todolist key={uuid()} {...todo} toggleCompleted={toggleCompleted}/>
        })}
      </div>
    </>
  );
}

export default Todos;
