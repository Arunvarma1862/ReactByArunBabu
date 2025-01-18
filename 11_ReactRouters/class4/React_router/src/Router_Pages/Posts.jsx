import React, { useEffect, useState } from "react";
import PostList from "../Component/PostList";
import { redirect, useLoaderData } from "react-router-dom";

export async function loader({request},{isLogged}) {
  const url= new URL(request.url)
  console.log(url);
  console.log(url.pathname);
  if(!isLogged){
    return redirect(`/login?redirectTo=${url.pathname}`)
  }
 
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error("something went wrong 404 not found")
      }
      const reponseData = await response.json();
      return reponseData
  }
  catch(error){
   console.log(error.message)
  }
  
}

function Posts() {
  const posts = useLoaderData();
  return (
    <>
    <h1>Posts</h1>
      <div>{posts && posts.map((posts)=>{
        return <PostList key={posts.id} {...posts}/>
    })}</div>
      
    </>
  );
}

export default Posts;
