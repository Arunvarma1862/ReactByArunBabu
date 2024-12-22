import React from 'react'
import { useState } from 'react';

function Radio() {
    const [gender,setgender]=useState("");

//   function handleChangeMale(){
//        setgender((currentState)=>{
//             return currentState="male"
//        })
//   }
//   function handleChangeFemale(){
//     setgender((currentState)=>{
//          return currentState="female"
//     })
// }
  return (
    <div>
    <h1>Radio buttons</h1>
    <label htmlFor="" >Male</label>
    <input type="radio" checked={gender==="male"}  onChange={()=>{setgender("male")}} />
    <br></br>
    <label htmlFor="">Female</label>
    <input type="radio"checked={gender==="female"} onChange={()=>{setgender("female")}} />
    </div>
   
  )
}

export default Radio