import React, { useState } from 'react'
import DisplayFullname from './DisplayFullname';
import TestComponent from './TestComponent';

// controlled components
// uncontrolled components
// state-undefined, when state changes to string, show error as uncontrolled to controlled
function UserName() {
    // parent component renderd- child copmonent also rendered
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    // const [fullname,setFullName]=useState("")-  Remove reductant state 
    const fullName= firstName+" "+lastName;
    console.log("username component rendered")
  return (
    <form action="">
        <h1>Form</h1>
        <div>
        <label htmlFor="firstname">FirstName</label>
        <input type="text" name='firstname' id='firstname' value={firstName} onChange={(e)=>{setFirstName(e.target.value) }} />
        </div><br/> 
        <div>
        <label htmlFor="lastname">lastName  </label>
        <input type="text" name='lastname' id='lastname'value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
        </div>
        <h2>User Detail</h2>
        <div>
            <p>firstName: {firstName}</p>
            <p>lastName: {lastName}</p>
            <DisplayFullname fullName={fullName}/>
        </div>
        <h2><TestComponent/></h2>
    </form>
  )
}

export default UserName