import React from 'react'
import { useState } from 'react'
import {format} from  "date-fns"
import { findFibonacci } from './fibonacci'
import UseTime from './UseTime'
import { useMemo } from 'react'


function ExampleUseMemo1() {
    console.log("rendred example1")
    const time =UseTime()
    const [Number,setNumber]=useState(1)
   
 const fib =  useMemo(()=>{
       let result=[];
       for(let i=1;i <= Number; i++){
        console.log("fibs calucations")
        result.push(findFibonacci(i));
    }
       return result 
   },[Number])
  return (
   
    <div>
         {/* {JSON.stringify(time)} <br /> */}
         {<h2>Time: {format(time,"hh:mm:ss a")}</h2>}
        <input type="number" name='number' id="number" value={Number} onChange={(e)=>{setNumber(e.target.value)}} />
        {Number>0  && <div>
            <h2>First{Number} fibonacci numbers are</h2>
            {fib.join(",")}
            </div>}
    </div>
  )
}

export default ExampleUseMemo1