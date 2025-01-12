import React from 'react'
import { memo } from 'react'


function Displayfruits({fruits}) {
    console.log("fruits rendered")
  return (
        <>
           <h1>Fruits</h1>
           <div>{fruits.map((fruit)=>{
            return <div key={fruit.fruitname}>
                <span>{fruit.emoji}</span><span>{fruit.fruitname}</span>
            </div>
           })}</div>
        </>
  )
}

export default memo(Displayfruits)