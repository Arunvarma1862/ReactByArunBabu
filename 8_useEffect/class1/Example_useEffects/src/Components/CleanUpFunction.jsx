import React, { useEffect, useState } from 'react'


// useEffect-sideEffects(like not related to react like example data fetch, addEventListener ,etc)

// cleanup function runs when 
// 1: Before the component unmount

// 2. when there is a some value in dependency array
// a. when value changes
// b. component render
// c. cleanup function 
// d. useffect runs

function CleanUpFunction() {
    console.log("component render")
    const [counter,setCounter]=useState(0)
    useEffect(()=>{
        console.log("useEffect callback")
        return function cleanUp(){
            console.log("cleanUp function!!!")
        }
    },[counter])
    
  return (
    <div>
        <h1>Count: {counter}</h1>
        <button onClick={()=>{setCounter((currentState)=>currentState+1)}}>Increase Count</button>
    </div>
  )
}

export default CleanUpFunction