import React, { useEffect } from "react";

import { useRef } from "react";

// focus on input when component mounts
function UserForm() {
  const usernameref = useRef();
  useEffect(()=>{
    usernameref.current.focus()
  },[])
  return (
    <form action="">
      <label htmlFor="">Username</label>
      <input type="text" placeholder="username" ref={usernameref} />
    </form>
  );
}

export default UserForm;
