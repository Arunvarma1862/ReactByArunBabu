import React, { useEffect, useState } from 'react'
import User from './User';


const url="https://jsonplaceholder.typicode.com/users"
function FetchApi4() {
    const [user,setUser]=useState([])
    const [isLoading,setisLoading]=useState(true);
    const [error,setError]=useState(false)
    const [errormsg,setErrorMsg]=useState("")

    useEffect(()=>{
        const controller= new AbortController()
        const signal = controller.signal
        async function fetchData(){
         
            const response = await fetch(url,{signal:signal})
            if(!(response.status >=200 && response.status<=299)){
              setError(true)
              setErrorMsg(`${response.status} not found err`)
              setisLoading(false)
              return
            }
            const data= await response.json()
            setUser(data)
            setisLoading(false)
        }
        fetchData()
        return(()=>{
            console.log("abort function")
            controller.abort()
        })
    },[])
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>{errormsg}</h1>
    }
  return (
    <div>
        {user.map((item)=>{
            return <User key={item.id} {...item}/>
        })}
    </div>
  )
}

export default FetchApi4