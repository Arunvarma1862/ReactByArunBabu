import { useState } from "react";
import "./App.css";

function App() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  // function handleChangeuser(e) {
  //   setusername(e.target.value);
  // }
  function handleChangepass(e) {
    setpassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    console.log(username, password);
  }
  return (
    <div className="App">
      <h2>Form</h2>
      <form action="" className="form" onSubmit={handleSubmit}>
        <label htmlFor="user">Username </label>
        <input
          type="text"
          id="user"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
        <br></br>
        <label htmlFor="pass">Password </label>
        <input
          type="password"
          id="pass"
          value={password}
          onChange={handleChangepass}
        />
        <br></br>
        <button>Submit</button>
        <br></br>
      </form>
    </div>
  );
}

export default App;
