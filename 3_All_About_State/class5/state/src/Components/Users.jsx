import React from "react";
import User from "./User";
import { v4 as uuid } from "uuid";

function Users({ users,IncreaseAge,DecreaseAge,deleteUser }) {
  return (
    <div>
      {users.map((user) => {
        return <User key={uuid()} {...user} IncreaseAge={IncreaseAge} DecreaseAge={DecreaseAge} deleteUser={deleteUser}/>;
      })}
    </div>
  );
}

export default Users;
