import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
 
  export async function loader(args,{isLoggedIn}) {
        console.log(args)
        if(!isLoggedIn){
          return redirect("/login")
        }
        const id= args.params.id
        const url = "https://jsonplaceholder.typicode.com/posts";
        const reponse = await fetch(`${url}/${id}`);
        const responseData = await reponse.json();
        return responseData  
    }
  
function PostDetails() {
 const singlePost=useLoaderData()
  return (
    <>
      {singlePost && (
        <>
          <h2>{singlePost.title}</h2>
          <h2>{singlePost.id}</h2>
          <h2>{singlePost.body}</h2>
          <h2>{singlePost.userId}</h2>
        </>
      )}
    </>
  );
}

export default PostDetails;





 // const { id } = useParams();
// const [singlePost, setSinglePost] = useState(null);
//   const [error,setError]=useState(null)
//   async function fetchPost() {
//     try{
//         const reponse = await fetch(`${url}/${id}`);
//         if(!reponse.ok){
//             throw Error("Wrong endpoint url")
//         }
//         const responseData = await reponse.json();
//         setSinglePost(responseData);
//         console.log(responseData);
//         setError(null)
//     }
//     catch(error){
//          setError(error.message)
//     }
   
//   }
//   useEffect(() => {
//     fetchPost();
//   }, []);

// if(error){
//   return <h1>{error}</h1>
// }


