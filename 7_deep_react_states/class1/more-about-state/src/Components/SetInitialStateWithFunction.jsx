import React, { useState } from 'react'


// function generateFunction(){
//     console.log("generate random number");
//     const randomNumbers=[];
//     for(let i=0;i<10;i++){
//         randomNumbers.push(Math.random()*100)
//     }
//     return randomNumbers
// }

function SetInitialStateWithFunction() {

    const[nums,setNums]=useState(()=>{
        console.log("generate random number");
        const randomNumbers=[];
        for(let i=0;i<10;i++){
            randomNumbers.push(Math.random()*100)
        }
        return randomNumbers 
    })
  return (
    <ol>
       {nums.map((num,index,array)=>{
        return <li key={index}>{num}</li>
       })}
       <button onClick={()=>{
        setNums((currentState)=>{
            return [...currentState,Math.random()*100]
        })
       }}>Generate Random Number</button>
    </ol>
  )
}

export default SetInitialStateWithFunction