import React, { useState } from 'react'
import { useEffect } from 'react'
import Postlist from '../Components/Postlist'
import { redirect, useLoaderData } from 'react-router-dom'

// component mount- data fetch
// By using loader function - fecthData -  component mount


//6.4+
//loader function
//form
//actions

// loader 
// step1:- provide loaders function to the route
// step2:- useLoaderData to get data


export async function fetchData({request},{isLoggedIn}){
  const endpoint="https://jsonplaceholder.typicode.com/posts"
  const url=new URL(request.url)
  const pathname= url.pathname
  // if user is not loggedIn redirect to login
   if(!isLoggedIn){
     return redirect(`/login?redirectTo=${pathname}`)
   }
    const response = await fetch(endpoint);
    if(!response.ok){
      throw new Error("Something went wrong")
    }
    const responseData= await response.json();
    return responseData
  }
function Post() {
  const post= useLoaderData()

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




  // console.log(data)
  // const [post,setPost]= useState(null)
  // async function fetchData(){
  //   const response = await fetch(endpoint);
  //   const responseData= await response.json();
  //   setPost(responseData)
  // }
  // useEffect(()=>{
  //   fetchData()
  // },[])