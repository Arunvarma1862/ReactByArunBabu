import React from 'react'
import Grandchild from './Grandchild'
import { useContext } from 'react'
import { Myappcontext } from '../App'
function Child() {

  const {key2}= useContext(Myappcontext)
  return (
    <div style={{backgroundColor:"#7eaa92", padding:'1rem'}}>
        <h1>Child</h1>
        <p>{key2}</p>
         <Grandchild/>
    </div>
  )
}

export default Child