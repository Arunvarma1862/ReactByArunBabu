import React, { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";
// use promise to fecth data
// use async await to fecth data
function FectApi() {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    fetch(URL).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
        setUsers(data)
    })
  }, []);
  return (
    <div>
      {user.map((user) => {
        return <p key={user.id}>{user.name}</p>;
      })}
    </div>
  );
}

export default FectApi;

// fetch data component render
//useEffect(()={})
//useEffect(()={},[])
//useEffect(()=>{},[listItem])
