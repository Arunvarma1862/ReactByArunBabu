import { useState } from "react";
import "./App.css";
import Users from "./Components/Users";

function App() {
  const [user, setUser] = useState([
    { id: 1, firstName: "virat", lastName: "kohil", age: 52 },
    { id: 2, firstName: "jaddu", lastName: "singh", age: 12 },
    { id: 3, firstName: "arun", lastName: "varma", age: 22 },
  ]);

  return (
    <div className="App">
      <h1>State Example</h1>
      <Users user={user} />
    </div>
  );
}

export default App;
