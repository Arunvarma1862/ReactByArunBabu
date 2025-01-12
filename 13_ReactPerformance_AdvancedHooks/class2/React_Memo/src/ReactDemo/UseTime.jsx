import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function UseTime() {
    const[time,setTime]=useState(new Date())
    useEffect(()=>{
        const intervalId=window.setInterval(() => {
            setTime(new Date())
        }, 1000);
        return (()=>{
            window.clearTimeout(intervalId)
        })
    },[])
  return  time
}

export default UseTime
