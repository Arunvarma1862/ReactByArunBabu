import React, { useEffect, useState } from 'react'
import { redirect, useLoaderData, useParams } from 'react-router-dom'

export async function loader(args,{isLoggedIn}){
  const endpoint="https://jsonplaceholder.typicode.com/posts"
  console.log(args)
  const id= args.params.id
  if(!isLoggedIn){
    return redirect("/login")
  }
  const response= await fetch(`${endpoint}/${id}`)
  if(!response.ok){
    throw new Error("something went wrong")
  }
  const reponseData= await response.json()
  return reponseData
}

function PostDetails() {
  const singlePost=useLoaderData()
   
  return (
    <div>{singlePost && <>
        <p>{singlePost.userId}</p>
        <p>{singlePost.title}</p>
        <p>{singlePost.body}</p>
        <p>{singlePost.id}</p></>
    }</div>
  )
}

export default PostDetails





// const [singlePost,setSinglePost]=useState(null)
// const url="https://jsonplaceholder.typicode.com/posts"
// const {id} = useParams()
// async function fetchSinglePost(){
//     const response= await fetch(`${url}/${id}`)
//     const responseData= await response.json()
//     setSinglePost(responseData)
// }
// useEffect(()=>{
//     fetchSinglePost()
// },[])