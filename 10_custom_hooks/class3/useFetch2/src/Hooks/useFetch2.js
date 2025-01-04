import { useEffect } from "react"
import { useState } from "react"

function useFetch2(url){
    const [data,setData]=useState(null)
    const [isPending,setIsPending]=useState(false)
    const [error,setError]=useState(null)
   
  
    useEffect(()=>{
        console.log("useEffect function")
        setIsPending(true)
        const controller= new AbortController()
        async function fetchData(){       
            try{
                const response =  await fetch(url,{signal:controller.signal})
                if(!response.ok){
                   throw Error("Something went wrong")
                }
                const responseData= await response.json();
                setData(responseData)
                setError(null)
              
            }
            catch(error){
                 if(error  !== "AbortError"){
                    setError(error.message)
                    // console.log(error)
                    // console.log(error.message)
                 }
                                   
            }    
            finally{
                setIsPending(false)
            }  
        }
        fetchData()   
        return (()=>{
            console.log("clean up function")
            controller.abort()
        })
    },[url])
    return {data,isPending,error}
}

export default useFetch2