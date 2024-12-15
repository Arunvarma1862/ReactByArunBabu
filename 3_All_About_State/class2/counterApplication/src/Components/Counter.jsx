import React, { useState } from 'react'

export default function Counter() {
 const[count,setCount]=useState(0);

 function Increment(){
    // setCount(count+1);

    //updateState using Callback
    // setCount((previousState)=>{
    //     return previousState+1
    // })

    setCount((previousState)=>previousState+1)
 }
 function Decrement(){
    // setCount(count-1)
    setCount((currentState)=>{
        return currentState-1
    })
 }

  return (
    <div className='count'>
        <h1>Count is {count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}
