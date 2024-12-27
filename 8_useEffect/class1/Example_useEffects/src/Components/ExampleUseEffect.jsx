import React, { useEffect, useState } from 'react'


// useState- related to component- which state manages

// use Effect- Not related to component-which state not manages
// Fetch data from api
// eventListeners
// side effect to perform(fetch data,eventlistner)

// class based components
// react life cycle methods (componentDidMount)

// useEffect
// its take as callback function as input
// When component rendred useEffect also called, first time app render, when no depedency added
// first argument - callback function
// second argument- dependency array
// No dependency array- useEffect calls every time , when ever component renders
// []- empty array- useEffect calls once on intial render
// dependency array with some value-counterValue-useffect calls everytime

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