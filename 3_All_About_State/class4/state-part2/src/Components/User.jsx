import React from 'react'

function User({firstName,lastName,age,id,IncreaseAge,DecreaseAge,deleteUser}) {

   
  return (
    <div className='user'>
        <p>firstName: {firstName}</p>
        <p>lastName: {lastName}</p>
        <p>age: {age}</p>
        <p>id: {id}</p>
        <button onClick={()=>{IncreaseAge(id)}}>Increase Age</button>
        <button onClick={()=>{DecreaseAge(id)}}>Decrease Age</button>
        <button onClick={()=>{deleteUser(id)}}>Delete User</button>
    </div>
  )
}

export default User