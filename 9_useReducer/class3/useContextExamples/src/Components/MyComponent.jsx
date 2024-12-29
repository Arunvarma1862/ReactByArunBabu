import React from 'react'
import Child from './Child'

function MyComponent() {
  return (
    <div style={{backgroundColor:"#9ed2be", padding:"1rem"}}>
        <h1>My component</h1>
        <Child  />
    </div>
  )
}

export default MyComponent