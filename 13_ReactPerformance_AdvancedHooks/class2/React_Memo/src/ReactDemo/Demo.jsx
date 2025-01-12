import React from 'react'
import { useState } from 'react'
import Card from './Card'


function Demo({children}) {
    console.log("demo rendered")
    const [state1,setState1]=useState(false)
    const [state2,setState2]=useState(false)
  return (
    <div style={{backgroundColor:"#efefef", padding:"1rem"}}>
        <label htmlFor="state1">State1</label>
        <input type="checkbox" name="state1" id="state1" checked={state1} onChange={()=>setState1(!state1)} />
        <label htmlFor="state2">State2</label>
        <input type="checkbox" name="state2" id="state2" checked={state2} onChange={()=>setState2(!state2)} />
        <Card  state1={state1}/>
        {children}

    </div> 
  )
}

export default Demo