import React from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css"

function MovieList({ data }) {
  const { movieResponse,isError,error } = data;
    if(!movieResponse && isError===true){
    return <h1 style={{margin:"1rem 1rem" }}>{error}</h1>
  }
  if(movieResponse && movieResponse.Response==="False"){
     return <h1 style={{margin:"2rem 4rem" }}>{movieResponse.Error || "no result found"} </h1>
  }
  return (
    <div className={`container ${styles.moviesList}`}>
      {movieResponse.Search.map((item) => {
        return <MovieCard key={item.imdbID} {...item} />;
      })}
    </div>
  );
}

export default MovieList;
