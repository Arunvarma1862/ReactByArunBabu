import React from 'react'

function User({firstName,lastName,age}) {
  return (
    <div className='user'>
        <p>firstName: {firstName}</p>
        <p>lastName: {lastName}</p>
        <p>age: {age}</p>
    </div>
  )
}

export default User