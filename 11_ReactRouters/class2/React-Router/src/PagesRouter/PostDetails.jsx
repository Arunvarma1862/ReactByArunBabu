import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const url="https://jsonplaceholder.typicode.com/posts"
function PostDetails() {
    const {id}=useParams()
    const [post,setPost]=useState(null)
    const [error,setError]=useState(null)
    const [isPending,setIsPending]=useState(false)
    async function fetchPost(){
        try{
            const reponse= await fetch(`${url}/${id}`)
            if(!reponse.ok){
                throw Error("Wrong Endpoint 404 not found")
            }
            const reponseData= await reponse.json();
            setPost(reponseData)
            setError(null)
            setIsPending(false)
        }
        catch(error){
            setError(error.message)
        }
      
    }
    useEffect(()=>{
        setIsPending(true)
        fetchPost()
    },[])
    if(isPending){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }
  return (
    <div>
        {post && <>
           <p>{post.id}</p>
           <p>{post.title}</p>
           <p>{post.body}</p>
           <p>{post.userId}</p>
        </>}
    </div>
  )
}

export default PostDetails