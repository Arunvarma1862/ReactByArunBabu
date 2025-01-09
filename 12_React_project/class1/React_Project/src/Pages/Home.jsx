import React from "react";
import Search from "../Components/Search";
import MovieList from "../Components/MovieList";
import axios from "axios"
import { apikey } from "../constants";
import { useLoaderData } from "react-router-dom";

export async function loader({request}) {
  const url= new URL(request.url)
  const searchTerm= url.searchParams.get("search") || "one piece"
  try{
    const movieEndPoint=`http://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}`
    const response= await axios.get(movieEndPoint)
    return {movieApiResponse:response.data, searchTerm , isError:false, error:""}
  }
  catch(error){
    const errorMessage=error?.response?.data?.Error || error.message || "something went wrong"
    return {movieApiResponse:null, searchTerm, isError:true, error:errorMessage}
  }
  
}

function Home() {
  const data= useLoaderData()

  return (
    <>
      <Search searchTerm={data.searchTerm} />
      <MovieList data={data}/>
    </>
  );
}

export default Home;
