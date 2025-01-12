import React from 'react'
import { useState } from 'react'
import Displayfruits from './Displayfruits'
import { useMemo } from 'react'


// primitive 
// ref type -need useMemo

// state change-> component render
// address-0x11 change each time when component renders for array data type
function ExampleUseMemo2() {
    console.log("example use memo rendered")
    const[username,setUsername]=useState("")

const fruits= useMemo(()=>{
        return [
            {fruitname:"apple",emoji:"🍎"},
            {fruitname:"grapes",emoji:"🍇"},
            {fruitname:"Mango",emoji:"🥭"},
        ]
    },[])
    
  return (
    <div>
        <label htmlFor="username">UserName</label>
        <input type="text" name='username' id='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} autoComplete='off'/>
        <br />
        <Displayfruits fruits={fruits}/>
    </div>
  )
}

export default ExampleUseMemo2