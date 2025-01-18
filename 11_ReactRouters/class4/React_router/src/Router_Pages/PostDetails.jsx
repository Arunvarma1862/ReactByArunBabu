import React, { useEffect, useState } from 'react'
import { redirect, useLoaderData, useParams } from 'react-router-dom';
import axios from "axios"

export async function loader(args,{isLogged}){
      console.log(args)
      const id= args.params.id
      console.log(id)
      if(!isLogged){
        return redirect("/login")
      }
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // if(!response.ok){
        //     throw new Error("Wrong endpoint 404 not found")
        // }
         const data =await response.data
         console.log(data)
         return data
             
    }
    catch(error){
        console.log(error.message)
    } 
  

}
function PostDetails() { 
   const singlePost= useLoaderData()

  return (
       <div>
        <h1>singlePost</h1>
        {singlePost && <>
            <p>id:{singlePost.id}</p>
            <p>title:{singlePost.title}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur hic optio veniam quisquam ea. Beatae voluptatem, veritatis obcaecati ullam a tempora tenetur nihil temporibus ipsum exercitationem, consequuntur id cupiditate corrupti possimus quae nisi dolore quam nulla! Tempora vero at numquam magni, quas, sunt, ea inventore hic deserunt nam ut asperiores!</p>
        </>}
       </div>
  )
}

export default PostDetails