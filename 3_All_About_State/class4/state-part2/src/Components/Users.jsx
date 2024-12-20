import React from 'react';
import User from './User';
import {v4 as uuid} from "uuid"

function Users({users,onClick,DecreaseAge,deleteUser}) {
  return (
    <div>
        {users.map((user)=>{
            return <User {...user} key={uuid()} IncreaseAge={onClick} DecreaseAge={DecreaseAge} deleteUser={deleteUser}/>
        })}
    </div>
  )
}

export default Users