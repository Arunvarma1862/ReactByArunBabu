import React from 'react'
import { useState } from "react";
export default function SimpleStateExample() {
    


  console.log("compopnent rendered")
  const [name, setName] = useState("ViratKohil");
  function handleChangeName() {
 
    if(name==="ViratKohil"){
      setName("jaddu");
    }

    else{
      setName("ViratKohil")
    }
    
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleChangeName}>change Name</button>
    </div>
  )
}
