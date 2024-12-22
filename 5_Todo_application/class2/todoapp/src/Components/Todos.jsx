
import TodoList from "./TodoList"

function Todos({todos,handleToggle,handleRemove}) {
  return (
     <>
     <div>
     {todos.map((todo)=>{
        return  <TodoList key={todo.id} {...todo} handleToggle={handleToggle} handleRemove={handleRemove}/>
     })}
     </div>
     </>
  )
}

export default Todos