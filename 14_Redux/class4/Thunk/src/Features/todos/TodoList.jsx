import React, { useEffect, useState } from "react";
import { fetchTodos } from "./todo.Slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import LoadingSpinner from "../../assets/LoadingSpinner.svg";

function TodoList() {
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState(null)
  const { data } = useSelector((state) => {
    return state.mytodo;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true)
    dispatch(fetchTodos()).unwrap().then(()=>{
       
    }).catch((err)=>{
      setError(err.message)
    }).finally(()=>{
      setIsLoading(false)
    })
  }, []);
  if(error){
    return <h1>{error}</h1>
  }
 if(isLoading){
  return <img src={LoadingSpinner} alt="image" />
 }

  return (
    <div>
      {data.map((item) => {
        return <Todo key={item.id} {...item} />;
      })}
    </div>
  );
}

export default TodoList;
