import { useEffect, useState } from "react";

function useFetch(url){
    const [data,setdata]=useState(null)
    const [isPending,setIsPending]=useState(false)
    const [error,setError]=useState(null)
    useEffect(()=>{
        console.log("useEffectCallback")
        setIsPending(true)
        const controller= new AbortController();
        async function fetchData(){
        try{     
            const response=  await fetch(url,{signal:controller.signal})
            if(!response.ok){
               throw Error("something went wrong")
            }
            const resData=  await response.json()
            console.log(response)
            setdata(resData)
            setError(null)
           }
        
        catch(error){
            console.dir(error)
            if(error !== "AbortError"){
                setError(error.message)
            }       
        }  
        finally{
            setIsPending(false)
        }
    }
        fetchData()

        return (()=>{
            // when component unmount calls the clean up function to abort the fetch data
            console.log("cleanupfunction")
            controller.abort()
        })
    },[url])

    return {data,isPending,error}

}
export default useFetch;