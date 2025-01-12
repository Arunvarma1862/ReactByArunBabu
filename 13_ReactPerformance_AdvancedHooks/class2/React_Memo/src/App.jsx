import "./App.css";
// import Demo from "./ReactDemo/Demo";
// import Extra from "./ReactDemo/Extra";
import ExampleUseMemo1 from "./ReactDemo/ExampleUseMemo1";
import ExampleUseMemo2 from "./ReactDemo/ExampleUseMemo2";

function App() {
  console.log("App rendered");
  return (
    <>
      {/* <ExampleUseMemo1 /> */}
      <ExampleUseMemo2/>
    </>
  );
  // return (
  //   <>
  //     <h1>React Memo Demo</h1>
  //     <Demo>
  //       <Extra/>
  //     </Demo>
  //   </>
  // ); 
}

export default App;
