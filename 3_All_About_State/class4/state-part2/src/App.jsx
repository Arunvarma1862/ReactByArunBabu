import { useState } from "react";
import "./App.css";
import Users from "./Components/Users";

function App() {
  const [users, setusers] = useState([
    { id: 1, firstName: "virat", lastName: "kohil", age: 52 },
    { id: 2, firstName: "jaddu", lastName: "singh", age: 62 },
    { id: 3, firstName: "arun", lastName: "varma", age: 43 },
  ]);

  //props drilling
  function IncreaseAge(id) {
    // console.log(id)
    // console.log("increase Age");

    // let newState=[];
    // for(let user of users){
    //   if(user.id===id){
    //     newState.push({...user,age:user.age+1})
    //   }
    //   else{
    //     newState.push(user)
    //   }
    // }
    // setusers(newState)

    //react developer way
    setusers((currentState) => {
      return currentState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  }

  function DecreaseAge(id) {
    setusers((currentState) => {
      return currentState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age - 1 };
        } else {
          return user;
        }
      });
    });
  }
  // function deleteUser(id) {
  //   console.log(id, "deleteUser");
  //   let newState=[];
  //   for(let user of users){
  //     if(user.id !== id){
  //       newState.push(user)
  //     }
  //   }
  //   setusers(newState)
  // }


  function deleteUser(id){
    setusers((currentState)=>{
      return currentState.filter((user)=>{
        return user.id !== id
      })
    })
  }
  return (
    <div className="App">
      <h1>State Example 2</h1>
      <Users
        users={users}
        onClick={IncreaseAge}
        DecreaseAge={DecreaseAge}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
