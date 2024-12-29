import "./App.css";
import MyComponent from "./Components/MyComponent";
import { createContext } from "react";

// prop drilling
// ---------context wrap value={myfunc}----------
// componet-child-grandchild
// -------------context end--------------------
// context
// to avoid prop drilling we use usecontext

// how to use context
//step 1:- import createContext from react
//step 2:- create context outside the component
//step 3:- wrap application in context.provider
// provider
// consume

export const Myappcontext= createContext()

function App() {
  function myfunc(){
    console.log("my func ")
  }
  return (
    <Myappcontext.Provider value={{
      key1:"value1",
      key2:"value2",
      func:myfunc
    }}>
      <div
        style={{ padding: "1rem", backgroundColor: "#c8e4b2", height: "100vh" }}
      >
        <h1>App</h1>
        <MyComponent myfunc={myfunc} />
      </div>
    </Myappcontext.Provider>
  );
}
 
export default App;
