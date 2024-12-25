import React, { useState } from 'react'

function Counter2() {
    const [counter,setCounter]=useState(0)
  return (
    <>
    <h1>Count: {counter}</h1>
    <button onClick={()=>setCounter((currentState)=>currentState+1)}>Increase count</button>
    </>
  )
}

export default Counter2