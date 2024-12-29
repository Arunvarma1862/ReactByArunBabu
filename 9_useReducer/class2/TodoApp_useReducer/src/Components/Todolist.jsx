import React from "react";

function Todolist({ id, title, completed,dispatch }) {

    function handledelete(){
        dispatch({
            type:"DELETE",
            payload:{
                id:id
            }
        })
    }

    function handleToggle(){
        dispatch({
            type:"TOGGLE",
            payload:{
                id:id
            }
        })
    }
  return (
    <div
      className="todolist"
      style={{fontFamily:"sans-serif", backgroundColor: "#cecece", color: "browwn", padding: "1rem", margin:"1rem" }}
    >
      <p>id:{id}</p>
      <p  style={{textDecoration:completed?"line-through":"solid"}}>title:{title}</p>
      <p>status:{completed ? "true" : "false"}</p>
      <button onClick={handledelete}>Remove</button>
      <button onClick={handleToggle}>toggleCompleted</button>
    </div>
  );
}

export default Todolist;
