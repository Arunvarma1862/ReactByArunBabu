import User from "./User";
import { v4 as uuid } from "uuid";
function Users({ user }) {
  return (
    // <div>{user.map((user)=>{
    //     return <div className='users'>
    //         <p>firstName: {user.firstName}</p>
    //         <p>lastName: {user.lastName}</p>
    //         <p>age: {user.age}</p>
    //     </div>
    // })}</div>

    <div>
      {user.map((user) => (
        <User key={uuid()} {...user} />
      ))}
    </div>
  );
}

export default Users;
