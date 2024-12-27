import "./App.css";
import ExampleUseEffect from "./Components/ExampleUseEffect";
import FectApi from "./Components/FectApi";
import FetchApi2 from "./Components/FetchApi2";
import FetchApi3 from "./Components/FetchApi3";
import CleanUpFunction from "./Components/CleanUpFunction";
import { useState } from "react";
import MouseMove from "./Components/MouseMove";
import UserForm from "./Components/UserForm";

// events
// document.addEventListerner
// sideEffect- if react is not related to state is called sideEffect
// react is a state Management, if it is not managing  it is sideEffect
function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      <div className="App">
        <label htmlFor="showComponent">ShowComponent</label>
        <input
          type="checkbox"
          name="showComponent"
          id="showComponent"
          checked={showComponent}
          onChange={() => setShowComponent(!showComponent)}
        />
          {/* {showComponent && <ExampleUseEffect />} */}
        {/* {showComponent && <FectApi />} */}
        {showComponent && <FetchApi2 />}
        {/* {showComponent && <FetchApi3 />}  */}
        {/* {showComponent && <CleanUpFunction />} */}
        {/* {showComponent && <MouseMove />} */}
        {/* {showComponent && <FetchApi2 />} */}
        {/* {showComponent && <UserForm />} */}
      </div>
    </>
  );
}

export default App;
