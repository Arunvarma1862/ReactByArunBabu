import { use } from "react";
import User from "./components/User";

function App() {
  const users = [
    { id: 1, firstName: "virat", lastName: "kohil" },
    { id: 2, firstName: "jadeja", lastName: "singh" },
    { id: 3, firstName: "Arun", lastName: "varma" },
  ];
  return (
    <>
      <div className="App">
        {/* {users.map((user,index,array)=>{
          return <User key={index} firstName={user.firstName} lastName={user.lastName}/>
        })} */}

        {/* {users.map((user,index,array) => (
          <User key={user.id} firstName={user.firstName} lastName={user.lastName} />
        ))} */}

         {/* static data use key={index} */}
         {/* dynamic data use key={user.id} */}

        {users.map((user,index,array)=> <User key={index} {...user}/>)}
      </div>
    </>
  );
}

export default App;
