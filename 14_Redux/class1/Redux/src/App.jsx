import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,Reset } from "./features/Counter/Counter";
function App() {
  const {count,username}= useSelector((state)=>{
         return state.mycounter  
  })
  const dispatch=useDispatch()
  return (
    <>
      <h1>Hello, {username}</h1>
      <h2>Count:{count}</h2>
      <button onClick={()=>{dispatch(increment())}}>Increase</button>
      <button onClick={()=>{dispatch(Reset())}}>Reset</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrease</button>
    </>
  );
}

export default App;
