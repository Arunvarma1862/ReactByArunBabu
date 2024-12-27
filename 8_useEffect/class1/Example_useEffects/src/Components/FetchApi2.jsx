import React, { useEffect, useState } from "react";
import User from "./User";

const URL = "https://jsonplaceholder.typicode.com/users";

// strict
// when component mounts
// effet use
// cleanup
// effect use
function FetchApi2() {
  const [user, setUser] = useState([]);
  const [isLoading,setisLoading]=useState(true)
  const [isError,setIsError]=useState(false)
  const[errorMsg,setErrorMsg]= useState("")

  useEffect(() => {
    console.log("useEffect callback")
    const controller= new AbortController();
    const signal = controller.signal
    const fetchData = async () => {
      const response = await fetch(URL,{signal:signal});
      if(!(response.status>=200 && response.status<=299)){
          console.log(response)
          setIsError(true)
          setErrorMsg(`${response.status} Error`)
          setisLoading(false)
          return
      }
      const data = await response.json();
      console.log(data);
      setUser(data);
      setisLoading(false)
    };
    fetchData();
    return ()=>{
      console.log("abort request...")
      controller.abort()
    }
  }, []);


  if(isLoading){
    return <h1 style={{textAlign:"center"}}>Loading...</h1>
  }

  if(isError){
    return <h1 style={{textAlign:"center"}}>{errorMsg}</h1>
  }


  
  return (
    <div>
      {user.map((user) => {
        return (
          <User key={user.id}  {...user}/>
        );
      })}
    </div>
  );
}

export default FetchApi2;
