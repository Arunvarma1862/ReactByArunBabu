import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//useReducer - to manage complex state
//redux state management libary-similar to useReducer
//useState-manage state
//useContext

// useReducer
// return an array-[state,dispatch]
// as an argument-reducerfunction, intialState

//dispatch
// we pass object(action) as argument

//reducer function
// 1. state
// 2. action

function reducer(state,action){

  if(action.type==="INCREASE"){
    return {...state,count:state.count+1}
  }
  if(action.type==="DECREASE"){
    return {...state,count:state.count-1}
  }
  if(action.type==="RESET"){
    return {...state,count:0}
  }
  return state;

}
const intialState={count:0,firstName:"virat"}
function App() {
  // const [count, setCount]=useState({counter:0})

    const [state,dispatch]=useReducer(reducer,intialState)
  function handleIncrease(){
    dispatch({
      type:"INCREASE"
    })
  }
  function handleDecrease(){
    dispatch({
      type:"DECREASE"
    })
  }
  function handleReset(){
    dispatch({
       type:"RESET"
    })
  }
  

  return (
    <>
      <div className='App'>
        <h1>Use Reducer</h1>
        <hr/>
        <h2>hello {state.firstName} Application</h2>
        <h2>{state.count}</h2>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrease}>Decrease</button>

      </div>
    </>
  )
}

export default App
