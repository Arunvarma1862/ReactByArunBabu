import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/posts";

function PostDetails() {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState(null);
  const [error,setError]=useState(null)
  async function fetchPost() {
    try{
        const reponse = await fetch(`${url}/${id}`);
        if(!reponse.ok){
            throw Error("Wrong endpoint url")
        }
        const responseData = await reponse.json();
        setSinglePost(responseData);
        console.log(responseData);
        setError(null)
    }
    catch(error){
         setError(error.message)
    }
   
  }
  useEffect(() => {
    fetchPost();
  }, []);

  if(error){
    return <h1>{error}</h1>
  }

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
