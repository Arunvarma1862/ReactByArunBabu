import React, { useEffect, useState } from 'react'
import Postlist from '../Components/Postlist'
import { redirect, useLoaderData } from 'react-router-dom'

export async  function loader({request},{isLoggedIn}){
  const endpoint="https://jsonplaceholder.typicode.com/posts"
  // console.log(request)
  const url= new URL(request.url)
  // console.log(url)
  if(!isLoggedIn){
    return redirect(`/login?redirectTo=${url.pathname}`)
  }
  const response = await fetch(endpoint)
  if(!response.ok){
    throw new Error("something went wrong")
  }
  const responseData= await response.json()
  return responseData
}

function Posts() {
  const posts= useLoaderData()
  return (
    <>
    <h1>Posts</h1>
    <div>{posts && posts.map((item)=>{
      return <Postlist key={item.id} {...item}/>
    })}</div>

</>
  )
}

export default Posts



// const url="https://jsonplaceholder.typicode.com/posts"
// const[posts,setPosts]=useState(null)
// async function fetchPosts(){
//   const response= await fetch(url)
//   const responseData = await response.json()
//   setPosts(responseData)
// }
// useEffect(()=>{
//   fetchPosts()
// },[])