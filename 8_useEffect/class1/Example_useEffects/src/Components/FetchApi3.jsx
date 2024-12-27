import React, { useEffect, useState } from "react";
import User from "./User";

const URL = "https://jsonplaceholder.typicode.com/usersss";
function FetchApi3() {
  const [user, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError,setIsError]= useState(false);
  const [errorMsg,setErrorMsg]=useState("")

  async function fetchData() {
    const response = await fetch(URL);
    console.log(response);
    if(!(response.status >=200 && response.status<=299)){
         setIsError(true)
         setErrorMsg(`${response.status} Not found Err`)
         setisLoading(false)
         return
    }
    const data = await response.json();
    console.log(data);
    setUsers(data);
    setisLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, []);

  
  if (isLoading) {
     return  <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }
  if(isError){
    return <h1 style={{textAlign:"center"}}>{errorMsg}</h1>
  }


  

  return (
    <div>
      {user.map((user) => {
        return <User key={user.id} {...user} />;
      })}
    </div>
  );
}

export default FetchApi3;
