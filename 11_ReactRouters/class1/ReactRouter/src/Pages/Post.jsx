import React, { useState } from 'react'
import { useEffect } from 'react'
import Postlist from '../Components/Postlist'

// component mount- data fetch
//loader
// fecth-component mount

//6.4+
//loader function
//form
//actions

const endpoint="https://jsonplaceholder.typicode.com/posts"
function Post() {
  const [post,setPost]= useState(null)
  async function fetchData(){
    const response = await fetch(endpoint);
    const responseData= await response.json();
    setPost(responseData)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
          <h1>Posts Page</h1>
         { post && post.map((item)=>{
          return <Postlist  {...item} key={item.id}/>
         })}    
    </>
    
  )
}

export default Post