import React from 'react'
import { Link } from 'react-router-dom'
function PostList({id,body,title,userId}) {
  return (
    <div style={{border:"1px solid blue",margin:"1rem",padding:"1rem"}}>
        <p><b>Id</b>:{id}</p>
        <p><b>Body</b>:{body}</p>
        <p><Link to={`${id.toString()}`}><b>Title</b>:{title}</Link></p>
        <p><b>UserId</b>:{userId}</p>
    </div>
  )
}

export default PostList