import { useEffect, useState } from "react"

function useLocalStorage(key,intialValue){
     const [state,setState]=useState(()=>{
            return JSON.parse(localStorage.getItem(key)) || intialValue
        })
        useEffect(()=>{
            localStorage.setItem(key,JSON.stringify(state))
         },[state])

         return [state,setState]
        
}
export default useLocalStorage