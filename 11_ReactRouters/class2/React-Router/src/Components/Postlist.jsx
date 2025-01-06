import React from 'react'
import { Link } from 'react-router-dom'

function Postlist({id,title,userId,body}) {
  return (
    <div style={{padding:"1rem",margin:"1rem",border:"1px solid blue"}}>
      <Link to={id.toString()}><p>title:{title}</p> </Link>
        <h2>id:{id}</h2>    
    </div>
  )
}

export default Postlist