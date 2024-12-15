// hooks-React hooks to manage states-used in functional components
// useState hooks- state management- call inside functional component only
// In React cannot use normal variable to store data to change UI
// class based components

// state
// state ---> data
// when state change,  the component re-render again- the UI changes
// const[data,setData]=useState(defaultValue)-return array-[statevalue,functionToUpdateThatStateValue]
import { useState } from "react";
import "./App.css";

function App() {
  
  // const returnedValue=useState("viratkohil");
  // console.log(returnedValue);
  // const name=returnedValue[0];
  // const functionToUpdateThatStateValue=returnedValue[1]

  console.log("compopnent rendered")
  const [name, setName] = useState("ViratKohil");
  function handleChangeName() {
    // functionToUpdateThatStateValue("jaddu");
    if(name==="ViratKohil"){
      setName("jaddu");
    }

    else{
      setName("ViratKohil")
    }
    
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleChangeName}>change Name</button>
    </div>
  );
}

export default App;
