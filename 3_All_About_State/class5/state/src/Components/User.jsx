import React from "react";

function User({ firstName, lastName, age, id,IncreaseAge,DecreaseAge,deleteUser }) {
  return (
    <div className="user">
            <p>firstName:<b style={{color:"blue"}}>{firstName}</b></p>
            <p>lastName:<b style={{color:"blue"}}>{lastName}</b></p>
            <p>age:<b style={{color:"blue"}}>{age}</b></p>
            <p>id:<b style={{color:"blue"}}>{id}</b></p>
            <button onClick={()=>{IncreaseAge(id)}}>Increase Age</button>
            <button onClick={()=>{DecreaseAge(id)}}>Decrease Age</button>
            <button onClick={()=>deleteUser(id)}>Delete User</button>
    </div>
  );
}

export default User;
