import React, { useEffect, useState } from 'react'
import Postlist from '../Components/Postlist';

const endpoint="https://jsonplaceholder.typicode.com/posts"

function Posts() {
  const [posts,setPosts]=useState(null);
  const [isPending,setIsPending]=useState(false)
  async function fetchPosts(){
    const response= await fetch(endpoint);
    const reponseData=await response.json();
    setPosts(reponseData)
    setIsPending(false)
  }
  useEffect(()=>{
    setIsPending(true)
    fetchPosts()
  },[])
  if(isPending){
    return <h1>Loading...</h1>
  }
  return (
    <div>{posts && posts.map((item)=>{
      return <Postlist {...item} key={item.id}/>
    })}</div>
  )
}

export default Posts