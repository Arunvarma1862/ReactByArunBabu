import React from "react";
import Search from "../Components/Search";
import MovieList from "../Components/MovieList";
import { apikey } from "../constants";
import axios from "axios"
import { useLoaderData } from "react-router-dom";


export async function loader({request}){
 
  const url= new URL(request.url)
  const searchTerms= url.searchParams.get('search') || "one piece"
  try{
    const moviesearchEndpoint=`http://www.omdbapi.com/?apikey=${apikey}&s=${searchTerms}`
    const response= await axios.get(moviesearchEndpoint)
    console.log(response)
    return {movieResponse:response.data,searchTerms,isError:false, error:""};
  }
  catch(error){
    const errormessage=error?.response?.data?.Error ||error.message|| "something went wrong" 
    return {movieResponse:null,searchTerms,isError:true, error:errormessage};
  }
 
}

function Home() {
  const data= useLoaderData()
  // console.log(data)
  return (
    <>
      <Search searchTerms={data.searchTerms} />
      <MovieList  data={data}/>
    </>
  );
}

export default Home;
