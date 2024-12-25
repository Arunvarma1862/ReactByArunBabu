import React, { useState } from 'react'
import ShowCountValue from './ShowCountValue';

function Counter() {
    // setState Async
    // async state update
    // props are immutable - object
    const[counter,setCounter]=useState(0)
    function handleCounter(){

    setCounter((currentState)=>{
        console.log("setting state 1");
        return currentState+3
    })
    // setCounter((currentState)=>{
    //     console.log("setting state 2");
    //     return currentState+1
    // })

    // setCounter((currentState)=>{
    //     console.log("setting state 3");
    //     return currentState+1
    // })



        // console.log("function called!!!");-1
        // setCounter(counter+1);-3
        // console.log(counter)-2

        // const nextCounter=counter+1
        // setCounter(nextCounter);
        // console.log(nextCounter)
    }
  return (
    <div>
        <ShowCountValue counter={counter}/>
        <button onClick={handleCounter}>Increase counter</button>
    </div>
  )
}

export default Counter