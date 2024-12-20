
import { useState } from 'react';
import './App.css';
import Users from './Components/Users';

function App() {
  const [users,setUsers]=useState([
    {id:1,firstName:"virat",lastName:"kohil",age:52},
    {id:2,firstName:"jaddu",lastName:"singh",age:25},
    {id:3,firstName:"varun",lastName:"dhawan",age:62},
  ])

  function IncreaseAge(id){
    setUsers((currentState)=>{
      return currentState.map((user)=>{
        if(user.id ===id){
          return {...user,age:user.age+1}
        }
        else{
          return user
        }
      })
    })
  }
  function DecreaseAge(id){
    setUsers((currentState)=>{
      return currentState.map((user)=>{
        if(user.id ===id){
          return {...user,age:user.age-1}
        }
        else{
          return user
        }
      })
    })
  }
  function deleteUser(id){
    setUsers((currentState)=>{
      return currentState.filter((user)=>{
           return user.id !==id
      })
    })
  }


  return (
    <div className="App">
       <h2>State Example</h2>
       <Users users={users} IncreaseAge={IncreaseAge} DecreaseAge={DecreaseAge} deleteUser={deleteUser}/>
    </div>
  );
}

export default App;
