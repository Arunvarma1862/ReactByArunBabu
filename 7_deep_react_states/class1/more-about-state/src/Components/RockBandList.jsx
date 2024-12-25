import React, { useState } from 'react'
import RockBand from './RockBand'

function RockBandList() {

    const [rockBands,setRocksBands]=useState([
        {name:"rock1",id:1},
        {name:"rock2",id:2},
        {name:"rock3",id:3},
        {name:"rock4",id:4},
        {name:"rock5",id:5},
        {name:"rock6",id:6},
        {name:"rock7",id:7},
        {name:"rock8",id:8},
        {name:"rock9",id:9},
        {name:"rock10",id:10},
    ])
    function handleRockBand(){
        console.log("Added New Rock Band");
        setRocksBands((currentState)=>{
            return [...currentState,{name:"rock11",id:crypto.randomUUID().slice(0,5)}]
        })
    }
  return (
    <>
    <ol>
        // Dont create keys on fly
        {rockBands.map((user)=>{
            return <RockBand name={user.name} key={user.id}/>
        })}
        
    </ol>
    <button onClick={handleRockBand}>Add Rock Band</button>
    </>
  )
}

export default RockBandList