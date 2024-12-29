import React from 'react'
import { useContext } from 'react'
import { Myappcontext } from '../App'

// step 1:- import useContext

function Grandchild() {
//    const contextObject= useContext(Myappcontext);
   const {key1,key2,func}=useContext(Myappcontext);
  
  return (
    <div style={{backgroundColor:"#ffd9b7",padding:"1rem"}}>
        <h1>Grand Child</h1>
        <p>{key1}</p>
        <button onClick={func}>call my func {key1}</button>
    </div>
  )
}

export default Grandchild