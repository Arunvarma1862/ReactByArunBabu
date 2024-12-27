import React, { useEffect, useState } from 'react'


// useState-component related

// use Effect-Not related to component
// Fetch data from api
// eventListeners
// side effect to perform

// class based components
// react life cycle methods (componentDidMount)

// useEffect
//  its take as callback function as input
//  When component rendred useEffect also called when no depedency added
// first argument - callback function
// second argument- dependency array
// No dependency array- useEffect calls every time , component renders
// []- empty array- useEffect calls once on intial render
// dependency array with some value-counterValue

function ExampleUseEffect() {
    const [counter1, setCounter1]=useState(0);
    const [counter2, setCounter2]=useState(0);
    console.log("Component rendered")
    useEffect(()=>{
        console.log("Inside useEffect")
    },[counter1])
  
  return (
    <>
  
    <div>ExampleUseEffect</div>
    <div>
        <h1>Count1:{counter1}</h1>
        <button onClick={()=>setCounter1(counter1+1)}>Increase count</button>
    </div>
    <div>
        <h1>Count2:{counter2}</h1>
        <button onClick={()=>setCounter2(counter2+1)}>Increase count</button>
    </div>

    </>
  )
}

export default ExampleUseEffect