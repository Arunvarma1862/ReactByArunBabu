import { useState } from "react"
import {v4 as uuid} from "uuid"

 function StateExampleObject() {
  const[person,setPerson]=useState({
    id:1,
    firstName:"virat",
    lastName:"kohil",
    age:52,
    email:"virat185@gmail.com",
    phone:"5555666666"
  })
  function IncreaseAge(){
    // setPerson({...person, age:person.age+1})

    setPerson((currentState)=>{
        return {...currentState,age:currentState.age+1,email:"virat556@gmail.comm"}
    })

    // setPerson((currentState)=>({...currentState, age:currentState.age+1}))
  }
  return (
    <>
    <div>
    <p>id: {person.id}</p>
    <p>firstName: {person.firstName}</p>
    <p>lastName: {person.lastName}</p>
    <p>email: {person.email}</p>
    <p>phone: {person.phone}</p>
    <p>age: {person.age}</p>
    <button onClick={IncreaseAge}>Increase Age</button>
    </div>
    </>
  )
}
export default StateExampleObject
